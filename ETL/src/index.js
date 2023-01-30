import 'dotenv/config';
import './database';

import { getInfectedData } from './routines/extractData';

class App {
  init() {
    getInfectedData();
  }
}

new App().init();
