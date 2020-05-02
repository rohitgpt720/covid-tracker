import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchingData = async (country) => {
  
  let changeableURL = url;

  if(country){
    changeableURL = `${url}/countries/${country}`;
  }
  
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableURL);
    const modifiedData = { confirmed, recovered, deaths, lastUpdate };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
}

export const fetchCountries = async () => {
  try {
    const {data: { countries }} = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name)
  } catch (error) {
    console.log(error)
  }
}