import 'dotenv/config';
import Database from './database';

import { getInfectedData, getDeathData } from './routines/extractData';
import { joinData } from './routines/joinData';
import { populateAllDeathDimensions, populateAllInfectedsDimensions } from './routines/populateDimensions';
import { populateFatoInfectado } from './routines/populateFacts';
class App {
  async init() {
    await Database.createTables();
    await this.infectedsRoutines();
    // await this.deathRoutines();
  }

  async infectedsRoutines() {
    const infecteds = await getInfectedData();
    const joinedInfecteds = joinData(infecteds);
    await populateAllInfectedsDimensions(joinedInfecteds);
    await populateFatoInfectado(joinedInfecteds);
  }

  async deathRoutines() {
    const deaths = await getDeathData();
    const joinedInfecteds = joinData(deaths);
    await populateAllDeathDimensions(joinedInfecteds);
  }
}

new App().init();
