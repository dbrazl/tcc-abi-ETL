import Sequelize, { Model } from 'sequelize';

class DimensaoSexoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        sex_id: Sequelize.NUMBER,
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