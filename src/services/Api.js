import axios from 'axios';

const baseURL = 'http://localhost:3000'

export const getBaseColors = async () => {
    const response =  await axios.get(`${baseURL}/colors`);
    return response.data
}

export const getColors = async (id) => {
    const response =  await axios.get(`${baseURL}/colors/${id}/extended`);
    return response.data
}

export const addBaseColor = async (value) => {
    return await axios.post(`${baseURL}/colors`, {"name": value});
}

export const addExtendedColor = async (id, body) => {
    return await axios.post(`${baseURL}/colors/${id}/extended`, body);
}

export const removeBaseColor = async (id) => {
    return await axios.delete(`${baseURL}/colors/${id}`);
}

export const removeExtendedColor = async (id, colorID) => {
    return await axios.delete(`${baseURL}/colors/${id}/extended/${colorID}`);
}