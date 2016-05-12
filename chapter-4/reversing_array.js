function reverseArray(array){
  newArray = []
  for (i = array.length - 1; i >= 0; i -- ) {
    newArray.push(array[i])
  }
  console.log(newArray)
}

reverseArray([1,2,3])
