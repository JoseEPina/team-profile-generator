// import HTML templates
import { htmlTopSection, htmlBottomSection } from '../src/indexHtmlTemplates.js';

// const { htmlTopSection, htmlBottomSection } = require('../src/indexHtmlTemplates.js');

// builds HTML content from array of employeeListObjects
function buildHtml(employeeListObjects) {
   // placeholder for dynamically generated HTML code
   let htmlBodySection = ``;

   // Process each object
   employeeListObjects.forEach((element) => {
      // variables to handle data differences between objects
      let uniqueLabel = '';
      let uniqueValue = '';
      let uniqueIconClass = '';

      // Dynamically creates unique data values for the HTML page, depending on the employee role
      // (coming in each element.getRole() of employeeListObjects and exits switch with break
      switch (element.getRole()) {
         case 'Manager':
            uniqueLabel = 'Office Number: ';
            uniqueValue = element.getOfficeNumber();
            uniqueIconClass = 'bi bi-person-circle';
            break;
         case 'Engineer':
            uniqueLabel = 'GitHub: ';
            uniqueValue = `
               <a href='https://github.com/${element.getGithub()}' target='_blank' rel='noopener noreferrer' class='card-link'>${element.getGithub()}</a>
            `;
            uniqueIconClass = 'bi bi-wrench';
            break;
         case 'Intern':
            uniqueLabel = 'School: ';
            uniqueValue = element.getSchool();
            uniqueIconClass = 'bi bi-eyeglasses';
            break;
      }

      // Dynamically builds HTML 'cards' forEach employee object. ('Manager', 'Engineer', 'Intern')
      htmlBodySection += `
            <div class="card col-12 col-sm-5 col-lg-3">
               <div class="card-body">
                  <h5 class="card-title">${element.getName()}</h5>
                  <i class="${uniqueIconClass}"><spam> ${element.getRole()}</spam></i>
               </div>
               <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${element.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}" class="card-link">${element.getEmail()}</a></li>
                  <li class="list-group-item">${uniqueLabel}${uniqueValue}</li>
               </ul>
            </div>
`;
   });

   // Merges HTML templates (top & bottom sections) with dynamically generated HTML page. (htmlBodySection).
   return htmlTopSection + htmlBodySection + htmlBottomSection;
}

export { buildHtml };
//module.exports = buildHtml;
