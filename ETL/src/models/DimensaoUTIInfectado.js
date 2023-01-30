import Sequelize, { Model } from 'sequelize';

class DimensaoUTIInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        uti_id: Sequelize.NUMBER,
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