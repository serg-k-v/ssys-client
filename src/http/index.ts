import axios from 'axios'

export const API_URL = 'http//localhost:5000/api/v1'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use( req => {
    if (req?.headers !== undefined)
    {
        req.headers.authorisation =  `Bearer ${localStorage.getItem('token')}`;
    }

    return req;
});

export default $api;