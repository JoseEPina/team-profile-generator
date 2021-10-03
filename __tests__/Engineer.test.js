// Get Engineer Class definition
const Engineer = require('../lib/Engineer.js');

// Test case for Engineer object creation
test('creates an engineer object', () => {
   const engineer = new Engineer('Frank', 32, 'frankopoole@space.com', 'frankopoole');

   expect(engineer.name).toBe('Frank');
   expect(engineer.id).toBe(32);
   expect(engineer.email).toBe('frankopoole@space.com');
   expect(engineer.github).toBe('frankopoole');
   expect(engineer.getName()).toBe('Frank');
   expect(engineer.getId()).toBe(32);
   expect(engineer.getEmail()).toBe('frankopoole@space.com');
   expect(engineer.getGithub()).toBe('frankopoole');
   expect(engineer.getRole()).toBe('Engineer');
});
