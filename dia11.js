function getIndexsForPalindrome(word) {
    if (word.split('').reverse().join() == word) return []
    var changes = []
    const reversedWord = word.split('').reverse().join()
    var differences = word.localeCompare(reversedWord)
    console.log(differences)
    return [0, 0]
  }

  console.log(getIndexsForPalindrome('abab'))