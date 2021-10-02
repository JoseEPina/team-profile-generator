import { getTeamData } from './src/buildTeam.js';
import { buildHtml } from './src/buildHtml.js';
import { writeToFile } from './src/writeToFile.js';

const startApp = async () => {
   var employeeList = [];

   await getTeamData(employeeList);
   let htmlPage = buildHtml(employeeList);
   await writeToFile('./dist/index.html', htmlPage);
};

startApp();
