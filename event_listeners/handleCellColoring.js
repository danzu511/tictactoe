import * as THREE from 'three';
import { checkScore } from '../functions/checkScore.js';
import { updatePoints } from '../functions/updatePoints.js';
import Game from '../models/Game.js';
import { storeGame } from '../functions/storeGame.js';
import { checkWinner } from '../functions/checkWinner.js';
import { Grid } from '../models/Grid.js';

export function handleCellColoring(newGrid, scene, renderer, colors, turn, camera, dim, points){
  const baseColor = colors[0]
  const p1Color = colors[1]
  const p2Color = colors[2]
  const turnCount = (dim*dim) + 1
  let gameOver = false
  const game = new Game()
  console.log('newgame created')
// Add event listener for mouse click to select cells
  document.addEventListener('click', (event) => {
    if (!gameOver){
      // Calculate the mouse position in normalized device coordinates (NDC)
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      // Create a raycaster to detect which cell the user clicked on
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // Check for intersections between the ray and the cells
      const intersects = raycaster.intersectObjects(newGrid.cells);

      // If there is at least one intersection, select the first cell in the array
      if (intersects.length > 0) {
        const selectedCell = intersects[0].object;
        //console.log(newGrid.cells)
        // Change the color of the selected cell
        // Get RGB values of baseColor
        const baseColorRGB = {
          r: ((baseColor >> 16) & 255) / 255,
          g: ((baseColor >> 8) & 255) / 255,
          b: (baseColor & 255) / 255
        };
        // Compare baseColorRGB with selectedCell.material.color
        if (
          selectedCell.material.color.r === baseColorRGB.r &&
          selectedCell.material.color.g === baseColorRGB.g &&
          selectedCell.material.color.b === baseColorRGB.b
        ){
          if (turn === 1) {
            selectedCell.material.color.set(p1Color);
          }
          
          else if(turn === -1){
            selectedCell.material.color.set(p2Color);
          }
          let cellCopies = [];
          let cloneGrid = new Grid(dim, dim, baseColor)
          for (let i = 0; i < newGrid.cells.length; i++) {
            let cellCopy = newGrid.cells[i].clone();
            cellCopies.push(cellCopy);
            cloneGrid.cells[i].material.color = newGrid.cells[i].material.color.clone();
          }            
          game.storeGrid(cloneGrid, [...points])
          turn *= -1
        }
        else{
          console.log('Cell already selected')
        }
        console.log(selectedCell)
        console.log(`Selected cell at (${selectedCell.position.x}, ${selectedCell.position.y})`);
        console.log(`grid array: ${game.gridArray.length}`)
        if(checkScore(newGrid,dim, colors)){
          //points for player 1
          if(turn === 1){
              points[1] += 1
          }
          //points for player 2
          else{
              points[0] += 1
          }
          console.log(points)
          updatePoints(points)
          
          // Update the points in the most recent grid object in gridArray
          const latestGridObject = game.gridArray[game.gridArray.length - 1];
          latestGridObject.points = [...points];
        }
        renderer.render(scene, camera);
        // Check if the game is over
        if (game.gridArray.length === turnCount) {
          //store the game history
          storeGame(game, turnCount, checkWinner(points), scene, baseColor)
          console.log('game over')
          gameOver = true
        } 
      }
    }
});
}