const teamQuestions = [
   {
      when: (answers) =>
         answers.employeeType != 'Engineer' && answers.employeeType != 'Intern' && answers.employeeType != 'Finish',
      type: 'input',
      name: 'managerName',
      message: "Enter the team manager's name (Required): ",
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
      when: (answers) => answers.employeeType != 'Finish',
      type: 'number',
      name: 'employeeId',
      message: 'Enter employee Id (Required): ',
   },
   {
      when: (answers) => answers.employeeType != 'Finish',
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
      when: (answers) =>
         answers.employeeType != 'Engineer' && answers.employeeType != 'Intern' && answers.employeeType != 'Finish',
      type: 'number',
      name: 'officeNumber',
      message: "Enter manager office's number (Required): ",
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
   {
      type: 'confirm',
      name: 'addOtherEmployee',
      message: 'Do you want to add another employee? ',
      default: true,
   },
];

export default teamQuestions;
