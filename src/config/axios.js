import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://carta-restaurante.herokuapp.com/'
});

export default clienteAxios;