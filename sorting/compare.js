function CArray(numElements, dataStore) {
  this.dataStore = dataStore;
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.bubbleSort = bubbleSort
  this.selectionSort = selectionSort
  this.insertionSort = insertionSort
}
function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() *
      (this.numElements + 1));
  }
}
function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}
function insert(element) {
  this.dataStore[this.pos++] = element;
}
function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }
  return retstr;
}
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    for (var inner = 0; inner <= outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1);
      }
    }
  }
}
function selectionSort() {
  var min, temp;
  for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
    min = outer;
    for (var inner = outer + 1;
      inner <= this.dataStore.length - 1; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
    }
    swap(this.dataStore, outer, min);
  }
}
function insertionSort() {
  var temp, inner;
  for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      --inner;
    }
    this.dataStore[inner] = temp;
  }
}


let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales quam lectus, nec maximus lectus feugiat at. Morbi consequat ex sed ex interdum, sed maximus magna tincidunt. Integer vehicula tincidunt leo, in consectetur ante vulputate a. Ut egestas purus nec vulputate egestas. Morbi eget faucibus neque. Nunc gravida vehicula tempor. Etiam blandit feugiat diam, et lacinia lorem varius id.Nunc vel libero eu est sollicitudin fringilla at id felis. Suspendisse pharetra dolor et nisl convallis volutpat. Duis nec elementum risus. Vestibulum maximus iaculis augue, eget malesuada justo elementum in. Cras sagittis sapien at lectus vestibulum sollicitudin eu at metus. Sed eget tempus lectus. Curabitur ullamcorper dolor a ipsum scelerisque tincidunt. Sed interdum vehicula elit ac auctor. Etiam scelerisque quis lorem ut rutrum. Pellentesque eu accumsan tellus. Maecenas accumsan non velit mollis rhoncus.Quisque ultrices dolor vitae lacus tincidunt, molestie euismod sapien volutpat. Nunc condimentum ultrices justo, vitae ornare lorem dictum eu. Ut molestie diam a suscipit fermentum. Praesent ultrices nunc vitae erat molestie, eget vulputate lacus iaculis. Aenean tincidunt tincidunt laoreet. Morbi feugiat malesuada lacus, vel consectetur est laoreet eu. Morbi sit amet nisi tristique, scelerisque diam non, volutpat odio. Fusce scelerisque sed lacus sit amet vulputate. Fusce facilisis id dui vitae ullamcorper. Sed volutpat vulputate fermentum. Phasellus ullamcorper mollis metus, vitae viverra lacus molestie eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;Curabitur eu velit eros. Mauris viverra justo sem, in aliquet dolor cursus id. Aliquam ut eros pharetra, imperdiet felis eu, fringilla felis. Vestibulum sagittis interdum augue sed congue. Nullam at neque aliquam, rhoncus ex in, porta est. Proin in euismod nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam eu placerat justo. Nulla facilisis nisl quam, ullamcorper ultricies purus suscipit in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;Donec scelerisque, arcu id accumsan accumsan, justo eros mattis orci, commodo iaculis metus lacus non eros. In semper scelerisque finibus. Nulla facilisi. Integer finibus pharetra lacinia. Aliquam ornare elit vel leo elementum, ac eleifend velit interdum. Curabitur ultricies mauris id diam elementum tempus. Nunc quis aliquam dolor. Phasellus rutrum blandit massa, in accumsan lectus ultricies sed. Etiam faucibus orci vel ligula feugiat iaculis. Quisque sed ligula vitae nisi malesuada euismod at et dolor."

//Testo da tesro in un unica parola
var words = text.split(" ");
var numElements = words.length;
var nums = new CArray(numElements, words);

//Tempo peri l bubbleSort
var start = new Date().getTime();
nums.bubbleSort()
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Elapsed time for the bubble sort on " + numElements + " elements is: " + elapsed + " milliseconds.");

//Tempo per il selectionSort
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the selection sort on " + numElements + " elements is: " + elapsed + " milliseconds.");

//Tempo per l'insertionSort
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the insertion sort on " + numElements + " elements is: " + elapsed + " milliseconds.");


//Dopo varie prove risulta che:
//il bubble sort è sempre quello con tempo maggiore di tutti (dai 4 i 10 ms);
//il selection sort è al secondo posto (dai 2 ai 3 ms);
//l'insertion sort è il più veloce (quasi sempre 0 ms, al massimo 1 ms).