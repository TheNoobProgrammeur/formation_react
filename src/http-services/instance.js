import axios from 'axios';
export const instance = axios.create({
    baseURL: "https://restcountries.eu/rest/v2"
});