<!--
 * @Description: 单文件上传
 * @Author: 前端伪大叔
 * @Date: 2021-06-03 10:09:27
 * @LastEditTime: 2021-06-03 15:48:43
 * @yuque: http://www.yuque.com/qdwds
-->
<template>
    <div class="uploadFile">
        <Upload @handleUploadFile="handleUploadFile"></Upload>
        <a-button type="primary" :disabled="!file" @click="handleUpload">
            上传
        </a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { apiUploadFile } from "@/api/uploadFile";
import { OUploadFile } from "../types";
import { Event } from "node_modules/@types/three";
import Upload from "@/components/Upload/index.vue";
export default defineComponent({
    components: {
        UploadOutlined,
        Upload,
    },
    setup() {
        const state = reactive<OUploadFile>({
            file: null,
        });
        const beforeUpload = (event: Event): void => {
            state.file = event.target.files[0];
        };
        //  上传
        const handleUpload = () => {
            const formData = new FormData();
            if (state.file) {
                formData.append("file", state.file);
            }
            apiUploadFile(formData)
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                });
        };
        const handleUploadFile = (file: FileList) => (state.file = file[0]);
        return {
            ...toRefs(state),
            beforeUpload,
            handleUpload,
            handleUploadFile,
        };
    },
});
</script>

<style leng="less" scoped>
@import url("@/styles/uploadFile.less");
</style>