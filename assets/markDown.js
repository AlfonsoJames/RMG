
function markDown(input) {
    return `
# ${input.title}

## Description

    ${input.description}

${input.badge}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    

## Installation

\n
\`
${input.install}
\`

## Usage

\n
\`
${input.usage}
\`

## License

${input.license}

## Contributing

${input.contribute}

## Tests

\n
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