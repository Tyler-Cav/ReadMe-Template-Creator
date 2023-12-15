// Function pushes a selected image badge if one is chosen
function renderLicenseBadge(license) {
  
  if (license === "None") {
    return ""
  } else if (license === "MIT") {
    return "![Alt Text](https://img.shields.io/badge/MIT-000000)"
  } else if (license === "Apache2.0") {
    return "![Alt Text](https://img.shields.io/badge/Apache2.0-8A2BE2)"
  } else if (license === "GPL3") {
    return "![Alt Text](https://img.shields.io/badge/GPL3-8A2BE2)"
  } else if (license === "BSD3") {
    return "![Alt Text](https://img.shields.io/badge/BSD3-8A2BE2)"
  }
}
//Function renders a table of contents clickable section
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[license](#license) \n`
  } else {
    return ""
  }
  }
//If a license is chosen, it will provide an opensource link to the license documentation.
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else if (license === "MIT") {
    return "## License \n https://opensource.org/license/mit/"
  } else if (license === "Apache2.0") {
    return "## License \n https://opensource.org/license/apache-2-0/"
  } else if (license === "GPL3") {
    return "## License \n https://opensource.org/license/gpl-3-0/"
  } else if (license === "BSD3") {
    return "## License \n https://opensource.org/license/bsd-3-clause/"
  }
  }


//generateMarkdown is where all file information is built to export a readme.md file into the Dist folder.
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  [installation](#installation) \n [usage](#usage) \n [contributing](#contributing) \n ${renderLicenseLink(data.license)} [tests](#tests) \n [questions](#questions) \n
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.testing}
  ## Questions
  Please reach out to me at the resources given below. \n
  ###  Github Username: ${data.username} \n ### Github Link \n ${data.githublink}
  ### Email: \n ${data.email}
`;
}

module.exports = generateMarkdown;
