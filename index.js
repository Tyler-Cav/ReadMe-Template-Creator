const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is your GitHub Username',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your description?',
            name: 'description'
        },
        {
            type: 'list',
            message: 'Please choose your license option',
            choices: ['MIT', 'Apache2.0', 'GPL3', 'BSD3', 'None'],
            name: 'license',
        }
    
    ])
        .then(response => {
        fs.writeFile('Dist/ReadMe.md', generateMarkdown(response), (err) => 
        err ? console.error(err) : console.log('Success!'))
    })


// TODO: Create a function to initialize app
// function init() {

// }

// Function call to initialize app
// init();
