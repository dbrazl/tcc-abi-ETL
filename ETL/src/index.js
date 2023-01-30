import 'dotenv/config';
import './database';

import { getInfectedData } from './routines/extractData';
import { joinData } from './routines/joinData';

class App {
  async init() {
    const infecteds = await getInfectedData();
    const joinedInfecteds = joinData(infecteds);
    console.log(joinedInfecteds);
  }
}

new App().init();
