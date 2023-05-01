
export function checkScore(newGrid, dim, colors) {
    const baseColor = colors[0];
    const p1Color = colors[1];
    const p2Color = colors[2];

    const cells = newGrid.cells;
    let win_threshold = dim;
  
    if (dim > 4) {
      win_threshold = 4;
    }
  
    // Check rows
  for (let i = 0; i < cells.length; i += dim) {
    for (let j = 0; j <= dim - win_threshold; j++) {
      let rowSum = 0;
      for (let k = 0; k < win_threshold; k++) {
        const index = i + j + k;
        if (cells[index].material.color.getHex() === p1Color) {
          rowSum++;
        } else if (cells[index].material.color.getHex() === p2Color) {
          rowSum--;
        }
      }
      if (Math.abs(rowSum) === win_threshold) {
        // Clear winning cells
        for (let k = 0; k < win_threshold; k++) {
          const index = i + j + k;
          cells[index].material.color.set(baseColor);
        }
        return true;
      }
    }
  }
  
   // Check columns
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j <= dim - win_threshold; j++) {
      let colSum = 0;
      for (let k = 0; k < win_threshold; k++) {
        const index = i + (j + k) * dim;
        if (cells[index].material.color.getHex() === p1Color) {
          colSum++;
        } else if (cells[index].material.color.getHex() === p2Color) {
          colSum--;
        }
      }
      if (Math.abs(colSum) === win_threshold) {
        // Clear winning cells
        for (let k = 0; k < win_threshold; k++) {
          const index = i + (j + k) * dim;
          cells[index].material.color.set(baseColor);
        }
        return true;
      }
    }
  }
  
  // Check diagonals
  for (let r = 0; r <= dim - win_threshold; r++) {
    for (let c = 0; c <= dim - win_threshold; c++) {
      let diagonal1Sum = 0;
      let diagonal2Sum = 0;
      let diagonal1Cells = []; // Keep track of diagonal 1 cells
      let diagonal2Cells = []; // Keep track of diagonal 2 cells
      for (let i = 0; i < win_threshold; i++) {
        // Check first diagonal
        const idx1 = (r + i) * dim + (c + i);
        if (cells[idx1].material.color.getHex() === p1Color) {
          diagonal1Sum++;
          diagonal1Cells.push(cells[idx1]);
        } else if (cells[idx1].material.color.getHex() === p2Color) {
          diagonal1Sum--;
          diagonal1Cells.push(cells[idx1]);
        }

        // Check second diagonal
        const idx2 = (r + i) * dim + (dim - c - 1 - i);
        if (cells[idx2].material.color.getHex() === p1Color) {
          diagonal2Sum++;
          diagonal2Cells.push(cells[idx2]);
        } else if (cells[idx2].material.color.getHex() === p2Color) {
          diagonal2Sum--;
          diagonal2Cells.push(cells[idx2]);
        }
      }
      if (Math.abs(diagonal1Sum) >= win_threshold) {
        // Set color of diagonal 1 cells to white
        diagonal1Cells.forEach(cell => cell.material.color.set(baseColor));
        return true;
      }
      if (Math.abs(diagonal2Sum) >= win_threshold) {
        // Set color of diagonal 2 cells to white
        diagonal2Cells.forEach(cell => cell.material.color.set(baseColor));
        return true;
      }
    }
  }
  return false;
  }