
class ToggleClasses {
  constructor(type, ...elements) {
    this.type = type
    this.elements = elements
  }

  static active(elems) {
    elems.forEach(e => {
      if (e.classList.contains('active')) {
        e.classList.remove('active')
      } else {
        e.classList.add('active')
      }
    })
  }

  static scaleIn(elems) {
    elems.forEach(e => {
      if (e.classList.contains('scale-in')) {
        e.classList.remove('scale-in')
        e.classList.add('scale-transition', 'scale-out')
      } else {
        e.classList.add('scale-in')
        e.classList.remove('scale-transition', 'scale-out')
      }
    })
  }

  static hide(elems) {
    elems.forEach(e => {
      if (e.classList.contains('hide')) {
        e.classList.remove('hide')
      } else {
        e.classList.add('hide')
      }
    })
  }

  static spotlight(elems) {
    elems.forEach(e => {
      if (e.classList.contains('spotlight')) {
        e.classList.remove('spotlight')
      } else {
        e.classList.add('spotlight')
      }
    })
  }
}

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

const cashButtons = document.getElementsByClassName('btn-floating btn-large')
const closeButtons = document.getElementsByClassName('btn-floating btn-small')

for (let button of cashButtons) {
  button.onclick = (e) => {
    const currentTarget = e.currentTarget
    const cash = currentTarget.children[1]

    const cartElements = document.getElementById('cart').children
    const cart = cartElements[0]
    const circle = cartElements[1]

    const elems = createElems(e, 2)
    
    cart.innerHTML = 'add_shopping_cart'
    ToggleClasses.spotlight([elems.currentCard, elems.currentImage])
    ToggleClasses.active([circle, cash])
    ToggleClasses.scaleIn([elems.close])
    ToggleClasses.hide([elems.currentText])
    
    setTimeout(() => {
      ToggleClasses.active([circle, cash])
      ToggleClasses.scaleIn([elems.currentTarget])
    }, 200)
  }
}

for (let button of closeButtons) {
  button.onclick = (e) => {
    const elems = createElems(e, 1)

    ToggleClasses.spotlight([elems.currentCard, elems.currentImage])
    ToggleClasses.scaleIn([elems.currentButton])
    ToggleClasses.scaleIn([elems.currentTarget])
    ToggleClasses.hide([elems.currentText])
  }
}