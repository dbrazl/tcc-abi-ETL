import Sequelize, { Model } from 'sequelize';

class DimensaoURSInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        urs_id: Sequelize.NUMBER,
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