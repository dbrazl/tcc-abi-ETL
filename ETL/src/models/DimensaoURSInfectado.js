import Sequelize, { Model } from 'sequelize';

class DimensaoURSInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        urs_id: {
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

export default DimensaoURSInfectado;