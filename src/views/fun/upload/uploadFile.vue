<template>
    <div class="uploadFile">
        <a-upload
            :file-list="[]"
            :remove="handleRemove"
            :before-upload="beforeUpload"
        >
            <a-button>
                <UploadOutlined></UploadOutlined>
                <span>文件上传</span>
            </a-button>
        </a-upload>
        <a-button
            type="primary"
            style="margin-left: 26px"
            :disabled="!file"
            @click="handleUpload"
        >
            上传
        </a-button>
        <a-button @click="handle">handle</a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { apiUploadFile } from "@/api/uploadFile";
import { getRoutes } from "@/api/t";
import { OUploadFile } from "./types";
export default defineComponent({
    components: {
        UploadOutlined,
    },
    setup() {
        const state = reactive<OUploadFile>({
            file: "",
        });
        const handleRemove = () => {};
        const beforeUpload = (file:File):boolean => {
            state.file = file;
            return false;
        };
        //  上传
        const handleUpload = () => {
            const formData = new FormData();
            formData.append("file",state.file)
            apiUploadFile(formData)
                .then(res =>{
                    console.log(res);
                })
                .catch(e =>{console.log(e);
                })
        };

        const handle = ()=>{
            getRoutes()
            .then(res =>{
                console.log(res);
                
            })
            .catch(e =>console.log(e)
            )

        }
        return {
            ...toRefs(state),
            handleRemove,
            beforeUpload,
            handleUpload,
            handle,
        };
    },
});
</script>

<style scoped>
.uploadFile {
    display: flex;
}
</style>