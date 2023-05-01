import { updatePoints } from "./updatePoints";
import { updateTurnCount } from "./updateTurnCount";

export function renderGrid(game, scene, renderer, camera) {
  console.log('renderGrid game: ', game)
  let turn = game.turnCount - 1;
  let currentGrid = game.game[turn];
  let previousGrid; 
  let points = game.points[turn]
  let time = game.dates[turn]

  //For adjusting camera distance
  let dim = Math.sqrt(currentGrid.length -1);
  camera.position.set(0,0,dim*3.5)

  addGridToScene(currentGrid, scene);
  renderer.render(scene, camera);

  // Declare named function expression and add event listeners for left and right arrow keys
  function leftRight(event) {
    if (event.key === 'ArrowLeft') {
      if(turn === 0){
        console.log('Turn already at 0')
      }
      else{
        turn--;
        console.log('Turn decreased to:', turn);
      }
    } else if (event.key === 'ArrowRight') {
      if(turn === currentGrid.cells.length){
        console.log('Turn already at max')
      }
      else{
        turn++;
        console.log('Turn increased to:', turn);
      }
    }
    else if (event.key === 'ArrowUp'|| event.key === 'ArrowDown') {
      //Remove event listener as they would stack up as they are created everytime the function is called.
      //showGames calls this function every time when games are changed
      document.removeEventListener('keydown', leftRight);
      return;
    }

    // Update previousGrid and currentGrid
    previousGrid = currentGrid;
    currentGrid = game.game[turn];
    points = game.points[turn];
    time = game.dates[turn];
    updatePoints(points);
    updateDate(time);
    updateTurnCount(game.turnCount, turn);
    //console.log('points: ', points)
    console.log('game : ', game)
    console.log('game.ip : ', game.ip)
    // Remove previousGrid and add currentGrid to the scene
    removeGridFromScene(previousGrid, scene);
    addGridToScene(currentGrid, scene);
    renderer.render(scene, camera);

    //remove currentGrid from scene, but don't rerender, so it's not lurking around afterwards
    removeGridFromScene(currentGrid, scene);
    
  }
  updateTurnCount(game.turnCount, turn);
  updatePoints(points);
  updateDate(time);
  removeGridFromScene(currentGrid, scene);
  document.addEventListener('keydown', leftRight);

}

export function removeGridFromScene(grid, scene){
  for (let i = 0; i < grid.lines.length; i++) {
    scene.remove(grid.lines[i]);
  }
  for (let i = 0; i < grid.cells.length; i++) {
    scene.remove(grid.cells[i]);
  }
}

function addGridToScene(grid, scene){
  scene.add(...grid.lines);
  scene.add(...grid.cells);
}

function updateDate(time){
  const timeContaier = document.getElementById('timeGame-display');
  const dateText = timeContaier.querySelector('span');
  dateText.textContent = time;
}
