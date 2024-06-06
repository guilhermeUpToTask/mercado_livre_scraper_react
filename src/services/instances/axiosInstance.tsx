import axios from "axios";

const BACK_END_URL = process.env.NODE_ENV === "development" ?
    'http://127.0.0.1:8000/' :
    'https://mercado-livre-scraper-api-hpdoeei6fq-uc.a.run.app/'

console.log('location ' + BACK_END_URL);

const axiosInstance = axios.create({
    baseURL: BACK_END_URL,
});


export default axiosInstance;