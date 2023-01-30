import Sequelize from 'sequelize';

import config from '../config/database';

import DimensaoClassificacaoCasoInfectado from '../models/DimensaoClassificacaoCasoInfectado';
import DimensaoCodigoInfectado from '../models/DimensaoCodigoInfectado';
import DimensaoComorbidadeInfectado from '../models/DimensaoComorbidadeInfectado';
import DimensaoDataInfectado from '../models/DimensaoDataInfectado';
import DimensaoEtniaInfectado from '../models/DimensaoEtniaInfectado';
import DimensaoEvolucaoInfectado from '../models/DimensaoEvolucaoInfectado';
import DimensaoFaixaEtariaInfectado from '../models/DimensaoFaixaEtariaInfectado';
import DimensaoIdadeInfectado from '../models/DimensaoIdadeInfectado';
import DimensaoInternacaoInfectado from '../models/DimensaoInternacaoInfectado';
import DimensaoMacroInfectado from '../models/DimensaoMacroInfectado';
import DimensaoMicroInfectado from '../models/DimensaoMicroInfectado';
import DimensaoMunicipioResidenciaInfectado from '../models/DimensaoMunicipioResidenciaInfectado';
import DimensaoOrigemDaInformacaoInfectado from '../models/DimensaoOrigemDaInformacaoInfectado';
import DimensaoRacaInfectado from '../models/DimensaoRacaInfectado';
import DimensaoSexoInfectado from '../models/DimensaoSexoInfectado';
import DimensaoURSInfectado from '../models/DimensaoURSInfectado';
import DimensaoUTIInfectado from '../models/DimensaoUTIInfectado';
import FatoInfectado from '../models/FatoInfectado';


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