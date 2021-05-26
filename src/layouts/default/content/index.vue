<template>
    <LayoutContent>
        <Card  id="card">
            <Page ></Page>
        </Card>
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
::v-deep .ant-card-body{
    height: calc(100vh - 58px);
    padding: 0px;
    margin: 0px;
}
.ant-layout-content{
    background: #ccc;
}
.ant-card{
    margin: 4px;
    overflow: hidden;
}
</style>