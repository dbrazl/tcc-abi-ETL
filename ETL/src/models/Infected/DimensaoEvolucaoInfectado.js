import Sequelize, { Model } from 'sequelize';

class DimensaoEvolucaoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        evolucao_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
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