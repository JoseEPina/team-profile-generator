// Get Modules
import Manager from '../lib/Manager.js';
import Engineer from '../lib/Engineer.js';
import Intern from '../lib/Intern.js';

// const Manager = require('../lib/Manager.js');
// const Engineer = require('../lib/Engineer.js');
// const Intern = require('../lib/Intern.js');

// creates employee class objects from inquirer data responses (employeeListData)
function createEmployeeClassObjects(employeeListData) {
   let employeeListObjects = []; // array of employee class objects (Managers, Engineers & Interns)
   // create objects of CLASS Manager & spreads them out to array employeeListObjects
   employeeListObjects = [...createClassObjects('Manager', employeeListData)];
   // create objects of CLASS Engineer & spreads them out together with the spread of the previous
   // set of objects (that contains Managers).
   employeeListObjects = [...employeeListObjects, ...createClassObjects('Engineer', employeeListData)];
   // create objects of CLASS Intern & spreads them out together with the spread of the previous
   // set of objects (that contains Managers & Engineers).
   employeeListObjects = [...employeeListObjects, ...createClassObjects('Intern', employeeListData)];
   // array of class objects (that contains Managers, Engineers and Interns).
   return employeeListObjects;
}

// create class objects from inquirer data responses (employeeListData) that match class 'menuOption'
// menuOption carries the class type ('Manager', 'Engineer', 'Intern')
function createClassObjects(menuOption, employeeListData) {
   let employeeListObjects = []; // array of employee class objects (Managers, Engineers & Interns)

   // Process Inquirer responses from employeeListData by filtering the elements that match with menuOption
   // ('Manager' or 'Engineer' or 'Intern') and store the new sub-array in employeeTypeList.
   let employeeTypeList = employeeListData.filter((element) => element.menuOption === menuOption);

   // Create new CLASS objects forEach employeeType and push to new array employeeListObjects
   // each employeeType has a unique property such as officeNumber, github or school.
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
   // Returns array of CLASS objects that match employeeType === menuOption ('Manager', 'Engineer', 'Intern').
   return employeeListObjects;
}

export { createEmployeeClassObjects };
//module.exports = createEmployeeClassObjects;
