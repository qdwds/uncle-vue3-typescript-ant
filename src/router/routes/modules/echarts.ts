import type { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";

const echarts:AppRouteModule = {
    name:"Echarts",
    path:"/echarts",
    component:LAYOUT,
    meta:{
        title:"echart",
        orderNo:3
    },
    children:[
        {
            name:"EchartMap",
            path:"echartmap",
            component:()=>import("@/views/echarts/echartMap/index.vue"),
            meta:{
                title:"地图"
            }
        },
        {
            name:"BrokenLine",
            path:"brokenLine",
            component:()=>import("@/views/echarts/brokenLine/index.vue"),
            meta:{
                title:"折线图"
            }
        },
    ]
}

export default echarts;