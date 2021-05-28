import { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";

const fun :AppRouteModule = {
    name:"Fun",
    path:"/fun",
    component:LAYOUT,
    redirect:"/fun/copy",
    meta:{
        title:"功能",
        orderNo:4
    },
    children:[
        {
            name:"Copy",
            path:"copy",
            component:()=>import("@/views/fun/copy/index.vue"),
            meta:{
                title:"剪切板"
            }
        },
        {
            name:"Upload",
            path:"upload",
            component:()=>import("@/views/fun/upload/index.vue"),
            meta:{
                title:"文件上传"
            }
        },
        {
            name:"Download",
            path:"download",
            component:()=>import("@/views/fun/download/index.vue"),
            meta:{
                title:"文件下载"
            }
        }
    ]
}
export default fun;