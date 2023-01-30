import Sequelize, { Model } from 'sequelize';

class DimensaoMicroObito extends Model {
  static init(sequelize) {
    super.init(
      {
        micro_id: {
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

export default DimensaoMicroObito;