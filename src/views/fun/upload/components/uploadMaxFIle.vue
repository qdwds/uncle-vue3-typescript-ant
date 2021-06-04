<!--
 * @Description: 大文件上传
 * @Author: 前端伪大叔
 * @Date: 2021-06-03 17:53:56
 * @LastEditTime: 2021-06-04 15:43:20
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
import { defineComponent, ref, resolveComponent, toRefs } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { apiUploadMaxFile, apiMergeMaxFile } from "@/api/uploadFile";
import { OUploadFile } from "../types";
import { Event } from "node_modules/@types/three";
import Upload from "@/components/Upload/index.vue";
export default defineComponent({
    components: {
        UploadOutlined,
        Upload,
    },
    setup() {
        const file = ref<File | null>(null);

        const beforeUpload = (event: Event): void => {
            file.value = event.target.files[0];
        };
        const handleUploadFile = (f: FileList) => (file.value = f[0]);

        //  上传
        const handleUpload = async () => {
            const fileCHunkList = handleFileChunk(file.value);
            const filename: string | undefined = file.value?.name;
            if (fileCHunkList.length > 0) {
                //  转成formdata
                const fileChunks = fileCHunkList
                    .map(({ file }, index: number) => {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("filename", `${filename} - ${index}`);
                        return { formData };
                    })
                    .map(async ({ formData }) => {
                        return requestFile(formData);
                    });
                await Promise.all([fileChunks]);
                setTimeout(async () => {
                    if (filename) {
                        const result =  await mergeMaxFile(filename);
                        console.log(result);
                    }
                },1000);
            }
        };

        //  file 转成blob
        const handleFileChunk = (file: File | null) => {
            let cur: number = 0;
            const SIZE = 1024 * 1024 * 5;
            const fileChunkList: Array<{ file: Blob }> = [];
            if (file) {
                while (cur < file?.size) {
                    fileChunkList.push({
                        file: file.slice(cur, cur + SIZE),
                    });
                    cur += SIZE;
                }
                return fileChunkList;
            } else {
                return [];
            }
        };
        //  发送切片
        const requestFile = async (formData: FormData) => {
            return new Promise((resolve, reject) => {
                apiUploadMaxFile(formData)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        };
        //  合并切片
        const mergeMaxFile = (filename: string) => {
            return new Promise((resolve, reject) => {
                apiMergeMaxFile({ filename })
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        };
        return {
            file,
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