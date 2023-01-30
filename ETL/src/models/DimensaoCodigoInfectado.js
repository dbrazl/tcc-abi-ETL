import Sequelize, { Model } from 'sequelize';

class DimensaoCodigoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo_id: Sequelize.NUMBER,
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