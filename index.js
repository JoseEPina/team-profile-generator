import inquirer from 'inquirer';

// accept a default parameter inputs and set it to an empty array. This allows us to use this
// function to recursively get data
const getTeamData = async (inputs = []) => {
   // de-structuring to pop off the again property from the inquirer.prompt() promise
   // and leave the rest of the prompts' answers in ...answers using the spread operator
   const temp1 = await inquirer.prompt(teamQuestions);
   console.log("temp1", temp1)
   const { addOtherEmployee, ...answers } = temp1;
   console.log(" answers", answers)
   console.log("addOtherEmployee", addOtherEmployee);
   // const { addOtherEmployee, ...answers } = await inquirer.prompt(teamQuestions);
   // create  new array by merging the previous inputs and answers
   const newInputs = [...inputs, answers];
   console.log("newInputs", newInputs)
   
   // check if we are done; if asking again recursively call prompts again
   // otherwise return array of answers

   return addOtherEmployee ? getTeamData(newInputs) : newInputs;
};

import teamQuestions from './src/teamQuestions.js';

const startApp = async () => {
   const inputs = await getTeamData();
   console.log('after prompts ', inputs);
};

startApp();
