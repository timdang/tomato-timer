'use babel'

export default class TomatoStatusBar {
  constructor() {
    this.active = false
    this.element = document.createElement('a')
    this.element.className = 'line-ending-tile inline-block'
  }
  toggle() {
    if (!this.active) {
      this.element.textContent = 'Tomato-ing...'
      this.active = true
    } else {
      this.element.textContent = 'Not Tomato-ing...'
      this.active = false
    }
  }
}
