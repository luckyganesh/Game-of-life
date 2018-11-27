const { 
  createArray,
  generateBoard
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
});

