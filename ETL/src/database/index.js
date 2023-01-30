import Sequelize from 'sequelize';

import config from '../config/database';

import DimensaoClassificacaoCasoInfectado from '../models/Infected/DimensaoClassificacaoCasoInfectado';
import DimensaoCodigoInfectado from '../models/Infected/DimensaoCodigoInfectado';
import DimensaoComorbidadeInfectado from '../models/Infected/DimensaoComorbidadeInfectado';
import DimensaoDataInfectado from '../models/Infected/DimensaoDataInfectado';
import DimensaoEtniaInfectado from '../models/Infected/DimensaoEtniaInfectado';
import DimensaoEvolucaoInfectado from '../models/Infected/DimensaoEvolucaoInfectado';
import DimensaoFaixaEtariaInfectado from '../models/Infected/DimensaoFaixaEtariaInfectado';
import DimensaoIdadeInfectado from '../models/Infected/DimensaoIdadeInfectado';
import DimensaoInternacaoInfectado from '../models/Infected/DimensaoInternacaoInfectado';
import DimensaoMacroInfectado from '../models/Infected/DimensaoMacroInfectado';
import DimensaoMicroInfectado from '../models/Infected/DimensaoMicroInfectado';
import DimensaoMunicipioResidenciaInfectado from '../models/Infected/DimensaoMunicipioResidenciaInfectado';
import DimensaoOrigemDaInformacaoInfectado from '../models/Infected/DimensaoOrigemDaInformacaoInfectado';
import DimensaoRacaInfectado from '../models/Infected/DimensaoRacaInfectado';
import DimensaoSexoInfectado from '../models/Infected/DimensaoSexoInfectado';
import DimensaoURSInfectado from '../models/Infected/DimensaoURSInfectado';
import DimensaoUTIInfectado from '../models/Infected/DimensaoUTIInfectado';
import FatoInfectado from '../models/Infected/FatoInfectado';


const modelsInfectados = [
  DimensaoClassificacaoCasoInfectado,
  DimensaoCodigoInfectado,
  DimensaoComorbidadeInfectado,
  DimensaoDataInfectado,
  DimensaoEtniaInfectado,
  DimensaoEvolucaoInfectado,
  DimensaoFaixaEtariaInfectado,
  DimensaoIdadeInfectado,
  DimensaoInternacaoInfectado,
  DimensaoMacroInfectado,
  DimensaoMicroInfectado,
  DimensaoMunicipioResidenciaInfectado,
  DimensaoOrigemDaInformacaoInfectado,
  DimensaoRacaInfectado,
  DimensaoSexoInfectado,
  DimensaoURSInfectado,
  DimensaoUTIInfectado,
  FatoInfectado
];

const models = [...modelsInfectados];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();