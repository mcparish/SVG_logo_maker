const Shapes = require('../lib/shapes').Shapes;
const cli = new Shapes.CLI();
const inquirer = require('inquirer');

describe('Shapes', () => {
    describe('CLI', () => {
        it('should display a list of available shapes', () => {
            expect(cli.shapes).toEqual(['square', 'triangle', 'circle']);
        });

        it('should prompt the user to choose a shape', async () => {
            const spy = jest.spyOn(inquirer, 'prompt');
            await cli.start();
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith([
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Which shape do you want to draw?',
                    choices: cli.shapes
                }
            ]);
        });
    });
});