//Handles storing each game into gameArray and database
import axios from 'axios';
import { createGameFromColors } from './loadGames.js';
import { updateWinrate } from './updateWinrate.js';
import { showAlert } from './showAlert.js';
import { getIp } from '../main.js';


export let gameArray = [];
export function storeGame(game, turnCount, winner, scene, baseColor) {
  const url = 'http://localhost:3000/storeGame';

  let turns = []
  let points = []
  let dates = []
  let IP = getIp()

  //Iterate each turn
  for(let i = 0; i < turnCount; i++){
    let cellColors = []
    //Iterate each cell in each turn
    for(let j = 0; j < game.gridArray[i].newGrid.cells.length; j++){
      cellColors.push(game.gridArray[i].newGrid.cells[j].material.color)
    }
    points.push(game.gridArray[i].points)
    dates.push(createDate(game, i))
    turns.push(cellColors)
  }
  //gameObject contains turns, points, dates, turnCount, and winner
  //turns is an array of arrays of cell colors of each turn
  //this is used to store the game into the database
  const gameObject = {
    turns: turns,
    points: points,
    dates: dates,
    winner: winner,
    turnCount: turnCount,
    ip: IP
  };
  console.log('turns', turns)
  console.log('gameObject before posting: ', gameObject);
  //When a game is played it is added to the gameArray, which can be displayed to user immidiaetly, without reloading and therefore accessing the database
  const newestGame = createGameFromColors(gameObject, scene, baseColor, true);
  const newestGameObject = {
    game: newestGame,
    points: points,
    dates: dates,
    winner: winner,
    turnCount: turnCount,
    ip: IP
  }
  gameArray.push(newestGameObject);
  updateWinrate(gameArray);
  showAlert('Game Over!')

  console.log('gameArray after game: ', gameArray)

  axios.post(url, gameObject)
    .then(response => {
      console.log('Response:', response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function createDate(game, turn){
  let year = game.gridArray[turn].year
  let month = game.gridArray[turn].month
  let day = game.gridArray[turn].day
  let hour = game.gridArray[turn].hours
  let minute = game.gridArray[turn].minutes
  let second = game.gridArray[turn].seconds
  return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second 
}