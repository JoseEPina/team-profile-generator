import Manager from '../lib/Manager.js';
import Engineer from '../lib/Engineer.js';
import Intern from '../lib/Intern.js';

function createClassObjects(menuOption, employeeListData) {
   let employeeListObjects = [];

   let employeeTypeList = employeeListData.filter((element) => element.menuOption === menuOption);

   employeeTypeList.forEach((element) => {
      if (menuOption === 'Manager') {
         let manager = new Manager(element.name, element.id, element.email, element.officeNumber);
         employeeListObjects.push(manager);
      } else if (menuOption === 'Engineer') {
         let engineer = new Engineer(element.name, element.id, element.email, element.github);
         employeeListObjects.push(engineer);
      } else if (menuOption === 'Intern') {
         let intern = new Intern(element.name, element.id, element.email, element.school);
         employeeListObjects.push(intern);
      }
   });
   return employeeListObjects;
}

function createEmployeeClassObjects(employeeListData) {
   let employeeListObjects = [];
   employeeListObjects = [...createClassObjects('Manager', employeeListData)];
   employeeListObjects = [...employeeListObjects, ...createClassObjects('Engineer', employeeListData)];
   employeeListObjects = [...employeeListObjects, ...createClassObjects('Intern', employeeListData)];
   return employeeListObjects;
}

export { createEmployeeClassObjects };
