const Employee = require('../lib/Employee');

test('creates an employee object', () => {
   const employee = new Employee('Hal', 9000, 'hal@gmail.com');

   expect(employee.name).toBe('Hal');
   expect(employee.id).toBe(9000);
   expect(employee.email).toBe('hal@gmail.com');
   expect(employee.getName()).toBe('Hal');
   expect(employee.getId()).toBe(9000);
   expect(employee.getEmail()).toBe('hal@gmail.com');
   expect(employee.getRole()).toBe('Employee');
});
