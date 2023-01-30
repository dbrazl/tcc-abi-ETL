import Sequelize, { Model } from 'sequelize';

class DimensaoInternacaoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        internacao_id: Sequelize.NUMBER,
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default DimensaoInternacaoInfectado;