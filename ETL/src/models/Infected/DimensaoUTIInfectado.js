import Sequelize, { Model } from 'sequelize';

class DimensaoUTIInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        uti_id: {
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

export default DimensaoUTIInfectado;