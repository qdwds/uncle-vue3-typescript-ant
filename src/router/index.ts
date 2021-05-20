import { createRouter ,createWebHashHistory} from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
import type { App } from "vue";
import { routes } from "./routes/index";

const router = createRouter({
    history:createWebHashHistory("/"),
    routes:(routes as unknown) as RouteRecordRaw[]
})

export const setupRouter = (app:App<Element>) =>{
    app.use(router);
}

export default router;