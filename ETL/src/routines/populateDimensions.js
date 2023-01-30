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
import DimensaoOrigemDaInformacaoInfectado from "../models/Infected/DimensaoOrigemDaInformacaoInfectado";
import DimensaoRacaInfectado from "../models/Infected/DimensaoRacaInfectado";
import DimensaoSexoInfectado from "../models/Infected/DimensaoSexoInfectado";
import DimensaoURSInfectado from "../models/Infected/DimensaoURSInfectado";
import DimensaoUTIInfectado from "../models/Infected/DimensaoUTIInfectado";
import DimensaoMunicipioResidenciaInfectado from '../models/Infected/DimensaoMunicipioResidenciaInfectado';


const getUniques = async (infecteds, label) => {
  const labels = infecteds[0];
  const index = labels.indexOf(label);

  const values = infecteds.map(
    infected => infected[index]
  );

  const uniques = [... new Set(values)];
  uniques.shift();

  return uniques.filter(item => item);
};

const populate = async (infecteds, label, model) => {
  const datas = await getUniques(infecteds, label);
  await Promise.all(
    datas.forEach(
      async data => await model.create(
        { 
          rotulo: data 
        }
      )
    )
  );
};

export const populateClassificacaoCasoInfectado = async (infecteds) => {
  await populate(infecteds, 'CLASSIFICACAO_CASO', DimensaoClassificacaoCasoInfectado);
};

export const populateCodigoInfectado = async (infecteds) => {
  await populate(infecteds, 'CODIGO', DimensaoCodigoInfectado);
};

export const populateComorbidadeInfectado = async (infecteds) => {
  await populate(infecteds, 'COMORBIDADE', DimensaoComorbidadeInfectado);
};

export const populateDataInfectado = async (infecteds) => {
  const datas1 = await getUniques(infecteds, 'DATA_NOTIFICACAO');
  const datas2 = await getUniques(infecteds, 'DATA_EVOLUCAO');
  const datas3 = await getUniques(infecteds, 'DATA_1_SINTOMA');
  const datas4 = await getUniques(infecteds, 'DATA_ATUALIZACAO');
  
  const allDatas = [...datas1, ...datas2, ...datas3, ...datas4];
  const datas = [... new Set(allDatas)];
  
  await Promise.all(
    datas.forEach(
      async data => await DimensaoDataInfectado.create(
        { 
          rotulo: data 
        }
      )
    )
  );
};

export const populateEtniaInfectado = async (infecteds) => {
  await populate(infecteds, 'ETNIA', DimensaoEtniaInfectado);
};

export const populateEvolucaoInfectado = async (infecteds) => {
  await populate(infecteds, 'EVOLUCAO', DimensaoEvolucaoInfectado);
};

export const populateFaixaEtariaInfectado = async (infecteds) => {
  await populate(infecteds, 'FAIXA_ETARIA', DimensaoFaixaEtariaInfectado);
};

export const populateIdadeInfectado = async (infecteds) => {
  await populate(infecteds, 'IDADE', DimensaoIdadeInfectado);
};

export const populateInternacaoInfectado = async (infecteds) => {
  await populate(infecteds, 'INTERNACAO', DimensaoInternacaoInfectado);
};

export const populateMacroInfectado = async (infecteds) => {
  await populate(infecteds, 'MACRO', DimensaoMacroInfectado);
};

export const populateMicroInfectado = async (infecteds) => {
  await populate(infecteds, 'MICRO', DimensaoMicroInfectado);
};

export const populateMunicipioResidenciaInfectado = async (infecteds) => {
  await populate(infecteds, 'MUNICIPIO_RESIDENCIA', DimensaoMunicipioResidenciaInfectado);
};

export const populateOrigemDaInformacaoInfectado = async (infecteds) => {
  await populate(infecteds, 'ORIGEM_DA_INFORMACAO', DimensaoOrigemDaInformacaoInfectado);
};

export const populateRacaInfectado = async (infecteds) => {
  await populate(infecteds, 'RACA', DimensaoRacaInfectado);
};

export const populateSexoInfectado = async (infecteds) => {
  await populate(infecteds, 'SEXO', DimensaoSexoInfectado);
};

export const populateURSInfectado = async (infecteds) => {
  await populate(infecteds, 'URS', DimensaoURSInfectado);
};

export const populateUTIInfectado = async (infecteds) => {
  await populate(infecteds, 'UTI', DimensaoUTIInfectado);
};