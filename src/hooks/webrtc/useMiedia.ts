const webrtcSupport = ()=>{
    return new Promise((resolve,reject)=>{
        if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {

        } else {
            console.log("你的浏览器不支持访问用户媒体设备");
          }
    })
}

export const useMedia = ()=>{

}