var size = 10
var chessboard = ""
var lineOne = ""
var lineTwo = ""

for(i = 0; i < size; i++) {
  if(i % 2 === 0){
    lineOne = lineOne.concat("#")
    lineTwo = lineTwo.concat(" ")
  } else {
    lineOne = lineOne.concat(" ")
    lineTwo = lineTwo.concat("#")
  }
}

for(i = 0; i < size; i++) {
  if(i % 2 === 0){
    chessboard = chessboard.concat(lineOne + "\n")
  } else {
    chessboard = chessboard.concat(lineTwo + "\n")
  }
}

console.log(chessboard)
