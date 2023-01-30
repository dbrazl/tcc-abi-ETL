import Papa from 'papaparse';
import { URLs } from "../config/url";

const fetchData = async url => {
  try {
    const response = await fetch(url);
    const data = response.text();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getData = async urls => {
  const response = await Promise.all(
    urls.map(
      async url => fetchData(url)
    ),
  );
  
  return response;
};

export const getInfectedData = async () => {
  const urls = Object.values(URLs.infecteds);
  const texts = await getData(urls);
  return texts.map(text => Papa.parse(text, { delimiter: ";" }));;
};

export const getDeathData = async () => {
  const urls = Object.values(URLs.deaths);
  const texts = await getData(urls);
  return texts.map(text => Papa.parse(text, { delimiter: ";" }));
};