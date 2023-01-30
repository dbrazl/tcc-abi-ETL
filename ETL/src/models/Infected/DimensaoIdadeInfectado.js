import Sequelize, { Model } from 'sequelize';

class DimensaoIdadeInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        idade_id: {
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

export default DimensaoIdadeInfectado;