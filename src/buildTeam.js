import inquirer from 'inquirer';
import { teamQuestions, managerQuestions } from '../src/teamQuestions.js';

async function getTeamData(employeeList) {
   let answers = {
      menuOption: 'Manager',
   };
   employeeList.push(await inquirer.prompt(managerQuestions, answers));
   
   await buildTeam(employeeList);
}

// parameter employeelist[ ]to enable recursive call to get employees' data
const buildTeam = async (employeeList = []) => {
   const answers = await inquirer.prompt(teamQuestions);
   
   if (answers.menuOption !== 'Finish') {
      employeeList.push(answers);
   }
   
   // are we done? NO-recursive call for another employee : YES-return employee list
   return answers.menuOption !== 'Finish' ? buildTeam(employeeList) : employeeList;
};

export { buildTeam, getTeamData };
