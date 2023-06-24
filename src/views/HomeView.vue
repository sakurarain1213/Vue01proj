<template>
  <div class="home">
    <HelloWorld msg="vue自带的一整套 aaaaaa 实时渲染 第一个界面测试"/>





    <div class="myclass">
      <h1> "asldjalksd" </h1>
    </div>
  </div>
</template>




<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
