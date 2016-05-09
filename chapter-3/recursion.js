function isEven(number) {
  if(number < 0){
    console.log("Program only takes positive numbers")
  } else {
    if(number === 0){
      console.log(true)
    } else {
      if(number === 1){
        console.log(false)
      } else {
        isEven(number - 2)
      }
    }
  }
}

isEven(0)
