
function markDown(input) {
    return `
# ${input.title}

## Description

    ${input.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    

## Installation

To install necessarry dependencies, run the following command:\n
\`
${input.install}
\`

## Usage

${input.usage}

## License

${input.license}

## Contributing

${input.contribute}

## Tests

To run tests, run the following command:\n
\`
${input.tests}
\`

## Questions

For questions Contact:
Github: [@${input.username}](https://github.com/${input.username})\n
Email: ${input.email}
`
  };
  
  exports.markDown = markDown;