const CLI = require('./lib/shapes').CLI;
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const shapes = ['square', 'triangle', 'circle'];

async function init() {
    const responses = await inquirer.prompt(content);
    const fileName = `${responses.name}.svg`;
    const svgContent = generateSVG(responses.shape, responses.size);
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