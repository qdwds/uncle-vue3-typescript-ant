<template>
    <div>
        <Drag></Drag>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Drag from "@/components/Drag/index.vue";
export default defineComponent({
    components:{
        Drag
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>