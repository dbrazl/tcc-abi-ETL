import Sequelize, { Model } from 'sequelize';

class DimensaoMacroInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        macro_id: Sequelize.NUMBER,
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default DimensaoMacroInfectado;