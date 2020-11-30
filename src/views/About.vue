<template>
  <div class="about">
     {{nowTimes}}
     <button @click="getNowTimes">获取当前时间</button>
  </div>
</template>
<script>
  import {nowTimes,getNowTimes} from "../hooks/useNowTime.ts"
  export default {
    setup(){
        return {
          nowTimes,
          getNowTimes
        }
    }
  }
</script>
