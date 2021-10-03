// Get Modules
import { getTeamData } from './src/buildTeam.js';
import { buildHtml } from './src/buildHtml.js';
import { writeToFile } from './src/writeToFile.js';
import { createEmployeeClassObjects } from './src/createEmployeeClassObjects.js';

// const getTeamData = require('./src/buildTeam.js');
// const buildHtml = require('./src/buildHtml.js');
// const writeToFile = require('./src/writeToFile.js');
// const createEmployeeClassObjects = require('./src/createEmployeeClassObjects.js');

// Begin main process
const startApp = async () => {
   let employeeListData = []; // Array to get team Inquirer response

   await getTeamData(employeeListData); // gets the team Data from Inquirer response
   let employeeListObjects = createEmployeeClassObjects(employeeListData); // create Class Objects from Inquirer response
   let htmlPage = buildHtml(employeeListObjects); // Build HTML page with class objects
   await writeToFile('./dist/index.html', htmlPage); // write index.html file
};

startApp();
