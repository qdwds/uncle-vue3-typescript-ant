<template>
    <div id="baidu" ></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  setup () {
    console.log(window);
    
    onMounted(()=>{
      const map = new window.BMap.Map('baidu')
      const point = new window.BMap.Point(116.404, 39.915)
      map.centerAndZoom(point, 15)
      map.enableScrollWheelZoom(true)

    })

    return {
    }
  }
})
</script>

<style lang="less" scoped>
#baidu{
  width: 100%;
  height: 100%;
}
</style>