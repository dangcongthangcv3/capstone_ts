import axios from "axios"
import { history } from '../index'
import { openNotification } from "./notification"

export const TOKEN_CYBERSOFT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M`
export const AUTHORIZATION  = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJjaHVoZW5ndW9pbWF5QGdtYWlsLmNvbSIsIm5iZiI6MTY5MDM5NDkwNCwiZXhwIjoxNjkwMzk4NTA0fQ.HY9Vu0uCq0v5A07Iq764O9n2PHWnDL2dyl-45ilq4ak'
export const DOMAIN = 'https://jiranew.cybersoft.edu.vn'
export const TOKEN = 'accessToken'
export const USER_LOGIN = 'userLogin'

export const { getStoreJson, setStoreJson, getStore, setStore } = {
    getStoreJson: (name: string): any => {
        if (localStorage.getItem(name)) {
            const strResult: string | null | any = localStorage.getItem(name);
            return JSON.parse(strResult)
        } return undefined;
    },
    setStoreJson: (name: string, data: any): void => {
        const strJson = JSON.stringify(data)
        return localStorage.setItem(name, strJson)
    },
    getStore: (name: string): string | null => {
        return localStorage.getItem(name)
    },
    setStore: (name: string, data: string |any): void => {
        localStorage.setItem(name, data)
    },
}
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})
export const httpNonAuth = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})

httpNonAuth.interceptors.request.use((config: any) => {
    config.baseURL = DOMAIN;
    config.headers = { ...config.headers }
    config.headers.tokenCybersoft = `TOKEN_CYBERSOFT`;
    return config
}, err => {
    return Promise.reject(err)
});


http.interceptors.request.use((config: any) => {
    config.headers = { ...config.headers }
    let token = getStoreJson(USER_LOGIN)?.accessToken;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.tokenCybersoft = 'TOKEN_CYBERSOFT';
    return config
}, err => {
    return Promise.reject(err)
});



//Cấu hình cho response (kết quả trả về từ api)
http.interceptors.response.use((res) => {
    return res;
}, (err) => {
    //Xử lý lỗi cho api bị lỗi theo status code 
    console.log(err);
    if (err.response?.status === 401 ) {
        openNotification('info','','vui lòng đăng nhập')
        history.push('/login');
    }
    if ( err.response?.status === 400) {
        openNotification('info','','Không thành công')
    }
    return Promise.reject(err);
});
