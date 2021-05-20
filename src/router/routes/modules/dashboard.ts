import type { AppRouteModule } from "@/router/types";
import { LAYOUT } from "../basic";
const dashboard: AppRouteModule = {
    name: "Dashboard",
    path: "/dashboard",
    redirect: "/dashboard/workbench",
    component: LAYOUT,
    meta: {
        title: "Dashboard",
        orderNo:1
    },
    children: [
        {
            path: "workbench",
            name: "Workbench",
            component: () => import("@/views/dashboard/workbench/index.vue"),
            meta: {
                title: "workbench",
            }
        },
        {
            path: "workbench1",
            name: "Workbench1",
            component: () => import("@/views/dashboard/workbench/index.vue"),
            meta: {
                title: "workbench1"
            },

        },

    ]
}
export default dashboard;