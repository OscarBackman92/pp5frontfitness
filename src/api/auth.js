import axios from 'axios';

const API_URL = 'https://fitnessapi-d773a1148384.herokuapp.com/api/auth/';

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}api/auth/login/`, credentials);
    return response.data;
};

export const register = async (data) => {
    const response = await axios.post('https://fitnessapi-d773a1148384.herokuapp.com/api/auth/register/', data);
    return response.data;
};

export const logout = async () => {
    const response = await axios.post(`${API_URL}api/auth/logout/`);
    return response.data;
};
