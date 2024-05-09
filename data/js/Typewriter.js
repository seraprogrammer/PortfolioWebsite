class Typewriter {
  constructor(element, options) {
    this.element = element;
    this.options = options;
    this.texts = options.texts || [];
    this.loop = options.loop || false;
    this.loopCount = options.loopCount || 1;
    this.speed = options.speed || 100;
    this.delay = options.delay || 1000;
    this.textIndex = 0;
    this.index = 0;
    this.loopIndex = 0;
    this.container = document.createElement("span");
    this.element.appendChild(this.container);
    this.type();
  }

  type() {
    if (this.loop || this.loopIndex < this.loopCount) {
      const currentText = this.texts[this.textIndex];
      if (this.index < currentText.length) {
        this.container.textContent += currentText.charAt(this.index);
        this.index++;
        setTimeout(() => this.type(), this.speed);
      } else {
        setTimeout(() => this.erase(), this.delay);
      }
    }
  }

  erase() {
    const currentText = this.texts[this.textIndex];
    if (this.index >= 0) {
      this.container.textContent = currentText.substring(0, this.index);
      this.index--;
      setTimeout(() => this.erase(), this.speed / 2);
    } else {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.loopIndex++;
      this.index = 0;
      setTimeout(() => this.type(), this.delay);
    }
  }
}

// Usage
const typewriter = document.getElementById("typewriter");
const options = {
  texts: ["React", "Frontend ", "JavaScript", "WordPress"],
  loop: true,
  speed: 100,
  delay: 1000,
};
new Typewriter(typewriter, options);
