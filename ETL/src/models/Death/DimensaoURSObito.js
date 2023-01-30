import Sequelize, { Model } from 'sequelize';

class DimensaoURSObito extends Model {
  static init(sequelize) {
    super.init(
      {
        urs_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'dimensao_urs_obitos'
      }
    );

    return this;
  }
}

export default DimensaoURSObito;