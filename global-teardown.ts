import * as fs from 'fs';
import * as xml2js from 'xml2js';
import axios from 'axios';
import { promisify } from 'util';


async function globalTeardown() {
  const passRate = await getResults()
  console.log("Pass: " + passRate)
  await postReusltsToMSTeams(passRate)
}

export default globalTeardown;


export async function getResults() {
  try {
    console.log('Getting test results: ');
    const readFileAsync = promisify(fs.readFile);
    const parseStringAsync = promisify(xml2js.parseString);

    const xml = await readFileAsync('./results/results.xml', 'utf-8');
    const result = await parseStringAsync(xml);

    const totalTests = parseInt(result.testsuites.$.tests);
    const failedTests = parseInt(result.testsuites.$.failures);

    const passedTests = totalTests - failedTests;
    const passRate = (passedTests / totalTests) * 100;

    return passRate;
  } catch (error) {
    console.error('Error parsing XML:', error);
    throw error;
  }
}

export async function postReusltsToMSTeams(passRate) {
  console.log('Posting test results to MS Teams: ');
  const passRateMessage = `Pass Rate: ${passRate}`;

  try {
    const res = await axios.post(process.env.TEAMS_HOOK!, { text: passRateMessage })
  } catch (error) {
    console.error('Error posting pass rate to Teams chat:', error);
  }
}