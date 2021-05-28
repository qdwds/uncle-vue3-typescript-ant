<template>
    <div class="header_icon" @click="openGithub">
        <GithubOutlined />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GithubOutlined } from "@ant-design/icons-vue";

export default defineComponent({
    components: {
        GithubOutlined,
    },
    setup() {
        const openGithub = () => {
            window.open("http://www.baidu.com", "_blank");
        };
        return {
            openGithub,
        };
    },
});
</script>


<style lang="less" scoped>
@import "@/styles/header.less";
</style>