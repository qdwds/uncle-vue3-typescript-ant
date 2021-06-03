
<!--
 * @Description: 多文件上传
 * @Author: 前端伪大叔
 * @Date: 2021-06-02 16:45:36
 * @LastEditTime: 2021-06-03 15:47:48
 * @yuque: http://www.yuque.com/qdwds
-->

<template>
    <div class="uploadFile">
        <Upload @handleUploadFile="handleUploadFile1"></Upload>
        <Upload @handleUploadFile="handleUploadFile2"></Upload>

        <a-button
            type="primary"
            :disabled="!file1 && !file2"
            @click="handleUpload"
        >
            上传
        </a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { apiUploadFiles } from "@/api/uploadFile";
import { OUploadFile } from "../types";
import { Event } from "node_modules/@types/three";
import Upload from "@/components/Upload/index.vue";

export default defineComponent({
    components: {
        UploadOutlined,
        Upload,
    },
    setup() {
        const state: OUploadFile = reactive({
            file1: null,
            file2: null,
        });
        const beforeUpload = (event: Event): void => {
            state.file = event.target.files[0];
        };

        const handleUpload = () => {
            const formData = new FormData();
            if (state.file1) formData.append("file1", state.file1);
            if (state.file2) formData.append("file2", state.file2);
            apiUploadFiles(formData)
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                });
        };

        const handleUploadFile1 = (file: FileList) => (state.file1 = file[0]);
        const handleUploadFile2 = (file: FileList) => (state.file2 = file[0]);

        return {
            ...toRefs(state),
            beforeUpload,
            handleUpload,
            handleUploadFile1,
            handleUploadFile2,
        };
    },
});
</script>

<style leng="less" scoped>
@import url("@/styles/uploadFile.less");
</style>