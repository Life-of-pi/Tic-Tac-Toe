document.addEventListener("DOMContentLoaded",()=>{
  let body = document.getElementsByTagName("body")[0];
  // Container Div tag
  let container = document.createElement("div");
  container.id = "container";
  container.className = "containerClass"
  body.appendChild(container);
  // H1 tag for title
  let h1 = document.createElement("h1");
  h1.id = "title";
  h1.className = "titleClass";
  document.getElementById("container").innerHTML = "Tic <span>Tac</span> Toe";
  container.appendChild(h1);

  // status action for whose turn and display tie with Reset option
  let statusAction = document.createElement("div");
  statusAction.id = "status-action";
  container.appendChild(statusAction);

  // tempDiv for the status
  let tempDiv =  document.createElement("div");
  tempDiv.id = "status";
  statusAction.appendChild(tempDiv);
  document.getElementById("status").innerHTML = "x is next";

  // Button using Div
  tempDiv =  document.createElement("div");
  tempDiv.id = "reset";
  statusAction.appendChild(tempDiv);
  document.getElementById("reset").innerHTML = "Reset";

  let gameGrid = document.createElement("div");
  gameGrid.id = "game-grid";
  container.appendChild(gameGrid);
  // 3 x 3 matrix
  for(let i=0,j=1; i<9; i++){
    tempDiv = document.createElement("div");
    tempDiv.className = "game-cell";
    tempDiv.classList.add("gameCellId"+j);
    // tempDiv.id = "gameCellId"+j;
    gameGrid.appendChild(tempDiv);
    j++;
  }

  /**************************************************************
                    Functions and Events for the game
  ***************************************************************/

  const statusDiv = document.getElementById("status");
  const resetDiv = document.getElementById("reset");
  const cellDivs = document.getElementsByClassName("game-cell");

  // game variable
  let gameIsLive = true;
  let xIsNext = true;
  let winner = null;

// functions

const handleWin = (letter)=>{
  gameIsLive = false;
  if(letter === "x"){
      statusDiv.innerHTML = `X has won!`
  }else {
    statusDiv.innerHTML = `<span>O has won!</span>`;
  }
};


const checkGameStatus=()=>{
  const topLeft = cellDivs[0].classList[2];
  const topMiddle = cellDivs[1].classList[2];
  const topRight = cellDivs[2].classList[2];
  const middleLeft = cellDivs[3].classList[2];
  const middleMiddle = cellDivs[4].classList[2];
  const middleRight = cellDivs[5].classList[2];
  const bottomLeft = cellDivs[6].classList[2];
  const bottomMiddle = cellDivs[7].classList[2];
  const bottomRight = cellDivs[8].classList[2];

  // is there a winner
  if(topLeft && topLeft===topMiddle && topLeft===topRight){
     handleWin(topLeft);
     cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
  }else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    statusDiv.innerHTML = 'Game Tie!';
  }else{
    xIsNext = !xIsNext;
    if(xIsNext){
        statusDiv.innerHTML = `X is next`;
    }else{
      statusDiv.innerHTML = `<span> O is next</span>`;
    }
  }
};

  // Event handlers
  const handleReset = (e) =>{
    gameIsLive = true;
    xIsNext = true;
    statusDiv.innerHTML = "x is next"
    for(const cellDiv of cellDivs){
      cellDiv.classList.remove("x");
      cellDiv.classList.remove("o");
      cellDiv.classList.remove("won");
    }
  }

  const handleCellClick = (e)=>{
    const classList = e.target.classList;
    if(!gameIsLive || classList[2] === "x" || classList[2] === "o"){
      return;
    }
    if(xIsNext){
      classList.add('x');
      checkGameStatus();
    }else{
      classList.add('o');
      checkGameStatus();
    }
  };
  // event listners
  resetDiv.addEventListener("click",handleReset);
  for(let cellDiv of cellDivs){
    cellDiv.addEventListener("click", handleCellClick);
  }
});













///



///
