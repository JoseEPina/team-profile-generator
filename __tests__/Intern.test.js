const Intern = require('../lib/Intern');

test('creates an intern object', () => {
   const intern = new Intern('Adam', 25, 'adam@workaholics.com', 'internSchool');

   expect(intern.name).toBe('Adam');
   expect(intern.id).toBe(25);
   expect(intern.email).toBe('adam@workaholics.com');
   expect(intern.school).toBe('internSchool');
   expect(intern.getName()).toBe('Adam');
   expect(intern.getId()).toBe(25);
   expect(intern.getEmail()).toBe('adam@workaholics.com');
   expect(intern.getSchool()).toBe('internSchool');
   expect(intern.getRole()).toBe('Intern');
});
