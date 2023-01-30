import Sequelize, { Model } from 'sequelize';

class DimensaoDataInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        data_id: Sequelize.NUMBER,
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default DimensaoDataInfectado;