import axios from "axios";
import { Grid } from '../models/Grid.js';
import { getIp } from '../main.js';
import { getURL } from '../main.js';

export function loadGames(scene) {
  const url = `${getURL()}/loadGames?ip=` + encodeURIComponent(getIp())
  //const url ='http://localhost:3000/loadGames?ip=' + encodeURIComponent(getIp());  
  console.log('url: ', url);
  let gameArray = [];

  //console.log('userIP: ', userIP);	

  return axios.get(url)
    .then(response => {
      console.log('Response:', response);
      for (let i = 0; i < response.data.length; i++) {
        //console.log('response.data[i]: ', response.data[i])
        //formatted game contains the game, winner, and turnCount
        let formattedGame = { 
          game: createGameFromColors(response.data[i], scene, 0xBbabbb),
          points: response.data[i].points,
          dates: response.data[i].dates,
          winner: response.data[i].winner,
          turnCount: response.data[i].turnCount,
          ip: response.data[i].ip
        };
        gameArray.push(formattedGame);
      }
      return gameArray;
    })
    .catch(error => {
      console.error('Error:', error);
      return gameArray;
    });
}

export function createGameFromColors(game, scene, baseColor, skipColorParse){
  let dim = Math.sqrt(game.turns[0].length)
  let newGame = []
  //Iterate each turn
  for(let j = 0; j < game.turnCount; j++){
    let newTurn = new Grid(dim, dim, scene, baseColor);
    //Iterate each cell in each turn and set the color
    for(let o = 0; o < newTurn.cells.length; o++){
      if(skipColorParse){
        newTurn.cells[o].material.color.set(game.turns[j][o])
      }
      else{
        let newColorStr = "0x" + game.turns[j][o].toString(16);
        let newColorInt = parseInt(newColorStr, 16);
        newTurn.cells[o].material.color.set(newColorInt)
      }
    }
    newGame.push(newTurn)
  }
  return newGame;
}
