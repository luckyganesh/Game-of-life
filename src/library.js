const createArray = function(length,filler){
  return new Array(length).fill(filler);
}

const generateBoard = function(length,filler){
  let board =[];
  for(let index = 0; index <length;index++){
    board[index] = createArray(length,filler)
  }
  return board;
}

const addSpaces = function(text){
  return " "+text+" ";
}

const checkCell = function(elem){
  let alivecell = '\u25A0';
  let deadcell = ' ';
  return elem == 1 ? alivecell : deadcell;
}

const printBoard = function(board){
  let length = board.length;
  let dashline = createArray(length*4+3,"-").join("");
  let visual = "  |"+board.map((x,y) => y).map(addSpaces).join("|")+"|"
  let lines = [visual];
  let lineLength = 1;
  lines[lineLength++] = dashline;
  for(let row =0;row < length;row++){
    let column = row+" |"+board[row].map(checkCell).map(addSpaces).join("|");
    lines[lineLength++] = column+"|";
    lines[lineLength++] = dashline;
  }
  return lines.join("\n");
}

const startGame = function(length){
  if(length == "wrong input"){
    return length;
  }
  let world = generateBoard(length,0);
  return printBoard(world);
};

module.exports = {
  createArray,
  generateBoard,
  addSpaces,
  printBoard,
  startGame
};
