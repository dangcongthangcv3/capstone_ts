import axios from "axios"
import {history} from '../index'

export const TOKEN_CYBERSOFT =   `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MyIsIkhldEhhblN0cmluZyI6IjI0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMDc4NDAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNzAwOTMxNjAwfQ.CnONd8cRnUWM4v5GIMD0mazwJUj4QugQ31-2UBFPlsw`
export const DOMAIN = 'https://jiranew.cybersoft.edu.vn'
export const TOKEN = 'accessToken'
export const USER_LOGIN = 'userLogin'

export const {getStoreJson, setStoreJson, getStore, setStore}= {
    getStoreJson: (name:string) : any =>{
        if(localStorage.getItem(name)){
            const strResult: string|null|any = localStorage.getItem(name);
            return JSON.parse(strResult)
        }return undefined;
    },
    setStoreJson:(name:string, data:any): void =>{
        const strJson = JSON.stringify(data)
        return localStorage.setItem(name, strJson)
    },
    getStore:(name:string):string|null =>{
        return localStorage.getItem(name)
    },
    setStore:(name:string, data:string) :void =>{
        localStorage.setItem(name,data)
    }
}

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})
export const httpNonAuth = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})

httpNonAuth.interceptors.request.use((config:any) => {
    config.baseURL = DOMAIN;
    config.headers = {...config.headers}
    config.headers.tokenCybersoft = `TOKEN_CYBERSOFT`;
    return config
},err => {
    return Promise.reject(err)
});


http.interceptors.request.use((config:any) => {
    config.headers = {...config.headers}
    let token = getStoreJson(USER_LOGIN)?.accessToken;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.tokenCybersoft = `TOKEN_CYBERSOFT`;
    return config
},err => {
    return Promise.reject(err)
});



//Cấu hình cho response (kết quả trả về từ api)
http.interceptors.response.use((res)=>{ 
    return res;
},(err)=> {
    //Xử lý lỗi cho api bị lỗi theo status code 
    console.log(err);
    if(err.response?.status === 401) {
        alert('Đăng nhập để vào trang này !');
        history.push('/login');
    }
    return Promise.reject(err);
});
