<template>
    <div>
        <img :src="result.imgUrl" alt="">
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        async setup(){
            const rawData = await axios.get("https://apiblog.jspang.com/default/getGirl")
            return {result:rawData.data}
        }
    }
</script>