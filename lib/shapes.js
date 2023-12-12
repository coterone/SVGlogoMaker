class Shape {
  constructor(text, textColor, bgColor) {
      this.text = text;
      this.textColor = textColor;
      this.bgColor = bgColor;
  }
  setColor(color) {
      this.bgColor = color;
  }
}

class Circle extends Shape {
  render() {
      let svg = `<circle cx="150" cy="100" r="90" fill="${this.bgColor}" />`;
      if (this.text) {
          svg += `<text x="150" y="110" font-family="Arial" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
      }
      return svg;
  }
}

class Triangle extends Shape {
  render() {
      let svg = `<polygon points="150,30 30,170 270,170" fill="${this.bgColor}" />`;
      if (this.text) {
          svg += `<text x="150" y="150" font-family="Arial" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
      }
      return svg;
  }
}

class Square extends Shape {
  render() {
      let svg = `<rect x="50" y="50" width="200" height="200" fill="${this.bgColor}" />`;
      if (this.text) {
          svg += `<text x="150" y="150" font-family="Arial" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
      }
      return svg;
  }
}

module.exports = { Circle, Triangle, Square };