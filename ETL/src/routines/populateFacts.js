import DimensaoClassificacaoCasoInfectado from "../models/Infected/DimensaoClassificacaoCasoInfectado";
import DimensaoCodigoInfectado from "../models/Infected/DimensaoCodigoInfectado";
import DimensaoComorbidadeInfectado from "../models/Infected/DimensaoComorbidadeInfectado";
import DimensaoDataInfectado from "../models/Infected/DimensaoDataInfectado";
import DimensaoEtniaInfectado from "../models/Infected/DimensaoEtniaInfectado";
import DimensaoEvolucaoInfectado from "../models/Infected/DimensaoEvolucaoInfectado";
import DimensaoFaixaEtariaInfectado from "../models/Infected/DimensaoFaixaEtariaInfectado";
import DimensaoIdadeInfectado from "../models/Infected/DimensaoIdadeInfectado";
import DimensaoInternacaoInfectado from "../models/Infected/DimensaoInternacaoInfectado";
import DimensaoMacroInfectado from "../models/Infected/DimensaoMacroInfectado";
import DimensaoMicroInfectado from "../models/Infected/DimensaoMicroInfectado";
import DimensaoMunicipioResidenciaInfectado from "../models/Infected/DimensaoMunicipioResidenciaInfectado";
import DimensaoOrigemDaInformacaoInfectado from "../models/Infected/DimensaoOrigemDaInformacaoInfectado";
import DimensaoRacaInfectado from "../models/Infected/DimensaoRacaInfectado";
import DimensaoSexoInfectado from "../models/Infected/DimensaoSexoInfectado";
import DimensaoURSInfectado from "../models/Infected/DimensaoURSInfectado";
import DimensaoUTIInfectado from "../models/Infected/DimensaoUTIInfectado";

import FatoInfectado from "../models/Infected/FatoInfectado";

const getFK = async (infecteds, item, label, model, label_id) => {
  const labels = infecteds[0];
  const index = labels.indexOf(label);

  try {
    const entity = await model.findOne({
      where: { rotulo: item[index] }
    });

    return entity[label_id]
  } catch (error) {
    console.error(error);
  }
};

const populateFact = async (infecteds, item, fact) => {
  try {
    await fact.create({
      id: item['ID'],
      urs_FK: await getFK(infecteds, item, 'URS', DimensaoURSInfectado, 'urs_id'),
      micro_FK: await getFK(infecteds, item, 'MICRO', DimensaoMicroInfectado, 'micro_id'),
      macro_FK: await getFK(infecteds, item, 'MACRO', DimensaoMacroInfectado, 'macro_id'),
      municipio_FK: await getFK(infecteds, item, 'MUNICIPIO_RESIDENCIA', DimensaoMunicipioResidenciaInfectado, 'municipio_id'),
      codigo_FK: await getFK(infecteds, item, 'CODIGO', DimensaoCodigoInfectado, 'codigo_id'),
      origem_FK: await getFK(infecteds, item, 'ORIGEM_DA_INFORMACAO', DimensaoOrigemDaInformacaoInfectado, 'origem_id'),
      sexo_FK: await getFK(infecteds, item, 'SEXO', DimensaoSexoInfectado, 'sexo_id'),
      idade_FK: await getFK(infecteds, item, 'IDADE', DimensaoIdadeInfectado, 'idade_id'),
      faixa_etaria_FK: await getFK(infecteds, item, 'FAIXA_ETARIA', DimensaoFaixaEtariaInfectado, 'faixa_etaria_id'),
      raca_FK: await getFK(infecteds, item, 'RACA', DimensaoRacaInfectado, 'raca_id'),
      etnia_FK: await getFK(infecteds, item, 'ETNIA', DimensaoEtniaInfectado, 'etnia_id'),
      data_de_notificacao_FK: await getFK(infecteds, item, 'DATA_NOTIFICACAO', DimensaoDataInfectado, 'data_id'),
      data_evolucao_FK: await getFK(infecteds, item, 'DATA_EVOLUCAO', DimensaoDataInfectado, 'data_id'),
      data_1_sintoma_FK: await getFK(infecteds, item, 'DATA_1_SINTOMA', DimensaoDataInfectado, 'data_id'),
      data_atualizacao_FK: await getFK(infecteds, item, 'DATA_ATUALIZACAO', DimensaoDataInfectado, 'data_id'),
      evolucao_FK: await getFK(infecteds, item, 'EVOLUCAO', DimensaoEvolucaoInfectado, 'evolucao_id'),
      comorbidade_FK: await getFK(infecteds, item, 'COMORBIDADE', DimensaoComorbidadeInfectado, 'comorbidade_id'),
      uti_FK: await getFK(infecteds, item, 'UTI', DimensaoUTIInfectado, 'uti_id'),
      internacao_FK: await getFK(infecteds, item, 'INTERNACAO', DimensaoInternacaoInfectado, 'internacao_id'),
      classificacao_FK: await getFK(infecteds, item, 'CLASSIFICACAO_CASO', DimensaoClassificacaoCasoInfectado, 'classificacao_id'),
    });
  } catch (error) {
    console.error(error);
  }
};

export const populateFatoInfectado = async (infecteds) => {
  const copyInfecteds = JSON.parse(JSON.stringify(infecteds));
  copyInfecteds.shift();

  await Promise.all(
    copyInfecteds.map(item => populateFact(infecteds, item, FatoInfectado))
  );
};