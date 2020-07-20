function createElems(e, timesNested) {
    const currentTarget = e.currentTarget
    const str = 'parentElement'
    let currentCard = currentTarget
  
    for(var i = 0; i < timesNested; i++) {
      currentCard = currentCard[str]
    }
  
    const currentText = currentCard.children[1].children[1]
    const currentButton = currentCard.children[1].children[2]
    const currentImage = currentCard.children[1].children[0]
    const close = currentCard.children[0]
  
    return {
      currentTarget,
      currentCard,
      currentText,
      currentButton,
      currentImage,
      close
    }
  }

export default createElems