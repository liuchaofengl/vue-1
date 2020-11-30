<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>欢迎来到红浪漫洗浴中心啊</h2>
    <div>
        <h3>请选择一下的姑娘为您服务</h3>
        <button v-for="(item,index) in girls" :key="index"  @click="chioceGirl(index)">
            {{index}}:{{item}}
        </button>
        <div>您已选择【{{goodgirl}}】为您服务</div>
        <div>
            <button @click="overAction">点餐完成</button>
        </div>
        <div>{{overText}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive,toRefs,onBeforeMount,onMounted,onBeforeUpdate,onUpdated, onRenderTriggered, watch } from 'vue';

export default defineComponent({
      setup(){
        console.log('1.开始创建组件')
        const data = reactive({
            girls : ['三上悠亚','吉泽明步','葵司','小仓优菜'],
            goodgirl:'',
            chioceGirl:(index: number) => {
              data.goodgirl = data.girls[index]
            }
        })
        const overText = ref('红浪漫')
        const dataPros = toRefs(data)
        const overAction = () => {
            overText.value = '点餐完成|'+ overText.value
        };
       
        // const girls = ref(['三上悠亚','吉泽明步','葵司','小仓优菜']);
        // const goodgirl = ref('')
        // const chioceGirl = function(index: any){
        //     goodgirl.value = girls.value[index]
        // }
       onRenderTriggered((event) => {
          console.log(event)
       })
        // onBeforeMount(()=>{
        //   console.log('2.开始挂载之前')
        // })
        // onBeforeUpdate(() => {
        //   console.log('3.组件更新之前；浪')
        // })

        watch([overText,() => data.goodgirl],(newValue,old)=>{
          console.log('新值',newValue)
          console.log('老值',old)
        })

        return {
           ...dataPros,
           overText,
           overAction
        }
        
        
      }
     
      // onMounted(){
      //   console.log('3.组件挂载在页面后')
      // },
      // onBeforeUpdate(){
      //   console.log('4.组件更新之前')
      // },
      // onUpdated(){
      //   console.log('5.组件更新后')
      // }
      // },
     
})
</script>
