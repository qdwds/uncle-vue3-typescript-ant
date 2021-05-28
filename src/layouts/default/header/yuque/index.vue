<template>
    <div class="header_icon" @click="openYuque">
        <YuqueOutlined />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { YuqueOutlined } from "@ant-design/icons-vue";
export default defineComponent({
    components:{
        YuqueOutlined
    },
    setup () {
        const openYuque = ()=>{
            window.open("http://www.yuque.com/qdwds", "_blank");
        }
        return {
            openYuque
        }
    }
})
</script>
<style lang="less" scoped>
@import "@/styles/header.less";
</style>