export default class Game {
  constructor() {
    this.gridArray = [];
  }

  clearArray() {
    this.gridArray = [];
  }

  storeGrid(newGrid, points) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // January is 0, so add 1 to get the actual month
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const gridObject = {
      newGrid,
      points,
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
    };

    this.gridArray.push(gridObject);
  }
}
