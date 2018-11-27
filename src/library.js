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

const printBoard = function(board){
	let length = board.length;
  let dashline = createArray(length*4+1,"-").join("");
  let lines = [];
  let lineLength = 0;
  lines[lineLength++] = dashline;
	for(let row =0;row < length;row++){
    let column = board[row].map(addSpaces).join("|");
    lines[lineLength++] = "|"+column+"|";
    lines[lineLength++] = dashline;
	}
  return lines.join("\n");
}

module.exports = {
  createArray,
  generateBoard,
  addSpaces,
  printBoard
};