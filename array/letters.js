function letters () {
  this.letters = []
  this.oneWord = oneWord
}

function oneWord(...letters) {
  this.letters.push(...letters)
  return letters.join("")
}


var word = new letters;
word.oneWord("c", "i", "a", "o")

console.log(word.letters.join(""))