import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from "./router";
import { setupStore } from "./store";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "./styles/index.less";



(async () => {
    const app = createApp(App);
    app.use(Antd)

    setupRouter(app);

    setupStore(app);

    await router.isReady();
    
    app.mount('#app', true);
})()