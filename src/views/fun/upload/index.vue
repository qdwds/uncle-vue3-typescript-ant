<!--
 * @Description: 
 * @Author: 前端伪大叔
 * @Date: 2021-05-27 16:59:57
 * @LastEditTime: 2021-06-03 17:56:02
 * @yuque: http://www.yuque.com/qdwds
-->
<template>
    <div class="upload">
        <Card
            :title="c.title"
            v-for="(c, index) in components"
            :key="c.component"
        >
            <component :is="c.component"></component>
        </Card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Card } from "ant-design-vue";
import UploadFile from "./components/uploadFile.vue";
import UploadFiles from "./components/uploadFiles.vue";
import UploadFolder from "./components/uploadFolder.vue";
import UploadMaxFIle from "./components/uploadMaxFIle.vue";
export default defineComponent({
    components: {
        Card,
        UploadFile,
        UploadFiles,
        UploadFolder,
        UploadMaxFIle,
    },
    setup() {
        return {
            components: [
                {
                    title: "单文件上传",
                    component: "UploadFile",
                },
                {
                    title: "多文件上传",
                    component: "UploadFiles",
                },
                {
                    title: "文件夹上传",
                    component: "UploadFolder",
                },
                {
                    title: "大文件上传",
                    component: "UploadMaxFIle",
                },
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
    background: white;
    margin: 6px 12px 6px 12px;
    padding: 0 12px;
    border-radius: 3px;
    display: flex;
    align-items: center;
}
</style>