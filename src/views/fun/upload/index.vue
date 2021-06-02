<template>
    <div class="upload">
        <Card class="upload_card" v-for="(component, index) in components">
            <component :is="component"></component>
        </Card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UploadFile from "./uploadFile.vue";
import { Card  } from "ant-design-vue";
export default defineComponent({
    components: {
        UploadFile,
        Card 
    },
    setup() {
      console.log(import.meta.env.VITE_APP_API_URL);
      
      return {
            components: [
                "UploadFile",
            ],
        };
    },
});
</script>

<style scoped>

.upload_card {
    width: calc(100% - 24px);
    height: 50px;
    display: inline-block;
    background: #ccc;
    margin: 6px 12px 6px 12px;
    padding: 0 12px;
    border-radius: 3px;
    display: flex;
    align-items: center;
}
</style>