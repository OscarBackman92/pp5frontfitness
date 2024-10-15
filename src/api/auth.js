import axios from 'axios';

const API_URL = 'https://fitnessapi-d773a1148384.herokuapp.com/';

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}login/`, credentials);
    return response.data;
};

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}register/`, userData);
    return response.data;
};

export const logout = async () => {
    const response = await axios.post(`${API_URL}logout/`);
    return response.data;
};
