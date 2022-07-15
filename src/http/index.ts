import axios from 'axios'

export const API_URL = 'http://localhost:5050/api/v1'

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: { 'crossDomain': true },
});

$api.interceptors.request.use( req => {
    if (req?.headers !== undefined)
    {
        req.headers.authorisation =  `Bearer ${localStorage.getItem('token')}`;
    }

    return req;
});

$api.interceptors.response.use( res => {
    return res;
});

export default $api;