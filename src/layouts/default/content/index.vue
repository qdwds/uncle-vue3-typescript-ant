<template>
    <LayoutContent>
        <Card bordered id="card">
            <Page></Page>
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

<style scoped>
#card {
    height: calc(100vh - 72px);
}
</style>