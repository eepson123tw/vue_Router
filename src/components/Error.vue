<template>
  <div>
    <h1 class="error__text">此頁為錯誤404頁面！！！！</h1>
    <button @click="back">回到demo頁</button>
  </div>
</template>

<script>
export default {

  data(){
    return{}
  },
  methods:{
    back(){
        this.$router.replace('/demo')
    },
  },
  
}
</script>

<style scoped>
.error__text{
  color: red;
  font-size: 10vh;
}



</style>