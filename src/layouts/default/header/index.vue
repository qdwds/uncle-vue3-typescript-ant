<template>
    <LayoutHeader id="header"> 
       header
    </LayoutHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";
export default defineComponent({
    components: {
        LayoutHeader: Layout.Header,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped>
#header{
    height: 48px;
    overflow: hidden;
    background: #fff;
    padding: 0 12px;
}
</style>