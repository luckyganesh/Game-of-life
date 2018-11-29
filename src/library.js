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

const findNeighboursState = function(row,column,board){
  let  mainRow = board[row];
  let topRow = board[row-1] || [];
  let bottomRow = board[row+1] || [];
  let cells = [topRow[column-1],topRow[column],topRow[column+1]];
  cells.push(mainRow[column-1],mainRow[column+1]);
  cells.push(bottomRow[column-1],bottomRow[column],bottomRow[column+1]);
  cells = cells.filter((x) => x != undefined);
  return cells;
}

const findNeighbStateOfAll = function(board){
  let newBoard = board.slice(0);
  newBoard = newBoard.map((row,rowNo) => {
    return row.map((column,columnNo) => {
      return findNeighboursState(rowNo,columnNo,board)
    });
  });
  return newBoard;
}

const calculateAliveCells = function(row,column,board){
  return findNeighboursState(row,column,board).reduce((x,y) => x+y ,0);
}

const createArray = function(length,filler){
  return new Array(length).fill(filler);
}

const generateBoard = function(rows,columns,filler){
  let board = createArray(rows,rows).map(() =>createArray(columns,filler));
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
  lines.push(dashline);
  let boardlines = board.map((x,row) => row+" |"+x.map(checkCell).map(addSpaces).join("|")+"|");
  boardlines = boardlines.map((x) => x+"\n"+dashline);
  return lines.concat(boardlines).join('\n');
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
  startGame,
  findNeighboursState,
  checkCell,
  findNeighbStateOfAll,
  calculateAliveCells
};
