export function checkAllCellsColored(grid, baseColor){
// Check if all cells have been colored
    for(let i = 0; i < grid.cells.length; i++){
        let color = grid.cells[i].material.color;
        const r = Math.round(color.r * 255).toString(16).padStart(2, '0');
        const g = Math.round(color.g * 255).toString(16).padStart(2, '0');
        const b = Math.round(color.b * 255).toString(16).padStart(2, '0');
        const hexColor = parseInt(`${r}${g}${b}`, 16);

        if(hexColor === baseColor){
            return false;
        }
    }
    return true;
}