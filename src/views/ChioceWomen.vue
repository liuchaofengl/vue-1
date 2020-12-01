<template>
    <div>
        <Suspense>
            <template #default>
                <ShowGirl></ShowGirl>
            </template>
            <template #fallback>
                <h1>Loading...</h1>
            </template>
        </Suspense>  
         
   
    </div>
</template>
<script>
    import getAxios from "../hooks/useAxios"
    import ShowGirl from "../components/showGirl.vue"
    export default {
       components:{
          ShowGirl
       } 
    }
</script>