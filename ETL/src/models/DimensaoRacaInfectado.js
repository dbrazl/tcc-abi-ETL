import Sequelize, { Model } from 'sequelize';

class DimensaoRacaInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        raca_id: {
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

export default DimensaoRacaInfectado;