<template>
    <div class="page">
        <RouterView>
        <template #default="{ Component, route }">
            <transition name="zoom-fade" mode="out-in" appear>
                <!-- <keep-alive>
                        <component></component>
                    </keep-alive> -->
                <component :is="Component" :key="route.fullPath"></component>
            </transition>
        </template>
    </RouterView>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
@import "@/styles/transform.less";
.page{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>