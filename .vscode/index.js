const { Triangle, Circle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const content = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter three letters'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the text color (color keyword or hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What is the color of your shape?'
    }
];

async function init() {
    const responses = await inquirer.prompt(content);
    const fileName = `${responses.name}.svg`;
    const svgContent = generateSVG(responses);
    writeFile(fileName, svgContent);
    console.log(`SVG file created: ${fileName}`);
}

function writeFile(filename, content) {
    return fs.writeFileSync(path.join(process.cwd(), filename), content);
}

// Function to generate the SVG based on user input
function generateSVG(responses) {
    const { shape, shapeColor, name, textColor } = responses;
    let shapeObj;

    switch (shape) {
        case 'triangle':
            shapeObj = new Triangle(shapeColor);
            break;
        case 'circle':
            shapeObj = new Circle(shapeColor);
            break;
        case 'square':
            shapeObj = new Square(shapeColor);
            break;
    }

    // Create the SVG content
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeObj.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
            ${name}
        </text>
    </svg>
    `;
}

init();
