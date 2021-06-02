/*
 * @Description: 文件上传进度条
 * @Author: 前端伪大叔
 * @Date: 2021-06-02 22:10:46
 * @LastEditTime: 2021-06-02 23:08:13
 * @yuque: http://www.yuque.com/qdwds
 */

import { notification, Progress } from "ant-design-vue";
import type { AxiosRequestConfig } from "axios";
import { h } from "vue";

export const uploadProgress = (config: AxiosRequestConfig) => {
    const key = `open${Date.now()}`;
    config.onUploadProgress = (progressEvent) => {
        let percent: number = (progressEvent.loaded / progressEvent.total * 100 | 0);
        notification.open({
            message: percent === 100 ? "上传完成" : "正在上传",
            description: h(
                Progress,
                {
                    percent,
                    'stroke-color': {
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }
                },
            ),
            key,
            duration: percent === 100 ? 0.8 : null
        });
    }
};