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
            @click="handleUpload"
        >
            上传
        </a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { apiUploadFile } from "@/api/uploadFile";

export default defineComponent({
    components: {
        UploadOutlined,
    },
    setup() {
        const state = reactive({
            file: [],
        });
        const handleRemove = () => {};
        const beforeUpload = (file:File):boolean => {
            state.file.push(file);
            return false;
        };
        const handleUpload = () => {
            console.log(state.file);
            debugger
            const formData = new FormData();
            formData.append("file",state.file[0])
            apiUploadFile(formData)
                .then(res =>{
                    console.log(res);
                })
                .catch(e =>{console.log(e);
                })
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
</style>