import { getTeamData } from './src/buildTeam.js';
import { buildHtml } from './src/buildHtml.js';
import { writeToFile } from './src/writeToFile.js';
import { createEmployeeClassObjects } from './src/createEmployeeClassObjects.js';

const startApp = async () => {
   let employeeListData = [];

   await getTeamData(employeeListData);
   let employeeListObjects = createEmployeeClassObjects(employeeListData);
   let htmlPage = buildHtml(employeeListObjects);
   await writeToFile('./dist/index.html', htmlPage);
};

startApp();
