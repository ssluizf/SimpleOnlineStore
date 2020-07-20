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