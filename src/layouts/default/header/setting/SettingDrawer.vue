<template>
    <a-drawer
        placement="right"
        closable
        keyboard
        :visible="settingDrawerShow"
        @close="afterVisibleChange"
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        settingDrawerShow: Boolean,
    },
    emits: ["changeSettingDrawer"],
    setup(_, ctx) {
        const afterVisibleChange = () => {
            ctx.emit("changeSettingDrawer", false);
        };

        return {
            afterVisibleChange,
        };
    },
});
</script>

<style scoped>
</style>