function qSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return qSort(left).concat(pivot, qSort(right));
}

const oneHundNumsRandom = []
for (let i = 1; i < 10000; i++) {
  oneHundNumsRandom[i] = Math.floor((Math.random() * 10000) + 1)
}

//Tempo per qSort
var start = new Date().getTime()
qSort(oneHundNumsRandom)
var stop = new Date().getTime()
var elapsed = stop - start
console.log("Elapsed time for the qSort is: " + elapsed + " milliseconds.");

//Tempo per JSSort
var start = new Date().getTime()
oneHundNumsRandom.sort((x, y) => x - y)
var stop = new Date().getTime()
var elapsed = stop - start
console.log("Elapsed time for the JSSort is: " + elapsed + " milliseconds.");