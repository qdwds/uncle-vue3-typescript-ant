import { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";
const three:AppRouteModule = {
    name:"Three",
    path:"/three",
    component:LAYOUT,
    redirect:"/three/3d",
    meta:{
        title:"three",
        orderNo:2
    },
    children:[
        {
            name:"3d",
            path:"3d",
            component:()=>import("@/views/three/3d/index.vue"),
            meta:{
                title:"3d"
            },
        },
        {
            name:"Block",
            path:"block",
            component:()=>import("@/views/three/block/index.vue"),
            meta:{
                title:"方块"
            },
        },
        {
            name:"QuadraticElement",
            path:"quadraticElement",
            component:()=>import("@/views/three/quadraticElement/index.vue"),
            meta:{
                title:"二次元"
            },
        },
    ]
}
export default three;
