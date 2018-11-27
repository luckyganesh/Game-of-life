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

module.exports = {
  createArray,
  generateBoard
};
