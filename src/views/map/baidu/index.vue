<!--
 * @Description: 
 * @Author: 前端伪大叔
 * @Date: 2021-05-31 10:29:25
 * @LastEditTime: 2021-06-03 15:19:23
 * @yuque: http://www.yuque.com/qdwds
-->
<template>
    <div ref="baiduRef" id="baidu"></div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, unref } from "vue";
import { useCreaeScript } from "@/hooks/web/useScript";
export default defineComponent({
    setup() {
        const { createScriptPromise } = useCreaeScript(
            "http://api.map.baidu.com/api?v=3.0&ak=5vadibFVgP5CfcPhheyVkVEDlLTXXawB"
        );
        // createScriptPromise();

        // onMounted(() => {

        //   const win: Window = window;
        //   console.log(win.BMap);
        //     const map = new win.BMap.Map();
        //     const point = new win.BMap.Point(116.404, 39.915);
        //     map.centerAndZoom(point, 15);
        //     map.enableScrollWheelZoom(true);
        // });



        //  userScript 有问题
        const baiduRef = ref<HTMLDivElement | null>(null);
        async function initMap() {
            await createScriptPromise();
            await nextTick();
            const BMap = (window as any).BMap;
            const map = new BMap.Map("baidu");
            const point = new BMap.Point(116.404, 39.915);
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom(true);
        }

        onMounted(() => {
            initMap();
        });
        return {
            baiduRef,
        };
    },
});
</script>

<style lang="less" scoped>
#baidu {
    width: 100%;
    height: 100%;
}
</style>