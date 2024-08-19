const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');



class CLI {
    constructor() {
        this.shapes = ['square', 'triangle', 'circle'];
    }

    async init() {
        const responses = await inquirer.prompt(content);
        const fileName = `${responses.name}.svg`;
        const svgContent = generateSVG(responses.shape, responses.size);
        writeFile(fileName, svgContent);
        console.log(`Generated logo.svg file: ${fileName}`);
    }
}

const content = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter three letters'
    },
    {
        type: 'input',
        name: 'color',
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
    const svgContent = generateSVG(responses.shape, responses.size);
    writeFile(fileName, svgContent);
    console.log(`Generated logo.svg file: ${fileName}`);
}

function writeFile(filename, content) {
    return fs.writeFileSync(path.join(process.cwd(), filename), content);
}

init();

module.exports = CLI;