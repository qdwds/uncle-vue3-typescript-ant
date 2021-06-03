/*
 * @Description: 
 * @Author: 前端伪大叔
 * @Date: 2021-06-03 10:09:27
 * @LastEditTime: 2021-06-03 22:08:10
 * @yuque: http://www.yuque.com/qdwds
 */
import request from "@/utils/http";

//  文件上传
export const apiUploadFile = (formdata: FormData) => {
    return request({
        url: "/upload/file",
        method: "POST",
        data: formdata
    })
}

//  多文件上传
export const apiUploadFiles = (formdata: FormData) => {
    return request({
        url: "/upload/files",
        method: "POST",
        data: formdata
    })
}

//  文件夹上传
export const apiUploadFolder = (formdata: FormData) => {
    return request({
        url: "/upload/folder",
        method: "POST",
        data: formdata,
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}


//  大文件上传
export const apiUploadMaxFile = (formdata: FormData) => {
    return request({
        url: "/upload/max_file",
        method: "POST",
        data: formdata
    })
}

//  合并大文件切片
export const apiMergeMaxFile = (filename:Object) => {
    return request({
        url: "/upload/max_merge",
        method: "POST",
        data:filename
    })
}