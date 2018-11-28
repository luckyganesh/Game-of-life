const readline = require("readline-sync").question;

const initialState = function(board){
  console.log("if you want to stop press 'n' and enter");
  let place = readline("give input:");
  if(place == "n"){
    return board;
  }
  let splited = place.split("_").map((x) => +x);
  board[splited[0]][splited[1]] = 1;
  console.log(printBoard(board));
  return board = initialState(board);
}

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
  console.log(printBoard(world));
  world = initialState(world);
  return printBoard(world);
};

module.exports = {
  createArray,
  generateBoard,
  addSpaces,
  printBoard,
  startGame
};
