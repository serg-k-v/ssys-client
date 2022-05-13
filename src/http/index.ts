import axios from 'axios'

export const API_URL = 'http//localhost:5000/api/v1'

const $api = axios.create({
    withCredetioals: true,
    daseURL: API_URL,
})

$api.interceprors.request.use( (config) => {
    config.headers.Authorisation = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;