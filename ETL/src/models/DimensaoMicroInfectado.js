import Sequelize, { Model } from 'sequelize';

class DimensaoMicroInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        micro_id: {
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

export default DimensaoMicroInfectado;