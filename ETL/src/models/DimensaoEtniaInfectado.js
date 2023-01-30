import Sequelize, { Model } from 'sequelize';

class DimensaoEtniaInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        etnia_id: Sequelize.NUMBER,
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default DimensaoEtniaInfectado;