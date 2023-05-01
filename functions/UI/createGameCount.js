export function createGameCount(id){
    //Show which game is being viewed, for example 1/10
    const gameCountContainer = document.createElement("div");
    gameCountContainer.setAttribute("id", id);

    const gameNum = document.createElement("p");
    gameNum.innerText = "Game 0/0";
    gameNum.style.fontSize = "2em";
    gameNum.style.color = "#ffffff";
    gameNum.style.fontWeight = "bold";
    gameNum.style.fontFamily = "helvetica"
    gameNum.style.position = "absolute";
    gameNum.style.top = "20%";
    gameNum.style.left = "50%";
    gameNum.style.transform = "translateX(-150%)";

    const turnNum = document.createElement("p");
    turnNum.innerText = "Turn 0/0";
    turnNum.style.fontSize = "2em";
    turnNum.style.color = "#ffffff";
    turnNum.style.fontWeight = "bold";
    turnNum.style.fontFamily = "helvetica"
    turnNum.style.position = "absolute";
    turnNum.style.top = "20%";
    turnNum.style.left = "50%";
    turnNum.style.transform = "translateX(80%)";

    gameCountContainer.appendChild(gameNum);
    gameCountContainer.appendChild(turnNum);
    gameCountContainer.style.visibility = "hidden";
    return gameCountContainer;
}