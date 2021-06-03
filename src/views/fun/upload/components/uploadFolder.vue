<!--
 * @Description: 文件夹上传
 * @Author: 前端伪大叔
 * @Date: 2021-06-03 15:35:43
 * @LastEditTime: 2021-06-03 17:24:59
 * @yuque: http://www.yuque.com/qdwds
-->
<template>
    <div class="uploadFile">
        <Upload
            :webkitdirectory="true"
            @handleUploadFile="handleUploadFile"
        ></Upload>
        <a-button type="primary" :disabled="!files" @click="handleUpload">
            上传
        </a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Upload from "@/components/Upload/index.vue";
import { apiUploadFolder } from "@/api/uploadFile";
export default defineComponent({
    components: {
        Upload,
    },
    setup() {
        const files = ref<FileList | null>(null);
        const handleUploadFile = (fileList: FileList) => {
            files.value = fileList;
        };
        const handleUpload = () => {
            if (files.value)
                for (let i = 0; i < files.value.length; i++) {
                    const formData = new FormData();
                    formData.append("filepath", files.value[i].webkitRelativePath);
                    formData.append("filename", files.value[i].name);
                    formData.append("file", files.value[i]);
                    uploadFolder(formData);
                }
        };
        const uploadFolder = (formData: FormData) => {
            apiUploadFolder(formData)
                .then((res) => console.log(res))
                .catch((e) => console.log(e));
        };
        return {
            handleUploadFile,
            handleUpload,
            files,
        };
    },
});
</script>

<style leng="less" scoped>
@import url("@/styles/uploadFile.less");
</style>