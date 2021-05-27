<template>
    <LayoutHeader id="header">
        <div class="header_left">
            <Breadcrumb></Breadcrumb>
        </div>

        <div class="header_right">
            <Yuque></Yuque>
            <Github></Github>
            <LockScreen></LockScreen>
            <FullScreen></FullScreen>
            <Setting></Setting>
            <UserInfo></UserInfo>
        </div>
    </LayoutHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";
import Setting from "./setting/index.vue";
import Breadcrumb from "./breadcrumb/index.vue";
import FullScreen from "./fullScreen/index.vue";
import UserInfo from "./userInfo/index.vue";
import Github from "./github/index.vue";
import LockScreen from "./lockScreen/index.vue";
import Yuque from "./yuque/index.vue";
export default defineComponent({
    components: {
        LayoutHeader: Layout.Header,
        Setting,
        Breadcrumb,
        FullScreen,
        UserInfo,
        Github,
        LockScreen,
        Yuque,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
#header {
    height: 48px;
    overflow: hidden;
    background: #fff;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 1px;
    .header_left {
        width: 220px;
    }
    .header_right {
        width: 280px;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
}
</style>