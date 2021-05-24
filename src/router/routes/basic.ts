import type { AppRouteModule } from "@/router/types";

//  布局
export const LAYOUT = () => import("@/layouts/default/index.vue");


//  404
export const NOT_FOUND_ROUTE: AppRouteModule = {
    path:"/:path(.*)*",
    name:"Error",
    component:LAYOUT,
    children:[
        {
            path:"/:path(.*)*",
            name:"error",
            component:() => import("@/layouts/error/index.vue")
        }
    ]
}

//  登录
export const login :AppRouteModule = {
    path:"/login",
    name:"Login",
    component:()=>import("@/layouts/login/index.vue")
}