// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === "None") {
    return ""
  } else if (license === "MIT") {
    return "Tag of MIT"
  } else if (license === "Apache2.0") {
    return "Tag of Apache2.0"
  } else if (license === "GPL3") {
    return "Tag of GPL3"
  } else if (license === "BSD3") {
    return "Tag of BSD3"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
//*Table of contents links. Rapid scroll (AKA Pop to section)
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
   ## Description
  ${data.description}
`;
}

module.exports = generateMarkdown;
