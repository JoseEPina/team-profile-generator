import inquirer from 'inquirer';
import { teamQuestions, managerQuestions } from '../src/teamQuestions.js';
import { mockUpTeamAnswers, mockUpManagerAnswers } from '../src/inquirerMockUpData.js';

async function getTeamData(employeeListData) {
   let answers = {
      menuOption: 'Manager',
   };
   // ToDo: replace mockUpManagerAnswers with real-time answers.(See line 6)
   employeeListData.push(await inquirer.prompt(managerQuestions, mockUpManagerAnswers));
   // ToDo: delete push of  mockUpTeamAnswers and remove comments to of await buildTeam
   employeeListData.push(...mockUpTeamAnswers);
   // await buildTeam(employeeListData);
}

// parameter employeeListData[ ]to enable recursive call to get employees' data
const buildTeam = async (employeeListData = []) => {
   const answers = await inquirer.prompt(teamQuestions, teamAnswers);

   if (answers.menuOption !== 'Finish') {
      employeeListData.push(answers);
   }

   // are we done? NO-recursive call for another employee : YES-return employee list
   return answers.menuOption !== 'Finish' ? buildTeam(employeeListData) : employeeListData;
};

export { buildTeam, getTeamData };
