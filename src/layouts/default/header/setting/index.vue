<template>
    <div class="header_icon" @click="changeSettingDrawer">
        <SettingOutlined/>
        <SettingDrawer
            @changeSettingDrawer="changeSettingDrawer"
            :settingDrawerShow="settingDrawerShow"
        ></SettingDrawer>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SettingOutlined } from "@ant-design/icons-vue";
import SettingDrawer from "./SettingDrawer.vue";
export default defineComponent({
    components: {
        SettingOutlined,
        SettingDrawer,
    },
    setup() {
        //  drawer 显示转态
        const settingDrawerShow = ref<Boolean>(false);
        const changeSettingDrawer = (): void => {
            settingDrawerShow.value = !settingDrawerShow.value;
        };

        return {
            settingDrawerShow,
            changeSettingDrawer,
        };
    },
});
</script>

<style lang="less" scoped>
@import url("@/styles/header.less");
</style>