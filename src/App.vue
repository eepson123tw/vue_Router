<template>
  <div id="app" @mousewheel="scrollEvent">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/demo">Demo</router-link> 
      <router-link :to="{name:`travel`}">travel</router-link>
    </div>
        <router-view/>
  </div>
</template>
<script>
export default {

  data(){
    return{
      scrolltop:0,
    }
  },
  
  methods:{
    handleTurn(){
      this.$router.push('/demo',this.completeHandler)
    },
    scrollEvent(){
      let nav =  document.querySelector('#nav');
      if(window.scrollY >=200 && window.scrollY!== 0 ){
        nav.style.position=`fixed`;
       
      }else{
         nav.style.position=`unset`;
      }
    },
  },
  // mounted(){
  //   console.log(window.screenTop);
  // },
}
</script>


<style>


body{
  list-style: none;
  margin: 0 ;
  padding: 0;
  line-height: 1.3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: aliceblue;
}

#nav a {
   font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #b97742;
}



</style>
