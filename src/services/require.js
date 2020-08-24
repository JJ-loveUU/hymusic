import axios from 'axios';

import { BASE_URL, TIME_OUT } from './config';


const instance1 = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})


instance1.interceptors.request.use((config) => {
    return config;
}, err => {
    console.log(err);
})



instance1.interceptors.response.use(res => {
    return res.data;
}, err => {

    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log("请求错误");
                break;
            case 401:
                console.log("未授权");
                break;
            default:
                console.log("其他错误");
        }
    }
})


export default instance1




