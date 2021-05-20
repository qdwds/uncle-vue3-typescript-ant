import type { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";

const about:AppRouteModule = {
    name:"about",
    path:"/about",
    component:LAYOUT,
    redirect: '/about/index',
    meta:{
        title:"1",
        orderNo:9
    },
    children:[
        {
            name:"about",
            path:"index",
            component:()=>import("@/views/about/index.vue"),
            meta:{
                title:"about"
            }
        }
    ]
}
export default about