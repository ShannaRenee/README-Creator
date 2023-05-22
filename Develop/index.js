// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
},{
    type: 'input',
    name: 'description',
    message: 'Description of project:'
},{
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:'
},{
    type: 'input',
    name: 'usage',
    message: 'Usage instructions:'
},{
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['None', 'Apache 2.0', 'GNU General Public License v3.0','MIT License',
    'BSD 2-Clause "Simplified"', 'BSD 3-Clause "New" or "Revised"', 'Boost Software',
    'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
    'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0',
    'The Unlicense']
},{
    type: 'input',
    name: 'contributing',
    message: 'Contributing:'
},{
    type: 'input',
    name: 'tests',
    message: 'Tests:'
},{
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:'
},{
    type: 'input',
    name: 'email',
    message: 'Enter your email:'
}
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Your new README has been created!!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
    const rmContent = generateMarkdown(response);
    writeToFile('README.md', rmContent);
    })};


// Function call to initialize app
init();

