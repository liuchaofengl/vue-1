<template>
    <div>
       <p>名字:{{name}}</p>
       <p>年纪：{{age}}</p>

    </div>
</template>
<script>
    import {inject, toRefs} from "vue"
    export default {
        setup(){
            const student = inject('student')
            const dataStudent = toRefs(student)
            return {...dataStudent}
        }
    }
</script>