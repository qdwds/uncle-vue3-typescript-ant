<template>
    <div class="header_icon" @click="toggleFullScreen">
        <CompressOutlined />
    </div>
</template>

<script lang="ts" >
import { CompressOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
    components: {
        CompressOutlined,
    },
    setup() {
        //  切换全屏
        const toggleFullScreen = () => {
            const fullScreen = ref<Boolean>(false);
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                fullScreen.value = false;
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    fullScreen.value = true;
                }
            }
        };
        return {
            toggleFullScreen,
        };
    },
});
</script>

<style lang="less" scoped>
@import url("@/styles/header.less");
</style>