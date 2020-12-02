<template>
    <div>
       <Student></Student>
    </div>
</template>
<script>
    import Student from "../components/Student.vue"
    import {provide,reactive} from "vue"
    export default {
        components:{
           Student 
        },
        setup(){
            const student = reactive({
                name:'刘超峰',
                age:28
            })
            provide('student',student)
          
        }
    }
</script>