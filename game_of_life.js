const { startGame } = require("./src/library.js");
const main = function(){
  let length = +process.argv[2] ||  "wrong input";
  let result = startGame(length);
  console.log(result);
}
main();
