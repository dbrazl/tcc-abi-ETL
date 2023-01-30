import Sequelize, { Model } from 'sequelize';

class DimensaoMunicipioResidenciaInfectado extends Model {
  static init(sequelize) {
    super.init(
      {
        municipio_id: Sequelize.NUMBER,
        rotulo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default DimensaoMunicipioResidenciaInfectado;