function arrayToList(array) {
  var list = null
  for (i = array.length - 1; i >= 0; i -- ) {
    list =  {value: array[i], rest: list }
  }
  console.log(list)
}

function listToArray(list) {
  var array = []
  for (var node = list; node; node = node.rest) {
    array.push(node.value)
  }
  console.log(array)
}
arrayToList([1, 2, 3])
var list = { value: 1, rest: {value: 2, rest: { value: 3, rest: null}}}
listToArray(list)
