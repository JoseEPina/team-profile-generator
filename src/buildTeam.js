// Get Modules
import inquirer from 'inquirer';
import { teamQuestions, managerQuestions } from '../src/teamQuestions.js';
import { mockUpTeamAnswers, mockUpManagerAnswers } from '../src/inquirerMockUpData.js';

// const inquirer = require('inquirer');
// const teamQuestions, managerQuestions = require('../src/teamQuestions.js');
// const mockUpTeamAnswers, mockUpManagerAnswers = require('../src/inquirerMockUpData.js');

// Inquirer prompt questions to obtain Manager and team data.
async function getTeamData(employeeListData) {
   let answers = {
      menuOption: 'Manager', // Manager selection initiated by default.
   };

   // ToDo: replace mockUpManagerAnswers with real-time answers.
   //employeeListData.push(await inquirer.prompt(managerQuestions, mockUpManagerAnswers));
   // ToDo: delete push of mockUpTeamAnswers and remove comments to of await buildTeam
   //employeeListData.push(...mockUpTeamAnswers);

   // Prompt for manager data and push data to array 'employeeListData'
   employeeListData.push(await inquirer.prompt(managerQuestions, answers));
   await buildTeam(employeeListData); // function *recursively* prompts for team data.
}

// Function to recursively prompt for team data.
// parameter employeeListData[ ] enables recursive call to get employees' data
// by accumulating/push the previous responses with the new prompts responses
const buildTeam = async (employeeListData = []) => {
   // obtain team data from inquirer prompts and store to answers constant
   const answers = await inquirer.prompt(teamQuestions);

   // when menuOption is not 'Finish', then push responses to array
   if (answers.menuOption !== 'Finish') {
      employeeListData.push(answers);
   }

   // are we done? NO-recursive call to build team for another employee data : YES-return employee list
   return answers.menuOption !== 'Finish' ? buildTeam(employeeListData) : employeeListData;
};

export { buildTeam, getTeamData };
// module.exports = { buildTeam, getTeamData };
