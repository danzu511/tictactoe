export function checkWinner(points) {
  if (points[0] === points[1]) {
    return 'tie';
  }
  if (points[0] > points[1]) {
    return 'Green';
  }

  return 'Blue';
}
