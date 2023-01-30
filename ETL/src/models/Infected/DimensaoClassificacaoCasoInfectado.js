import Sequelize, { Model } from 'sequelize';

class DimensaoClassificacaoCasoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        classificacao_id: {
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

export default DimensaoClassificacaoCasoInfectado;