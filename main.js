import * as THREE from 'three';
import { Grid } from './models/Grid.js';
// import { handleCameraView } from './event_listeners/handleCameraView.js';
import { handleCellColoring } from './event_listeners/handleCellColoring.js';
import { createMaterialArray } from './functions/createMaterialArray.js';
import { animateCamera } from './functions/animateCamera.js';
import { createUI } from './functions/createUI.js';
import { updatePoints } from './functions/updatePoints.js';
import { renderGrid } from './functions/renderGrid.js';
import { showGames } from './functions/showGames.js';
import { storeGame, gameArray } from './functions/storeGame.js';
import { loadGames } from './functions/loadGames.js';
import { hideGameInfo } from './functions/hideGameInfo.js';
import { getUserIP } from './functions/getUserIp.js';

import './style.css';

const URL = 'https://tictactoe-back.onrender.com';
let USER_IP;
getUserIP().then((ip) => {
  USER_IP = ip;
}).then(() => {
  loadGames(scene).then((game) => {
    for (let i = 0; i < game.length; i++) {
      gameArray.push(game[i]);
    }
    console.log('gameArray: ', gameArray);
    // Do something with the gameArray here
    // console.log('gameArray: ', gameArray)
  });
})
  .catch((error) => {
    console.error('Error getting user IP:', error);
  });

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 10);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a skybox background
const materialArray = createMaterialArray();
const skyBoxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
const skybox = new THREE.Mesh(skyBoxGeo, materialArray);
scene.add(skybox);

// handleCameraView(camera, renderer, scene, 10)

// Call createUI with createGrid as callback function
const uiContainer = createUI(createGrid, viewOldGames);
document.body.appendChild(uiContainer);
// Renders the page on refresh. Unknown feature causes the page to render black on refresh without mouse or keyboard input
setTimeout(() => {
  renderer.render(scene, camera);
}, 500);

let newGrid;
let points = [0, 0];

function viewOldGames() {
  // console.log('newGrid: ', newGrid)
  // Remove current Grid from scene
  if (newGrid) {
    for (let i = 0; i < newGrid.lines.length; i++) {
      scene.remove(newGrid.lines[i]);
    }
    for (let i = 0; i < newGrid.cells.length; i++) {
      scene.remove(newGrid.cells[i]);
    }
    points = [0, 0];
    updatePoints(points);
    renderer.render(scene, camera);
  }
  showGames(gameArray, scene, renderer, camera);
  // console.log('gameArray[0].game: ', gameArray[0].game)

  // renderGrid(gameArray[0].game, scene, renderer, camera)
}

function createGrid() {
  if (newGrid) {
    for (let i = 0; i < newGrid.lines.length; i++) {
      scene.remove(newGrid.lines[i]);
    }
    for (let i = 0; i < newGrid.cells.length; i++) {
      scene.remove(newGrid.cells[i]);
    }
    points = [0, 0];
    updatePoints(points);
  }

  // Get the slider value
  const slider = document.getElementById('myRange');
  const dim = parseInt(slider.value);
  const cameraDistance = dim * 1.5;

  // Create the grid with the new dimension
  const baseColor = 0xBbabbb;
  const colors = [baseColor, 0x96be25, 0x2596be];
  newGrid = new Grid(dim, dim, scene, baseColor);

  scene.add(...newGrid.lines);
  scene.add(...newGrid.cells);

  const turn = 1;
  hideGameInfo('hidden');
  // Handles cell coloring and scores
  handleCellColoring(newGrid, scene, renderer, colors, turn, camera, dim, points);
  // Handles camera movement
  // handleCameraView(camera, renderer, scene, cameraDistance)
  let requestID;
  const animationDuration = 2;
  animateCamera(camera, renderer, scene, cameraDistance, animationDuration);
  animate();

  function animate() {
    console.log('a');
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);
    requestID = requestAnimationFrame(animate);
    setTimeout(() => {
      cancelAnimationFrame(requestID);
    }, animationDuration * 1000);
  }
}

export function getIp() {
  // console.log('USER_IP: ', USER_IP)
  return USER_IP;
}
export function getURL() {
  console.log('URL: ', URL);
  return URL;
}
