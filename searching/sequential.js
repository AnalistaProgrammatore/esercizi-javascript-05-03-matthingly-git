function seqSearch(arr, data) {
  for (var i = arr.length; i >= 0; --i) {
    console.log(i)
    if (arr[i] == data) {
      return i;
    }
  }
  return false;
}

console.log(seqSearch([1, 2, 1, 4, 3, 4, 1], 1))