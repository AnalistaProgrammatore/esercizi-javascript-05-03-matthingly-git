var words = ["Ciao", "a", "tutti","come", "va", "?"]
var copiedWords = JSON.parse(JSON.stringify(words));

var wordsNoCommas = words.join()
var reversedWords = copiedWords.reverse();
var reversedWordsNoCommas = reversedWords.join();


console.log(wordsNoCommas, reversedWordsNoCommas)