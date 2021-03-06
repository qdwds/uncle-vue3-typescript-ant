/*
 * @Description: axios 封装
 * @Author: 前端伪大叔
 * @Date: 2021-06-02 21:01:54
 * @LastEditTime: 2021-06-03 16:51:04
 * @yuque: http://www.yuque.com/qdwds
 */

import axios, { AxiosError } from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { baseURL } from "@/utils/env";
import { responseStatusCode } from "./status";
import { uploadProgress } from "./progress";
import { isFormData } from "../validateType";
const request = axios.create({
    // timeout: 10000,
    baseURL: baseURL 
})

request.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
        if(isFormData(config.data)){
            uploadProgress(config)
        }
        return config
    },
    (error: any): any => {
        return Promise.reject(error)
    }
)


request.interceptors.response.use(
    (response: AxiosResponse<AxiosResponse>): AxiosResponse<AxiosResponse> => {
        return response.data
    },
    (error: AxiosError): any => {
        if (error && error.response) {
            responseStatusCode(error.response?.status);
        } else {
            return Promise.reject(error);
        }
    }
)

export default request