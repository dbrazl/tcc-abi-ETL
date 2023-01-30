import Sequelize, { Model } from 'sequelize';

class DimensaoCodigoIBGEObito extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo_ibge_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'dimensao_codigo_ibge_obitos'
      }
    );

    return this;
  }
}

export default DimensaoCodigoIBGEObito;