import type { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";


const map: AppRouteModule = {
    name: "Map",
    path: "/map",
    redirect: "/map/baidu",
    component: LAYOUT,
    meta: {
        title: "地图",
        orderNo: 5
    },
    children:[
        {
            path:"baidu",
            name:"Baidu",
            component:()=>import("@/views/map/baidu/index.vue"),
            meta:{
                title:"百度地图"
            }
        },
        {
            path:"tenxun",
            name:"Tenxun",
            component:()=>import("@/views/map/tenxun/index.vue"),
            meta:{
                title:"腾讯地图"
            }
        },
        {
            path:"gaode",
            name:"Gaode",
            component:()=>import("@/views/map/gaode/index.vue"),
            meta:{
                title:"高德地图"
            }
        },
        {
            path:"google",
            name:"Google",
            component:()=>import("@/views/map/google/index.vue"),
            meta:{
                title:"谷歌地图"
            }
        },
    ]
}

export default map;