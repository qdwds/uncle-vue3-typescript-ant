import instance from "@/utils/http";



export const apiUploadFile = (data:FormData) => {
    return instance({
        url: "/upload/file",
        method: "POST",
        data
       
    })
}