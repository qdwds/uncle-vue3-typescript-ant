import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from "./router";
import { setupStore } from "./store";
import { setupRouterGuard } from "./router/guards";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "./styles/index.less";
import  "@/hooks/web/useStats";


(async () => {
    const app = createApp(App);
    app.use(Antd)

    setupRouter(app);

    setupRouterGuard()
    
    setupStore(app);

    await router.isReady();
    
    app.mount('#app', true);
})()