import axios from 'axios';

const API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:42069/api' : '/api';
axios.defaults.withCredentials = true;

const get = async <T>(apiRoute: string): Promise<T> => {
    try {
        const response = await axios.get(`${API_BASE_URL}${apiRoute}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const post = async <T, U>(apiRoute: string, data: U): Promise<T> => {
    try {
        const response = await axios.post(`${API_BASE_URL}${apiRoute}`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

const put = async <T, U>(apiRoute: string, data: U): Promise<T> => {
    try {
        const response = await axios.put(`${API_BASE_URL}${apiRoute}`, data);
        return response.data;
    } catch (error) {
        console.error('Error putting data:', error);
        throw error;
    }
};

const del = async <T>(apiRoute: string): Promise<T> => {
    try {
        const response = await axios.delete(`${API_BASE_URL}${apiRoute}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};

export { get, post, put, del };
