import axios from "axios";
import type {
    AxiosRequestConfig, //  请求
    AxiosResponse,      //  响应
} from "axios";
import { baseURL } from "@/utils/env";
console.log(baseURL);

import { requestStatusCode } from "./status";

const instance = axios.create({
    timeout: 3000,
    baseURL: baseURL as any
})

instance.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
        // const token = window.localStorage.getItem("token");
        // if (token) {
        //     
        // }
        return config
    },
    (error: any): any => {
        return Promise.reject(error)
    }
)


instance.interceptors.response.use(
    (response: AxiosResponse<any>): AxiosResponse<any> => {
        return response.data
    },
    (error: any): any => {
        try {
            const { response } = error || {};
            requestStatusCode(response?.status);
        } catch (error) {
            return Promise.reject(error);
        }
    }

)

export default instance