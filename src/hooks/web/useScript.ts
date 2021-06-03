/*
 * @Description: 动态创建script标签
 * @Author: 前端伪大叔
 * @Date: 2021-06-03 11:45:28
 * @LastEditTime: 2021-06-03 15:13:26
 * @yuque: http://www.yuque.com/qdwds
 */

import { onMounted } from "@vue/runtime-core"


export const useCreaeScript = (url: string) => {
    const createScriptPromise = new Promise((resolve, reject) => {
        onMounted(() => {
            const script = document.createElement("script");
            script.type = 'text/javascript';
            script.onload = function () {
                resolve('');
            };
            script.onerror = function (err) {
                reject(err);
            };
            script.src = url;
            document.head.appendChild(script);
            console.log(script);
            
        })
    })

    return {
        createScriptPromise:()=>createScriptPromise
    }
}