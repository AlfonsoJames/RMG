const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./assets/markDown');

//user prompts
const prompts = [
  {
    type: 'input',
    name: 'username',
    message: 'Enter GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email address:'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for the project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license:',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'install',
    message: 'Enter command for installing dependencies:',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter command for running test:',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Descibe how to use the app:'
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Explain how developers can contribute:'
  }
];

//
function init() {
  inquirer.prompt(prompts).then((input) => {
    createBadge(input);
    const generate = template.markDown(input);
    fs.writeFileSync("README.md", generate, "utf8")
  });
};
init();

// function that generates a badge for the license
function createBadge(input) {
  // this takes away any spaces in the license name and replaces them with an underscore for the purposes of creating the link below
  let badgeType = input.license.split(" ").join("_");
  input.badge = `![License](https://img.shields.io/badge/License-${badgeType}-blue.svg)`;
}