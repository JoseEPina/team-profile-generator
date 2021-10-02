const managerQuestions = [
   {
      type: 'input',
      name: 'name',
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
      name: 'id',
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
      name: 'menuOption',
      message: 'Please add another employee or select Finish to complete building your team: ',
      choices: ['Engineer', 'Intern', 'Finish'],
      loop: false,
   },
   {
      when: (answers) => answers.menuOption === 'Engineer' || answers.menuOption === 'Intern',
      type: 'input',
      name: 'name',
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
      when: (answers) => answers.menuOption === 'Engineer' || answers.menuOption === 'Intern',
      type: 'number',
      name: 'id',
      message: 'Enter employee Id (Required): ',
   },
   {
      when: (answers) => answers.menuOption === 'Engineer' || answers.menuOption === 'Intern',
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
      when: (answers) => answers.menuOption === 'Engineer',
      type: 'input',
      name: 'github',
      message: "Enter the engineer's GitHub username (Required): ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },

   {
      when: (answers) => answers.menuOption === 'Intern',
      type: 'input',
      name: 'school',
      message: "Enter the intern's school name (Required): ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
];

export { teamQuestions, managerQuestions };
