import Sequelize, { Model } from 'sequelize';

class DimensaoIdadeInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        idade_id: Sequelize.NUMBER,
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