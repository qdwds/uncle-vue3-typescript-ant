<template>
    <LayoutContent>
        <div  id="card">
            <Page ></Page>
        </div>
    </LayoutContent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout, Card } from "ant-design-vue";
import Page from "@/layouts/page/index.vue";
export default defineComponent({
    components: {
        LayoutContent: Layout.Content,
        Card,
        Page,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
 #card {
    height: calc(100vh - 51px);
    width: 100%;
    padding: 0px;
    margin: 0px;
    background: white;
}
.ant-layout-content{
    background: #ccc;
}
.ant-card{
    margin: 0;
    overflow: hidden;
}
</style>