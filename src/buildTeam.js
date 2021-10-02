import inquirer from 'inquirer';
import { teamQuestions, managerQuestions } from '../src/teamQuestions.js';

// accept a default parameter inputs and set it to an empty array. This allows us to use this
// function to recursively get data
const buildTeam = async (employeeList = []) => {
   const answers = await inquirer.prompt(teamQuestions);
   if (answers.employeeType !== 'Finish') {
      employeeList.push(answers);
      console.log('employeeList ', employeeList);
   }
   // check if we are done; if asking again recursively call prompts again
   // otherwise return array of answers
   return answers.employeeType !== 'Finish' ? buildTeam(employeeList) : employeeList;
};

async function getTeamData(employeeList) {
   let answers = {
      employeeType: 'Manager',
   };
   employeeList.push(await inquirer.prompt(managerQuestions, answers));
   console.log('employeeList ', employeeList);
   console.log('after prompts ', await buildTeam(employeeList));
}

export { buildTeam, getTeamData };
