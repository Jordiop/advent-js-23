function findFirstRepeated(gifts) {
    // Code here
    if (!Array.isArray(gifts) || !gifts.length) return -1
    let foundNumber = -1
    let indexOfFoundNumber;
    for (let i = 0; i < gifts.length; i++){
      const selected = gifts[i]
      for (let j = i + 1; j < gifts.length; j++) {
        if (gifts[j] == selected && !indexOfFoundNumber) {
          foundNumber = selected
          indexOfFoundNumber = j
          break;
        }
        if (gifts[j] == selected && indexOfFoundNumber) {
          if (j < indexOfFoundNumber){
            foundNumber = selected
            indexOfFoundNumber = j
            break;
          }
        }
      }
    }
    return foundNumber
  }
  