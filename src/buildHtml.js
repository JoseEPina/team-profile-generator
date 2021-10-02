import Employee from '../lib/Employee.js';
import Manager from '../lib/Manager.js';
import Engineer from '../lib/Engineer.js';
import Intern from '../lib/Intern.js';

const htmlTopSection = `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <title>My Team</title>
   </head>
   <body>
      <header id="header">
         <h1>My Team</h1>
      </header>
      <div class="container">
         <div class="row">
`;

const htmlBottomSection = `
            </div>
         </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.1/js/bootstrap.min.js"></script>
   </body>
</html>
`;

let htmlBodySection = ``;

function buildHtml(employeeList) {
   // Process manager : create Obj of Class Manager
   //                   create manager HTML
   let employeeData = '';
   employeeData = employeeList.filter((element) => element.menuOption === 'Manager');
   employeeData.forEach((element) => {
      let manager = new Manager(element.name, element.id, element.email, element.officeNumber);
      console.log('~ manager', manager);
      htmlBodySection += `
           <div class="card col-4" style="width: 25rem">
               <img src="..." class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">${manager.name}</h5>
                  <p class="card-text">${manager.getRole()}</p>
               </div>
               <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.id}</li>
                  <li class="list-group-item">Email: <a href="#" class="card-link">${manager.email}</a></li>
                  <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
               </ul>
            </div>
`;
   });

   // Process engineers : create Obj of Class Engineer
   //                   create engineers HTML

   employeeData = employeeList.filter((element) => element.menuOption === 'Engineer');
   employeeData.forEach((element) => {
      let engineer = new Engineer(element.name, element.id, element.email, element.github);
      console.log('~ engineer', engineer);
   });

   // Process insterns : create Obj of Class Intern
   //                   create interns HTML
   employeeData = employeeList.filter((element) => element.menuOption === 'Intern');
   employeeData.forEach((element) => {
      let intern = new Intern(element.name, element.id, element.email, element.school);
      console.log('~ intern', intern);
   });
}

export { buildHtml };