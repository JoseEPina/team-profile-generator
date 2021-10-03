// Get parent class Employee
import Employee from '../lib/Employee.js';

// const Employee = require('../lib/Employee.js');

// Class definition for Engineer, inherits from Employee class
// this.github - Engineer's gitHub username
class Engineer extends Employee {
   constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
   }

   getGithub() {
      return this.github;
   }

   getRole() {
      return 'Engineer';
   }
}

export default Engineer ;
// module.exports = Engineer;
