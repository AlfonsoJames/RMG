// function rmg(rmg) {

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
    choices: ['None','Apache 2.0 License','Educational Community License v2.0','Creative Commons Zero v1.0 Universal','Do What The F*ck You Want To Public License','GPL 3.0','MIT']
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
 // stinking badges
 function badge(input) {
    let badgeType = input.license.split(" ").join("");
    input.badge = `![License](https://img.shields.io/badge/License-${badgeType}-blue.svg)`;
};

//
function init() {
  inquirer.prompt(prompts).then((input) => {
    badge(input);
    const generate = template.markDown(input);
    fs.writeFileSync("README.md", generate, "utf8")
  });
};
init();


// }
// exports.rmg = rmg;