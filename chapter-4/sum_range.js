function range(start, end, step){
  if(step != null){
    increment = step
  } else {
    increment = 1
  }

  if(increment > 0){
    for (i = start; i <= end; i += increment) {
      console.log(i)
    }
  } else {
    for(i = start; i >= end; i += increment) {
      console.log(i)
    }
  }
}


function sum(start, end){
  total = 0
  for (i = start; i <= end; i ++) {
    total += i
  }
  console.log(total)
}

range(1, 10)
sum(1,10)
range(1, 10, 2)
range(5, 2, -1)
