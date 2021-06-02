import request from "@/utils/http";

export const apiUploadFile = (data:FormData) => {
    return request({
        url: "/upload/file",
        method: "POST",
        data
    })
}