class Button {
  constructor(element){
    this.element = element;
    this.element.addEventListener('mousedown', () => this.mouseDown());
    this.element.addEventListener('mouseup', () => this.mouseUp())
  }
  mouseDown(){
    this.element.classList.remove('shadow-animated');
  }
  
  mouseUp() {
    this.element.classList.add('shadow-animated');
  }
}

let buttons = Array.from(document.querySelectorAll('.btn'));
buttons.map(button => new Button(button));