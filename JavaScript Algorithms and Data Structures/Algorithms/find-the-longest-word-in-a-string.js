function findLongestWordLength(str) {
  // split str into words
  const regexWord = /\w+/gi
  const words = str.match(regexWord)

  let longest = ""
  // loop over the words
  for (let word of words){
    // check is current word is longer than longest
    if(word.length>longest.length){
      longest = word
    }
  }
  return longest.length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");