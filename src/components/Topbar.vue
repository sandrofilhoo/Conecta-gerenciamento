<template>
  <nav class="bar col-12 d-flex justify-content-space-between" >
      <div>
        <img src="../assets/Conecta.png" alt="logo" width=55 height=55>
        <b-button variant="f0f0f5" toggle-class="text-decoration-none"><b-icon icon="list"  aria-hidden="true" class="mr-3"></b-icon></b-button>
      </div>
      <div class="perf">
        <!-- <div class="mt-2">
          <label class="switch">
              <input  type="checkbox" @click="styleThemer()" :checked="(mode ==='dark') ?'light' : false">
              <span class="slider round"></span>
          </label>
        </div> -->
        <b-dropdown size="lg"  variant="f0f0f5" toggle-class="text-decoration-none" no-caret>
          <template v-slot:button-content>
            <div v-if="1!=0">
              <b-icon icon="bell"  aria-hidden="true" class="mr-3"></b-icon>
            </div>
            <div v-else>
              <b-icon icon="bell-fill" variant="danger" aria-hidden="true" class="mr-3"></b-icon>
            </div>
          </template>
          <b-dropdown-text>Ainda não existe alerta</b-dropdown-text>
        </b-dropdown>
        
        <b-dropdown variant="f0f0f5" id="dropdown-1" toggle-class="text-decoration-none"  class="m-md-2 ">
          <b-dropdown-item to="/account"><img class="mr-3" src="../assets/imagem/faces/allegro.png" />Usuario</b-dropdown-item>
          <!-- <b-dropdown-item to="/config"><b-icon icon="gear" aria-hidden="true" class="mr-3"></b-icon>Configurações</b-dropdown-item> -->
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item variant="danger" ><b-icon icon="box-arrow-right" aria-hidden="true" class="mr-3"></b-icon>Sair</b-dropdown-item>
        </b-dropdown>
        <img src="../assets/imagem/faces/allegro.png" class="perf mr-1"/>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'side',
  props:['mode'],
  data(){
    return{
      style:false
    }
  },
  methods: {
      styleThemer(){
        /* if(this.mode === 'light'){
          this.mode='dark'
        }else{
          this.mode ='light'
        } */
        
        this.$emit(this.mode ==='dark') ? 'light' : 'dark'
        /* console.log(this.mode) */
      },
      permissionTiket(){
        this.tiket = !this.tiket 
      }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  margin:0 ;
  justify-content: space-between;
  box-shadow: 0 8px 6px -6px rgba(0,0, 0, 0.1);
  z-index: 5;
  width:100% ;
  height: 50px;
  background-color: #ffffff;
  position: fixed;
  
}
.perf img{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: relative;
}
.perf{
  display: flex;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
/* .switch input {
  opacity: 0;
  width: 0;
  height: 0;
} */

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #192734;
}

/* input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
} */

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
