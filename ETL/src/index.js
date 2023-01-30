import 'dotenv/config';
import Database from './database';

import { getInfectedData } from './routines/extractData';
import { joinData } from './routines/joinData';
import { populateAllInfectedsDimensions } from './routines/populateDimensions';
class App {
  async init() {
    await Database.createTables();
    await this.infectedsRoutines();
  }

  async infectedsRoutines() {
    const infecteds = await getInfectedData();
    const joinedInfecteds = joinData(infecteds);
    await populateAllInfectedsDimensions(joinedInfecteds);
  }
}

new App().init();
