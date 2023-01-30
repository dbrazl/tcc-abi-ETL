import Sequelize, { Model } from 'sequelize';

class DimensaoOrigemDaInformacaoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        origem_id: Sequelize.NUMBER,
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default DimensaoOrigemDaInformacaoInfectado;