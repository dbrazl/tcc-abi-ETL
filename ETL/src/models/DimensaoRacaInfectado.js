import Sequelize, { Model } from 'sequelize';

class DimensaoRacaInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        raca_id: Sequelize.NUMBER,
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