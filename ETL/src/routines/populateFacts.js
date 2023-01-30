import { millisecondsToHours } from 'date-fns';

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

import DimensaoCodigoIBGEObito from '../models/Death/DimensaoCodigoIBGEObito';
import DimensaoDataObito from '../models/Death/DimensaoDataObito';
import DimensaoMacroObito from '../models/Death/DimensaoMacroObito';
import DimensaoMicroObito from '../models/Death/DimensaoMicroObito';
import DimensaoMunicipioResidenciaObito from '../models/Death/DimensaoMunicipioResidenciaObito';
import DimensaoURSObito from '../models/Death/DimensaoURSObito';

import FatoInfectado from "../models/Infected/FatoInfectado";
import FatoObito from "../models/Death/FatoObito";

const getFK = async (infecteds, item, label, model, label_id) => {
  const labels = infecteds[0];
  const index = labels.indexOf(label);

  try {
    const entity = await model.findOne({
      where: { rotulo: item[index] }
    });

    if (entity) {
      return entity[label_id]
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

const infectedFact = async (infecteds, item) => {
  try {
    const urs_FK = await getFK(infecteds, item, 'URS', DimensaoURSInfectado, 'urs_id');
    const micro_FK = await getFK(infecteds, item, 'MICRO', DimensaoMicroInfectado, 'micro_id');
    const macro_FK = await getFK(infecteds, item, 'MACRO', DimensaoMacroInfectado, 'macro_id');
    const municipio_FK = await getFK(infecteds, item, 'MUNICIPIO_RESIDENCIA', DimensaoMunicipioResidenciaInfectado, 'municipio_id');
    const codigo_FK = await getFK(infecteds, item, 'CODIGO', DimensaoCodigoInfectado, 'codigo_id');
    const origem_FK = await getFK(infecteds, item, 'ORIGEM_DA_INFORMACAO', DimensaoOrigemDaInformacaoInfectado, 'origem_id');
    const sexo_FK = await getFK(infecteds, item, 'SEXO', DimensaoSexoInfectado, 'sex_id');
    const idade_FK = await getFK(infecteds, item, 'IDADE', DimensaoIdadeInfectado, 'idade_id');
    const faixa_etaria_FK = await getFK(infecteds, item, 'FAIXA_ETARIA', DimensaoFaixaEtariaInfectado, 'faixa_etaria_id');
    const raca_FK = await getFK(infecteds, item, 'RACA', DimensaoRacaInfectado, 'raca_id');
    const etnia_FK = await getFK(infecteds, item, 'ETNIA', DimensaoEtniaInfectado, 'etnia_id');
    const data_de_notificacao_FK = await getFK(infecteds, item, 'DATA_NOTIFICACAO', DimensaoDataInfectado, 'data_id')
    const data_evolucao_FK = await getFK(infecteds, item, 'DATA_EVOLUCAO', DimensaoDataInfectado, 'data_id');
    const data_1_sintoma_FK = await getFK(infecteds, item, 'DATA_1_SINTOMA', DimensaoDataInfectado, 'data_id');
    const data_atualizacao_FK = await getFK(infecteds, item, 'DATA_ATUALIZACAO', DimensaoDataInfectado, 'data_id');
    const evolucao_FK = await getFK(infecteds, item, 'EVOLUCAO', DimensaoEvolucaoInfectado, 'evolucao_id');
    const comorbidade_FK = await getFK(infecteds, item, 'COMORBIDADE', DimensaoComorbidadeInfectado, 'comorbidade_id');
    const uti_FK = await getFK(infecteds, item, 'UTI', DimensaoUTIInfectado, 'uti_id');
    const internacao_FK = await getFK(infecteds, item, 'INTERNACAO', DimensaoInternacaoInfectado, 'internacao_id');
    const classificacao_FK = await getFK(infecteds, item, 'CLASSIFICACAO_CASO', DimensaoClassificacaoCasoInfectado, 'classificacao_id');

    await FatoInfectado.create({
      urs_FK,
      micro_FK,
      macro_FK,
      municipio_FK,
      codigo_FK,
      origem_FK,
      sexo_FK,
      idade_FK,
      faixa_etaria_FK,
      raca_FK,
      etnia_FK,
      data_de_notificacao_FK,
      data_evolucao_FK,
      data_1_sintoma_FK,
      data_atualizacao_FK,
      evolucao_FK,
      comorbidade_FK,
      uti_FK,
      internacao_FK,
      classificacao_FK,
    });
  } catch (error) {
    console.error(error);
  }
};

export const populateFatoInfectado = async (infecteds) => {
  const BATCH_SIZE = 1000;
  const batchNumber = Math.floor(infecteds.length / BATCH_SIZE);

  for (let batch = 0; batch < batchNumber; batch++) {
    const start = new Date().getTime();

    await Promise.all(
      infecteds.slice(batch * 1000 + 1, (batchNumber + 1) * 1000 + 1).map(
        async item => await infectedFact(infecteds, item)
      )
    );

    const end = new Date().getTime();

    console.clear();
    console.log('Fato Infectado')
    console.log('batch', batch);
    console.log('Timing by batch', end - start);
    console.log('Timing remaining', millisecondsToHours((end - start) * (2350 - batch) / 60), 'hours');
  }
};

const deathFact = async (infecteds, item) => {
  try {
    const codigo_ibge_FK = await getFK(infecteds, item, 'CodigoIBGE', DimensaoCodigoIBGEObito, 'codigo_ibge_id');
    const data_FK = await getFK(infecteds, item, 'DATA', DimensaoDataObito, 'data_id');
    const macro_FK = await getFK(infecteds, item, 'Macro', DimensaoMacroObito, 'macro_id');
    const micro_FK = await getFK(infecteds, item, 'Micro', DimensaoMicroObito, 'micro_id');
    const municipio_FK = await getFK(infecteds, item, 'MUNICIPIO_RESIDENCIA', DimensaoMunicipioResidenciaObito, 'municipio_id');
    const urs_FK = await getFK(infecteds, item, 'URS', DimensaoURSObito, 'urs_id');

    await FatoObito.create({
      codigo_ibge_FK,
      data_FK,
      macro_FK,
      micro_FK,
      municipio_FK,
      urs_FK,
    });
  } catch (error) {
    console.error(error);
  }
};

export const populateFatoObito = async (infecteds) => {
  const BATCH_SIZE = 1000;
  const batchNumber = Math.floor(infecteds.length / BATCH_SIZE);

  for (let batch = 0; batch < batchNumber; batch++) {
    const start = new Date().getTime();

    await Promise.all(
      infecteds.slice(batch * 1000 + 1, (batch + 1) * 1000 + 1).map(
        async item => await deathFact(infecteds, item)
      )
    );

    const end = new Date().getTime();

    console.clear();
    console.log('Fato Obito')
    console.log('batch', batch);
    console.log('Timing by batch', end - start);
    console.log('Timing remaining', millisecondsToHours((end - start) * (batchNumber - batch) / 60), 'hours');
  }
};