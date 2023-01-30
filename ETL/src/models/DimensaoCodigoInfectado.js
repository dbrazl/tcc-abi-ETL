import Sequelize, { Model } from 'sequelize';

class DimensaoCodigoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo_id: {
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

export default DimensaoCodigoInfectado;