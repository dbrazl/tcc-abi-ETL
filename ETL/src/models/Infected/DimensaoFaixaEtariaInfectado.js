import Sequelize, { Model } from 'sequelize';

class DimensaoFaixaEtariaInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        faixa_etaria_id: {
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

export default DimensaoFaixaEtariaInfectado;