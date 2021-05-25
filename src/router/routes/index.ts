import { AppRouteModule } from "../types";
const modules = import.meta.globEager("./modules/**/*.ts");
import { NOT_FOUND_ROUTE ,login } from "./basic";

const routeModuleList: AppRouteModule[] = [];
/**
 * Dashboard    1
 * Three        2
 * Echarts      3
 * About        9
 */
Object.keys(modules).forEach(key => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList)
});

//  根目录
const RootRoute: AppRouteModule = {
    path: "/",
    name: "Root",
    redirect: "/login",
}

export const asyncRoutes = [...routeModuleList];

//  生成最后的路由
export const routes = [
    RootRoute,
    ...routeModuleList,
    NOT_FOUND_ROUTE,
    login
];
