<template>
    <div class="header_icon" @click="handleLockScreen">
        <LockOutlined />
    </div>
    <LockScreenDialog ></LockScreenDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { LockOutlined } from "@ant-design/icons-vue";
import LockScreenDialog from "./lockScreenDialog/index.vue";
import { useAppStoreModule } from "@/hooks/web/useApp";
export default defineComponent({
    components: {
        LockOutlined,
        LockScreenDialog,
    },
    setup() {
        const locking = ref<Boolean>(false);
        const {setUnlocking} = useAppStoreModule();
        const handleLockScreen = () => {
            setUnlocking(true)
            
        };
        return {
            handleLockScreen,
            locking,
        };
    },
});
</script>

<style lang="less" scoped>
@import "@/styles/header.less";
</style>