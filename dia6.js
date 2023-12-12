function maxDistance(movements) {
    var sum = 0
    const countRight = movements.split('>').length - 1
    const countLeft = movements.split('<').length - 1
    const countUp = movements.split('*').length - 1 
    if (countRight == 0 && countLeft == 0) return countUp
    return countRight > countLeft ? countRight + countUp - countLeft : countLeft + countUp - countRight
  }

console.log(maxDistance('>***>'))