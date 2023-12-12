const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => input.length <= 3 && input.length > 0
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (color keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (color keyword or hexadecimal number):',
        }
    ]);

    let shape;
    if (answers.shape === 'circle') {
        shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.shape === 'triangle') {
        shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
    } else {
        shape = new Square(answers.text, answers.textColor, answers.shapeColor);
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
        </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

promptUser();