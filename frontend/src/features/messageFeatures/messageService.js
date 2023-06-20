import axios from 'axios';
const API_URL = '/api/message/';

const getMessage = async() => {
    const response = await axios.get(API_URL);
    return response.data;
}

const addressService = {
    getMessage
}

export default addressService;