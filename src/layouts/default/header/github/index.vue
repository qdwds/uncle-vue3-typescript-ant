<template>
    <div class="header_icon" @click="openGithub">
        <GithubOutlined />
    </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import { GithubOutlined } from "@ant-design/icons-vue";
const openGithub = () =>{
    window.open("http://www.baidu.com","_blank")
}
</script>

<style lang="less" scoped>
@import "@/styles/header.less";
</style>