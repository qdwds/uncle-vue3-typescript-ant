<template>
    <video id="video" controls autoplay ref="videoRef"></video>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
    setup () {
        const videoRef = ref<null |HTMLMediaElement>(null);
        let track:MediaStreamTrack[] | null  = null;
        const createVideo = async ()=>{
            const  media = await window.navigator.mediaDevices.getUserMedia({
                video:true
            })
            
            if(videoRef.value){
                videoRef.value.srcObject = media;
                track = media.getTracks();
            }
        }

        onMounted(()=>{
            createVideo();
            
        })

        onUnmounted(()=>{
           if(track){
                track[0].stop();
           }
        })
        return {
            videoRef
        }
    }
})
</script>

<style scoped>
#video{
    width:100%;
    height: 100%;
}
</style>