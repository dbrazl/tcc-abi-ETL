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

export const getInfectedData = async () => {
  const urls = Object.values(URLs.infecteds);

  const response = await Promise.all(
    urls.map(
      async url => fetchData(url)
    ),
  );
  
  return response;
};