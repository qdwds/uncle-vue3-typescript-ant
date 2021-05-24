<template>
    <LayoutHeader id="header">

        <div class="header_left">
            <Breadcrumb></Breadcrumb>
        </div>

        <div class="header_right">
            <FullScreen></FullScreen>
            <User></User>
            <Setting></Setting>
        </div>
    </LayoutHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";
import Setting from "./setting/index.vue";
import Breadcrumb from "./breadcrumb/index.vue";
import FullScreen from "./FullScreen/index.vue";
import User from "./user/index.vue";
export default defineComponent({
    components: {
        LayoutHeader: Layout.Header,
        Setting,
        Breadcrumb,
        FullScreen,
        User,
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
    .header_left {
        width: 220px;
    }
    .header_right {
        width: 180px;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
}
</style>