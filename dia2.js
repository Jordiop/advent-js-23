function manufacture(gifts, materials) {
    const giftsConfirmed = []
    gifts.forEach((gift) => {
      if (gift.split('').every(char => materials.includes(char))) {
              giftsConfirmed.push(gift);
          }
    })
    return giftsConfirmed
  }