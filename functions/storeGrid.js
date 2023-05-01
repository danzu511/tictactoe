export default class Game {
  constructor() {
    this.gridArray = [];
  }

  clearArray() {
    this.gridArray = [];
  }

  storeGrid(newGrid, points) {
    const gridObject = {
      newGrid: newGrid,
      points: points
    };
    this.gridArray.push(gridObject);
  }
}
