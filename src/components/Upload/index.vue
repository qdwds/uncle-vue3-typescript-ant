<!--
 * @Description: 
 * @Author: 前端伪大叔
 * @Date: 2021-06-03 10:48:42
 * @LastEditTime: 2021-06-03 15:47:07
 * @yuque: http://www.yuque.com/qdwds
-->
<template>
    <div>
        <a href="javascript:;" class="file_box">
            <span>{{ name }}</span>
            <input type="file" @change="beforeUpload" :webkitdirectory="webkitdirectory" />
        </a>
    </div>
</template>

<script lang="ts">
import { Event } from "node_modules/@types/three";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        name: {
            type: String,
            default: "选择文件",
        },
        webkitdirectory:{
            type:Boolean,
            defaule:false
        }
    },
    emits: ["handleUploadFile"],
    setup(_, { emit }) {
        const beforeUpload = (event: Event): void => {
            emit("handleUploadFile", event.target.files);
        };
        return {
            beforeUpload,
        };
    },
});
</script>

<style scoped>
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