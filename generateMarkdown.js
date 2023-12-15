// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === "None") {
    return ""
  } else if (license === "MIT") {
    return " ## License \n ![Alt Text](https://img.shields.io/badge/MIT-000000)"
  } else if (license === "Apache2.0") {
    return "## License \n ![Alt Text](https://img.shields.io/badge/Apache2.0-8A2BE2)"
  } else if (license === "GPL3") {
    return "## License \n ![Alt Text](https://img.shields.io/badge/GPL3-8A2BE2)"
  } else if (license === "BSD3") {
    return "## License \n ![Alt Text](https://img.shields.io/badge/BSD3-8A2BE2)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license !== "None") {
//     return 'License'('#license')
//   } 
// }


//*Table of contents links. Rapid scroll (AKA Pop to section)
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ## Installation
  ## Usage
  ${renderLicenseBadge(data.license)}
  ## Contibuting
  ## Tests
  ## Questions
`;
}

module.exports = generateMarkdown;



// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README