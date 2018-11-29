const { 
  newGeneration,
  checkCellState,
  checkCell,
  calculateAliveCells,
  calculAliveNeighbForAll,
  findNeighboursState,
  startGame,
  createArray,
  generateBoard,
  addSpaces,
  printBoard
} = require("../src/library.js");

const { 
  equal,
  deepEqual
} = require("assert");

describe("createArray",() => {
  it('should generate empty array',function(){
    deepEqual(createArray(0,""),[]);
  });
  it('should generate single element array',function(){
    deepEqual(createArray(1,"a"),["a"]);
  });
  it("should generate multiple element array", function(){
    deepEqual(createArray(3,0),[0,0,0]);
  });
});

describe('generateBoard',() => {
  it('should generate 1*1 board',function() {
    deepEqual(generateBoard(1,1," "),[[" "]]);
  });
  it('should generate n*n board' , function(){
    deepEqual(generateBoard(2,2," "),[[" "," "],[" "," "]]);
  });
});

describe("addSpaces",function(){
  it('should add spaces around single letter',function(){
    deepEqual(addSpaces("a")," a ");
  });
  it("should add spaces around a word", function(){
    deepEqual(addSpaces("sai")," sai ");
  });
  it("should add spaces around end of sentence", function(){
    deepEqual(addSpaces("i have a dog")," i have a dog ");
  });
});

describe("printBoard",function(){
  it("should print 1*1 board",function(){
    expected_output = "";
    expected_output += "  | 0 |\n";
    expected_output += "-------\n";
    expected_output += "0 |   |\n";
    expected_output += "-------";
    deepEqual(printBoard(generateBoard(1,1," ")),expected_output);
  });
  it("should print n*n board", function(){
    expected_output = "";
    expected_output += "  | 0 | 1 | 2 |\n"
    expected_output += "---------------\n";
    expected_output += "0 |   |   |   |\n";
    expected_output += "---------------\n";
    expected_output += "1 |   |   |   |\n";
    expected_output += "---------------\n";
    expected_output += "2 |   |   |   |\n";
    expected_output += "---------------";
    deepEqual(printBoard(generateBoard(3,3," ")),expected_output);
  });
});

describe("findNeighboursState",function(){
  it("should give states of neighbours", function(){
    deepEqual(findNeighboursState(0,0,generateBoard(1,1," ")),[]);
  });
  it('should give states of neighbours of corners',function(){
    board = generateBoard(5,5,0);
    board[1][1] = 1;
    board[2][1] = 1;
    deepEqual(findNeighboursState(1,0,board),[0,0,1,0,1]);
  });
  it('should give states of neighbours of middle cells',function(){
    board = [[0,1,0,1,1],
             [1,1,1,0,0],
             [1,0,1,1,1],
             [1,1,1,1,1]];
    deepEqual(findNeighboursState(1,1,board),[0,1,0,1,1,1,0,1]);
  });
});

describe("checkCell",function(){
  it("should print alive cell character when given one",function(){
    let alive = "\u25A0";
    deepEqual(checkCell(1),alive);
  });
  it("should print empty space when given zero",function(){
    deepEqual(checkCell(0)," ");
  });
});

describe("calculateAliveCells",function(){
  describe("for no alive cells",function(){
    it('should give zero', function(){
      board = [[0,0,0],[0,0,0],[0,0,0]];
      deepEqual(calculateAliveCells(1,1,board),0);
    });
  });
  describe("for all neighbours alive",function(){
    it('should give 8',function(){
      board = generateBoard(3,3,1);
      deepEqual(calculateAliveCells(1,1,board),8);
    });
  });
});

describe('calculAliveNeighbForAll',function() {
  it('should give empty array for 1*1 board',function(){
    board =[[1]];
    deepEqual(calculAliveNeighbForAll(board),[[0]]);
  });
  it('should give the state of neighbouring cells for 2*2 board',function(){
    board = [[1,0],[0,1]];
    deepEqual(calculAliveNeighbForAll(board),[[1,2],[2,1]]);
  });
});

describe("checkCellState",function(){
  it('should return zero for zero',function(){
    deepEqual(checkCellState(0,1),0);
  });
  it('should return zero for one',function(){
    deepEqual(checkCellState(1,1),0);
  });
  it('should return element for two',function(){
    deepEqual(checkCellState(2,1),1);
  });
  it('should return one for three',function(){
    deepEqual(checkCellState(3,1),1);
  });
  it('should return one for three when input is zero',function(){
    deepEqual(checkCellState(3,0),1);
  });
});

describe('newGeneration',function() {
  it('should kill 1*1 board cell',function(){
    deepEqual(newGeneration([[1]]),[[0]]);
  });
});
