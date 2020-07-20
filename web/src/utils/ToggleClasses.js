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

export default ToggleClasses