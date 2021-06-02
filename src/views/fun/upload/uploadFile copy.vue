<template>
    <div class="uploadFile">
        <a href="javascript:;" class="file_box"
            >选择文件
            <input type="file" />
        </a>
        <a-button
            type="primary"
            :disabled="fileList.length === 0"
            style="margin-left: 26px"
            @click="handleUpload"
        >
            上
        </a-button>
        a
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { getRoutes } from "@/api/t";
interface FileItem {
    uid: string;
    name?: string;
    status?: string;
    response?: string;
    url?: string;
    preview?: string;
    originFileObj?: any;
    file: string | Blob;
}
export default defineComponent({
    components: {
        UploadOutlined,
    },
    setup() {
        const state = reactive({
            fileList: [],
        });
        const handleRemove = () => {};
        const beforeUpload = (file: FileItem) => {
            console.log(file);
        };
        const handleUpload = () => {
            console.log(33);
            
            getRoutes()
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                });
        };
        return {
            ...toRefs(state),
            handleRemove,
            beforeUpload,
            handleUpload,
        };
    },
});
</script>

<style scoped>
.uploadFile {
    display: flex;
}

.file_box {
    position: relative;
    display: inline-block;
    border: 1px solid #99d3f5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    color: rgb(252, 252, 252);
    background-color: rgb(0, 98, 189);
    border-color: rgb(0, 88, 169);
    text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
    box-shadow: rgb(0 0 0 / 4%) 0px 2px 0px;
}
.file_box input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
}
.file_box:hover {
    color: rgb(252, 252, 252);
    background-color: rgb(0, 92, 168);
    border-color: rgb(0, 87, 157);
    text-decoration: none;
}
</style>