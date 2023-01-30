import Sequelize, { Model } from 'sequelize';

class FatoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        fato_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        id: Sequelize.INTEGER,
        urs_FK: Sequelize.INTEGER,
        micro_FK: Sequelize.INTEGER,
        macro_FK: Sequelize.INTEGER,
        municipio_FK: Sequelize.INTEGER,
        codigo_FK: Sequelize.INTEGER,
        origem_FK: Sequelize.INTEGER,
        sexo_FK: Sequelize.INTEGER,
        idade_FK: Sequelize.INTEGER,
        faixa_etaria_FK: Sequelize.INTEGER,
        raca_FK: Sequelize.INTEGER,
        etnia_FK: Sequelize.INTEGER,
        data_de_notificacao_FK: Sequelize.INTEGER,
        data_evolucao_FK: Sequelize.INTEGER,
        data_1_sintoma_FK: Sequelize.INTEGER,
        data_atualizacao_FK: Sequelize.INTEGER,
        evolucao_FK: Sequelize.INTEGER,
        comorbidade_FK: Sequelize.INTEGER,
        uti_FK: Sequelize.INTEGER,
        internacao_FK: Sequelize.INTEGER,
        classificacao_FK: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default FatoInfectado;