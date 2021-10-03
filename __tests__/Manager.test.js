// Get Manager class definition
const Manager = require('../lib/Manager.js');

// Test case for Manager object creation
test('creates an manager object', () => {
   const manager = new Manager('Dave', 31, 'dave@mail.com', 2001);

   expect(manager.name).toBe('Dave');
   expect(manager.id).toBe(31);
   expect(manager.email).toBe('dave@mail.com');
   expect(manager.officeNumber).toBe(2001);
   expect(manager.getName()).toBe('Dave');
   expect(manager.getId()).toBe(31);
   expect(manager.getEmail()).toBe('dave@mail.com');
   expect(manager.getOfficeNumber()).toBe(2001);
   expect(manager.getRole()).toBe('Manager');
});
