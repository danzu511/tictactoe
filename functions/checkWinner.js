export function checkWinner(points){
    if (points[0] === points[1]){
        return "tie"
    }
    else if (points[0] > points[1]){
        return "Green"
    }
    else{
        return "Blue"
    }
}