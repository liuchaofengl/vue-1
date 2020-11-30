import { ref } from "vue"
const nowTimes = ref("00:00:00")
const getNowTimes = () => {
   const now = new Date()
   const hour = now.getHours()<10? "0"+now.getHours():now.getHours()
   const minute = now.getMinutes()<10? "0"+now.getMinutes():now.getMinutes()
   const second = now.getSeconds()<10? "0"+now.getSeconds():now.getSeconds()
   nowTimes.value = hour + ":" + minute + ":" + second
   setTimeout( getNowTimes ,1000)
}
export {nowTimes,getNowTimes}