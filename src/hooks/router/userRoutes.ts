import type { RouteRecordRaw } from "vue-router";
/**
 * 过滤路由
 * @param routes 
 * @returns RouteRecordRaw[]
 */
export const userFilterRoutes = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
    return routes.filter((r) =>
        r.name !== "Root" &&
        r.name !== "Error" &&
        r.name !== "Login" && 
        r.name !== "Login"
    );
}


