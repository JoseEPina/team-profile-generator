import inquirer from 'inquirer';
import { teamQuestions, managerQuestions } from '../src/teamQuestions.js';
import { mockUpTeamAnswers, mockUpManagerAnswers } from '../src/inquirerMockUpData.js';

async function getTeamData(employeeList) {
   let answers = {
      menuOption: 'Manager',
   };
   // ToDo: replace mockUpManagerAnswers with real-time answers.(See line 6)
   employeeList.push(await inquirer.prompt(managerQuestions, mockUpManagerAnswers));
   // ToDo: delete push of  mockUpTeamAnswers and remove comments to of await buildTeam
   employeeList.push(...mockUpTeamAnswers);
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
