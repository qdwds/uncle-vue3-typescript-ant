import instance from "@/utils/http";



export const getRoutes = () => {
    return instance({
        url: "/user",
        method: "GET",
       
    })
}