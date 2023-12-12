const { Circle, Triangle, Square } = require('./shapes');

// Test for Circle
test('Test Circle SVG generation', () => {
    const circle = new Circle();
    circle.setColor("pink");
    
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="90" fill="pink" />');
});

// Test for Triangle
test('Test Triangle SVG generation', () => {
    const triangle = new Triangle();
    triangle.setColor("orange");
    
    expect(triangle.render()).toEqual('<polygon points="150,30 30,170 270,170" fill="orange" />');
});

// Test for Square
test('Test Square SVG generation', () => {
    const square = new Square();
    square.setColor("yellow");
    
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="yellow" />');
});
