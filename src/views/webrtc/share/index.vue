<template>
    <video id="share" ref="shareRef" controls autoplay></video>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    setup () {
        const shareRef = ref<HTMLMediaElement | null>(null)
        const createShare = async ()=>{
            console.log(window.navigator.mediaDevices);
            
            const screen = await window.navigator.mediaDevices.getDisplayMedia({
                video:{
                   cursor: 'always'
                },
                audio: true,
            })
            if(shareRef.value){
                shareRef.value.srcObject = screen;
            }
        }
    onMounted(()=>createShare())
        return {
            shareRef
        }
    }
})
</script>

<style scoped>
#share{
    width: 100%;
    height: 100%;
}
</style>