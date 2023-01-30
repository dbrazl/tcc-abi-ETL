import Sequelize, { Model } from 'sequelize';

class FatoObito extends Model {
  static init(sequelize) {
    super.init(
      {
        fato_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        numero_obitos: Sequelize.INTEGER,
        municipio_FK: Sequelize.INTEGER,
        codigo_ibge_FK: Sequelize.INTEGER,
        data_FK: Sequelize.INTEGER,
        urs_FK: Sequelize.INTEGER,
        macro_FK: Sequelize.INTEGER,
        micro_FK: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default FatoObito;