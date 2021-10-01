import inquirer from 'inquirer';

// we accept a default parameter inputs and set it to an empty array. This allows us to use this
// function to recursively get data
// const getTeamData = async (inputs = []) => {




//    // de-structuring to pop off the again property from the inquirer.prompt() promise
//    // and leave the rest of the prompts' answers in ...answers using the spread operator
//    const { again, ...answers } = await inquirer.prompt(prompts);
//    // create  new array by merging the previous inputs and answers
//    const newInputs = [...inputs, answers];
//    // check if we are done; if asking again recursively call prompts again
//    // otherwise return array of answers
//    return again ? getTeamData(newInputs) : newInputs;
// };

import teamQuestions from './src/teamQuestions.js';

const startApp = async () => {
   // const inputs = await getTeamData();
   await inquirer.prompt(teamQuestions);
   console.log(inputs);
};

startApp();
