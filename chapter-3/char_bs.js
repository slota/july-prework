function countBs(string, letter) {
  tally = 0
  for(i = 0; i < string.length; i++) {
    if(string.charAt(i) === letter){
      tally++
    }
  }
  console.log(tally)
}

countBs("BigBroncos", "r")
