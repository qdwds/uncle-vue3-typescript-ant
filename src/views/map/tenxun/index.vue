<template>
    <div id="tenxun"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useCreaeScript } from "@/hooks/web/useScript";
export default defineComponent({
    setup() {

        onMounted(() => {
            var myLatlng = new qq.maps.LatLng(39.90923, 116.397428);
            var myOptions = {
                zoom: 8,
                center: myLatlng,
                mapTypeId: qq.maps.MapTypeId.ROADMAP,
            };
            var map = new qq.maps.Map(
                document.getElementById("tenxun"),
                myOptions
            );
        });

        return {};
    },
});
</script>

<style scoped>
#tenxun {
    width: 100%;
    height: 100%;
}
</style>