import { getTeamData } from './src/buildTeam.js';

const startApp = async () => {
   var employeeList = [];
   await getTeamData(employeeList);
};

startApp();
