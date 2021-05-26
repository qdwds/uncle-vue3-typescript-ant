<template>
    <div class="page" ref="pageRef">
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
        const { setPageDom } = useWinStoreModule();
        const pageRef = ref<Element | null>(null);

        //  获取page 窗口大小
        const handlePageResize = () => {
            if (pageRef.value) {
                setPageDom({
                    width: parseInt(
                        window.getComputedStyle(pageRef.value).width
                    ),
                    height: parseInt(
                        window.getComputedStyle(pageRef.value).height
                    ),
                });
            }
        };
        //  窗口切换
        window.addEventListener("resize", handlePageResize);

        onMounted(() => {
            handlePageResize();
        });

        return { pageRef };
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