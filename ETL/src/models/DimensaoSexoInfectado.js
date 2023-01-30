import Sequelize, { Model } from 'sequelize';

class DimensaoSexoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        sex_id: {
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

export default DimensaoSexoInfectado;