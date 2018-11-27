const { 
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
