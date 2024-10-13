import axios from 'axios';
import { BASE_URL } from '../Constants/Constants';

// Create an Axios instance for reusable configuration
const api = axios.create({
    baseURL: BASE_URL, //  API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// GET request function
export const getData = async (endpoint, params = {}) => {
    try {
        const response = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// POST request function
export const postData = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// PUT request function
export const putData = async (endpoint, data) => {
    try {
        const response = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// DELETE request function
export const deleteData = async (endpoint) => {
    try {
        const response = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Handle errors
const handleError = (error) => {
    console.error('API Error: ', error.response || error.message);
    throw error;
};
