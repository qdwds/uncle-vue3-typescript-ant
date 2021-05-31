<template>
    <div class="about">
        <p ref="dragRef"></p>
    </div>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted, defineComponent, ref } from "vue";
import useMove from "@/hooks/web/useMove";
console.log(useMove);

export default defineComponent({
    name: "about",
    setup() {
        const data = reactive({});
        const dragRef = ref<HTMLElement | null>(null);
        onMounted(() => {
            console.log(dragRef.value);

            if (dragRef.value) {
                useMove(dragRef.value);
            }
        });

        const datas = toRefs(data);
        return {
            ...datas,
            dragRef
        };
    },
});
</script>
<style scoped>
.about {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
p {
    width: 100px;
    height: 100px;
    background: pink;
    margin: 0;
}
</style>