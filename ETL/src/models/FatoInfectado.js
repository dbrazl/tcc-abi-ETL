import Sequelize, { Model } from 'sequelize';

class FatoInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        fato_id: {
          type: Sequelize.NUMBER,
          autoIncrement: true,
          primaryKey: true
        },
        id: Sequelize.NUMBER,
        urs_FK: Sequelize.NUMBER,
        micro_FK: Sequelize.NUMBER,
        macro_FK: Sequelize.NUMBER,
        municipio_FK: Sequelize.NUMBER,
        codigo_FK: Sequelize.NUMBER,
        origem_FK: Sequelize.NUMBER,
        sexo_FK: Sequelize.NUMBER,
        idade_FK: Sequelize.NUMBER,
        faixa_etaria_FK: Sequelize.NUMBER,
        raca_FK: Sequelize.NUMBER,
        etnia_FK: Sequelize.NUMBER,
        data_de_notificacao_FK: Sequelize.NUMBER,
        data_evolucao_FK: Sequelize.NUMBER,
        data_1_sintoma_FK: Sequelize.NUMBER,
        data_atualizacao_FK: Sequelize.NUMBER,
        evolucao_FK: Sequelize.NUMBER,
        comorbidade_FK: Sequelize.NUMBER,
        uti_FK: Sequelize.NUMBER,
        internacao_FK: Sequelize.NUMBER,
        classificacao_FK: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default FatoInfectado;