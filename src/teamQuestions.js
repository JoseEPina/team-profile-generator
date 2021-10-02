const managerQuestions = [
   {
      type: 'input',
      name: 'employeeName',
      message: "Enter the manager's name (Required): ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },

   {
      type: 'number',
      name: 'employeeId',
      message: 'Enter employee Id (Required): ',
   },
   {
      type: 'input',
      name: 'email',
      message: 'Enter email address (Required): ',
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      type: 'number',
      name: 'officeNumber',
      message: "Enter manager office's number (Required): ",
   },
];
const teamQuestions = [
   {
      type: 'list',
      name: 'employeeType',
      message: 'Please add another employee or select Finish to complete building your team: ',
      choices: ['Engineer', 'Intern', 'Finish'],
      loop: false,
   },
   {
      when: (answers) => answers.employeeType === 'Engineer' || answers.employeeType === 'Intern',
      type: 'input',
      name: 'employeeName',
      message: "Enter the employee's name (Required): ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },

   {
      when: (answers) => answers.employeeType === 'Engineer' || answers.employeeType === 'Intern',
      type: 'number',
      name: 'employeeId',
      message: 'Enter employee Id (Required): ',
   },
   {
      when: (answers) => answers.employeeType === 'Engineer' || answers.employeeType === 'Intern',
      type: 'input',
      name: 'email',
      message: 'Enter email address (Required): ',
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.employeeType === 'Engineer',
      type: 'input',
      name: 'github',
      message: "Enter the engineer's GitHub username (Required): ",
   },

   {
      when: (answers) => answers.employeeType === 'Intern',
      type: 'input',
      name: 'school',
      message: "Enter the intern's school name (Required): ",
   },
];

export { teamQuestions, managerQuestions };
