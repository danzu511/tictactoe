export function updatePoints(points) {
  const pointsContainer = document.getElementById('points-container');
  // get the second span element (the one with points)
  const pointsText = pointsContainer.querySelector('span:nth-child(2)');
  // update the points text only 
  if(points[0] > points[1]){
    pointsText.textContent = `${points[0]} > ${points[1]}`
  }
  else if(points[0] < points[1]){
    pointsText.textContent = `${points[0]} < ${points[1]}`
  }
  else{
    pointsText.textContent = `${points[0]} : ${points[1]}`
  }
  if(points === [0,0]){
    pointsText.textContent = `0 : 0`
    console.log('points reset')
  }
}
