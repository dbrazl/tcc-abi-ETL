import Sequelize, { Model } from 'sequelize';

class DimensaoFaixaEtariaInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        faixa_etaria_id: Sequelize.NUMBER,
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default DimensaoFaixaEtariaInfectado;