<template>
    <Layout id="layout">
        <Menu></Menu>
        <Layout>
            <Header></Header>
            <Content></Content>
        </Layout>
    </Layout>
</template>
<script lang="ts">
import Menu from "./menu/index.vue";
import Header from "./header/index.vue";
import Content from "./content/index.vue";
import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";
export default defineComponent({
    components: {
        Menu,
        Header,
        Content,
        Layout,
    },
    setup() {
        return {
        };
    },
});
</script>
<style lang="less" scoped>
#layout{
    min-height: 100vh;
    display: flex;
}
</style>