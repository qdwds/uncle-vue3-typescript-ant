<template>
    <div class="page" ref="windowRef">
        <RouterView>
            <template #default="{ Component, route }">
                <transition name="zoom-fade" mode="out-in" appear>
                    <!-- <keep-alive>
                        <component></component>
                    </keep-alive> -->
                    <component
                        :is="Component"
                        :key="route.fullPath"
                    ></component>
                </transition>
            </template>
        </RouterView>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useWinStoreModule } from "@/hooks/web/useWin";
export default defineComponent({
    setup() {
        const { setWindowSize } = useWinStoreModule();
        const windowRef = ref<Element | null>(null);

        //  获取page 窗口大小
        const handlePageResize = () => {
            if (windowRef.value) {
                setWindowSize({
                    width: parseInt(
                        window.getComputedStyle(windowRef.value).width
                    ),
                    height: parseInt(
                        window.getComputedStyle(windowRef.value).height
                    ),
                });
            }
        };
        //  窗口切换
        window.addEventListener("resize", handlePageResize);

        onMounted(() => {
            handlePageResize();
        });

        return { windowRef };
    },
});
</script>

<style lang="less" scoped>
@import "@/styles/transform.less";
.page {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>