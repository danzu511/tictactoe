export default class Game {
  constructor() {
    this.gridArray = [];
  }

  clearArray() {
    this.gridArray = [];
  }

  storeGrid(newGrid, points) {
    const gridObject = {
      newGrid,
      points,
    };
    this.gridArray.push(gridObject);
  }
}
