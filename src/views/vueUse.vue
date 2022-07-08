<template>
  <div>
    <h1>测试 vueUse 鼠标坐标</h1>
    <h3>Monse: {{ x }} x {{ y }}</h3>
  </div>
</template>
<script lang='ts'>
  import { defineComponent } from "vue";
  import { useMouse } from '@vueuse/core'
  import service from "@/utils/axios";
  import API from '@/api'

  export default defineComponent({
    name: 'VueUse',
    setup() {
      const { x, y } = useMouse()

      const getService = async () => {
        let res = await service({
          url: 'http://www.baidu.com',
          method: 'get'
        })
      }

      const requestRes = async () => {
        let res = await API.login('张三','123456')
      }

      return { x, y}
    }
  })
</script>
<style lang='scss' scoped>

</style>