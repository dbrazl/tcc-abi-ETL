import Sequelize, { Model } from 'sequelize';

class DimensaoClassificacaoCasoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        classificacao_id: Sequelize.NUMBER,
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