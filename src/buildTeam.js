import inquirer from 'inquirer';
import { teamQuestions, managerQuestions } from '../src/teamQuestions.js';

const teamAnswers = [
   {
      menuOption: 'Engineer',
      name: 'Dave',
      id: 32,
      email: 'davemonolith@mail.com',
      github: 'davemonolith',
   },

   { menuOption: 'Engineer', name: 'Frank', id: 31, email: 'frankopoole@comcast.net', github: 'DrFrank' },
   {
      menuOption: 'Intern',
      name: 'Adam',
      id: 26,
      email: 'adamlev@hotmail.com',
      school: 'School of Comedy',
   },
   {
      menuOption: 'Intern',
      name: 'Einar',
      id: 889,
      email: 'einarloth@yahoo.com',
      school: 'Camden University',
   },
];

async function getTeamData(employeeList) {
   let answers = {
      menuOption: 'Manager',
      name: 'Hal',
      id: 9000,
      email: 'hal9000@gmail.com',
      officeNumber: 2001,
   };

   employeeList.push(await inquirer.prompt(managerQuestions, answers));
   employeeList.push(...teamAnswers);
   // await buildTeam(employeeList);
}

// parameter employeelist[ ]to enable recursive call to get employees' data
const buildTeam = async (employeeList = []) => {
   const answers = await inquirer.prompt(teamQuestions, teamAnswers);

   if (answers.menuOption !== 'Finish') {
      employeeList.push(answers);
   }

   // are we done? NO-recursive call for another employee : YES-return employee list
   return answers.menuOption !== 'Finish' ? buildTeam(employeeList) : employeeList;
};

export { buildTeam, getTeamData };
