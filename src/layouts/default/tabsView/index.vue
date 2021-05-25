<template>
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card">
        <a-tab-pane key="1" tab="Tab 1"></a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2"></a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3"></a-tab-pane>
    </a-tabs>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { defineComponent, reactive } from "vue";

export default defineComponent({
    setup() {
        const route = useRoute();
        const state = reactive({
            activeKey: route.fullPath,
        });

        return {
            state,
        };
    },
});
</script>

<style scoped>
</style>