// Employee class definition
// this.name - employee name
// this.id - employee id
// this.email - employee email
class Employee {
   constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
   }

   getName() {
      return this.name;
   }

   getId() {
      return this.id;
   }

   getEmail() {
      return this.email;
   }

   getRole() {
      return 'Employee';
   }
}

export default Employee ;
// module.exports = Employee;
