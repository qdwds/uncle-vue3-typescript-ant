import type { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";

const webrtc:AppRouteModule = {
    path: "/webrtc",
    name: "Webrtc",
    redirect: "/webrtc/video",
    component: LAYOUT,
    meta: {
        title: "webrtc",
        orderNo: 6
    },
    children:[
        {
            path:"video",
            name:"Video",
            component:()=>import("@/views/webrtc/video/index.vue"),
            meta:{
                title:"video"
            }
        },
        {
            path:"audio",
            name:"Audio",
            component:()=>import("@/views/webrtc/audio/index.vue"),
            meta:{
                title:"audio"
            }
        },
        {
            path:"share",
            name:"Share",
            component:()=>import("@/views/webrtc/share/index.vue"),
            meta:{
                title:"桌面共享"
            }
        }
    ]
}
export default webrtc;