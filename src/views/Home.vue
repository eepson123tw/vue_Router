<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to use Vue Router and Cli "/>
     <footer>
      <p>© 資料、圖片、文章來源皆來自網路，僅用來做為學習用途，不做任何商業用途，若有任何疑問，請聯繫eepson123@gmail.com。</p>
  </footer>
      <button class='demo_btn' @click="handleTurn">前往Demo頁</button>
  </div>

 


</template>
<script>

import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    methods:{
    handleTurn(){
      this.$router.push('/demo',this.completeHandler)
    },
    completeHandler(){
      
    },
  },
}
</script>
<style scoped>

  .demo_btn{
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }



</style>