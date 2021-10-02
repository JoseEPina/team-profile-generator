import { getTeamData } from './src/buildTeam.js';
import { buildHtml } from './src/buildHtml.js';

const startApp = async () => {
   var employeeList = [];
   await getTeamData(employeeList);
   buildHtml(employeeList);
};

startApp();
