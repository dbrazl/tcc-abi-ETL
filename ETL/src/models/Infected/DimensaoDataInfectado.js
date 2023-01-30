import Sequelize, { Model } from 'sequelize';

class DimensaoDataInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        data_id: {
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

export default DimensaoDataInfectado;