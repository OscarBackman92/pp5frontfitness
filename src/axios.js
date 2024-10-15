import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fitnessapi-d773a1148384.herokuapp.com/',
});

export default instance;
