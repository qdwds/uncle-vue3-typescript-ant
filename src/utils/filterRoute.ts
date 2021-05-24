import { useRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const router = useRouter();
//  转移到hooks
/**
 * 过滤路由
 * @param routes 
 * @returns 
 */
export const getRoutes = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
    return routes.filter((r) =>
        r.name !== "Root" &&
        r.name !== "Error" &&
        r.name !== "Login"
    );
}


