import Sequelize, { Model } from 'sequelize';

class DimensaoMacroObito extends Model {
  static init(sequelize) {
    super.init(
      {
        macro_id: {
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

export default DimensaoMacroObito;