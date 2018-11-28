const { 
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
    deepEqual(generateBoard(1," "),[[" "]]);
  });
  it('should generate n*n board' , function(){
    deepEqual(generateBoard(2," "),[[" "," "],[" "," "]]);
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
    deepEqual(printBoard(generateBoard(1," ")),expected_output);
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
    deepEqual(printBoard(generateBoard(3," ")),expected_output);
  });
});

