import Sequelize, { Model } from 'sequelize';

class DimensaoEvolucaoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        evolucao_id: Sequelize.NUMBER,
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default DimensaoEvolucaoInfectado;