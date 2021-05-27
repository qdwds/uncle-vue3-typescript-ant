import { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";
const three:AppRouteModule = {
    name:"Three",
    path:"/three",
    component:LAYOUT,
    redirect:"/three/3d",
    meta:{
        title:"Three.js",
        orderNo:2
    },
    children:[
        {
            name:"Vr",
            path:"vr",
            component:()=>import("@/views/three/vr/index.vue"),
            meta:{
                title:"VR 瞅瞅"
            },
        },
        {
            name:"Block",
            path:"block",
            component:()=>import("@/views/three/block/index.vue"),
            meta:{
                title:"悬浮的箱子"
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
