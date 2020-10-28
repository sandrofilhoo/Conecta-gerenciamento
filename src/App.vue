<template>
  <div id="app" :class="mode && ($route.name === 'Login') ? 'login' :'light'"><!--  -->
    <Topbar v-if="$route.name != 'Login'"/>
    <Sidebar v-if="$route.name != 'Login'" />
    <router-view/>
    <div v-if="$route.name != 'Login'" class="ref">
      <h3 style="font-size:14px">
        © Copyrights 2020 Conecta - Todos os direitos reservados
      </h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'

export default {
  name: 'Home',
  data(){
    return {
      mode:'light'
    }
  },
  components: {
    Topbar,
    Sidebar
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
 /*  background-color: ; */
  overflow: hidden;
  
  line-height: 15px;
}
.ref{
  background-color: #d3d3d3;
  height: 50px;
  border-top-left-radius: 30px ;
  border-top-right-radius: 20px;
  margin-left: 70px ;
  margin-top: 10px;
}
.ref h3{
  align-items: center;
  margin-top: 30px;
}
.dark{
  background-color: #192734;
  color: #fff;
}
.light{
  background-color: #f0f0f5 ;
  color: #000;
}
.login{
  background-color:#7F85DE ;
}
</style>
