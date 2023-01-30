import Sequelize, { Model } from 'sequelize';

class DimensaoComorbidadeInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        comorbidade_id: {
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

export default DimensaoComorbidadeInfectado;