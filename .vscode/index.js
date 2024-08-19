const generateSVG = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const shapes = ['square', 'triangle', 'circle'];
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
    const svgContent = generateSVG(responses);
    writeFile(fileName, svgContent);
    console.log(`SVG file created: ${fileName}`);
}

function writeFile(filename, content) {
    return fs.writeFileSync(path.join(process.cwd(), filename), content);
}

// (async () => {
//     const cli = new CLI();
//     await cli.start();
// })();

init();