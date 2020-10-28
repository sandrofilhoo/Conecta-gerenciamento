<template>
    <div class="config">
       <b-row class="col-12">
        <div class="mr-3">
          <b-icon icon="gear" scale="2"></b-icon>
        </div>
        <h4>Configurações</h4>
      </b-row>
        
        <b-card
            title="Estilo"
            class="col-12 mr-4"
            >
            <hr>
            <b-card-text >
                <div class="l1">
                    <div>
                        <p>Tema escuro.</p>
                    </div>
                    <label class="switch">
                        <input v-model="style" @click="styleThemer()" type="checkbox" :checked="(mode ==='dark') ?'chekend' : false">
                        <span class="slider round"></span>
                    </label>
                </div>
                
            </b-card-text>
        </b-card>

        <b-card
            title="Regra de negocio"
            class="col-12 mr-4 mt-3"
            >
            <hr>
              <b-card-text >
                <div class="l1">
                    <div>
                        <p>Trabalhar com comissão.</p>
                    </div>
                    <label class="switch">
                        <input v-model="tiket" @click="permissionTiket()" type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                 <div class="l1">
                    <div>
                        <p>Quantidade minima para exibir o alerta de produto</p>
                    </div>
                    <b-input class="col-3" v-model="number" placeholder="Ex:5"/>
                </div>
            </b-card-text>
        </b-card>

        <b-card
            title="Notificões"
            class="col-12 mr-4 mt-3"
            >
            <hr>
            <b-card-text >
                <div class="l1">
                    <div>
                        <p>Receber notificação.</p>
                    </div>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                        Eu quero receber notificações.
                    </b-form-checkbox>
                </div>

                <div class="l1">
                    <div>
                        <p>Receber notificação quando atingir meta.</p>
                    </div>
                    <b-form-checkbox
                        id="checkbox-2"
                        v-model="status2"
                        name="checkbox-2"
                        value="accepted"
                        >
                        Eu quero receber notificações.
                    </b-form-checkbox>
                </div>
                
            </b-card-text>    
        </b-card>
    </div>
</template>

<script>
/* import { api } from '../../services/api' */
export default {
  props:['mode'],
  data () {
  return {
    style:false,
    tiket:false,
    status:null,
    status2:null,
    number:'',
    }
  },
  methods: {
      async styleThemer(){
        if(this.mode ==="dark"){
          this.mode = "light"
        }else{
          this.mode = "dark"
        }
      },
      async permissionTiket(){
        this.tiket = !this.tiket 
      }
    },
    
}
</script>

<style scoped>
.config{
  margin: 65px 5px 5px 75px;
  height: 87vh;
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
  background-color: #3BB800;
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
.l1{
    display: flex;
    justify-content: space-between;
}
.card{
  border-radius:5px; 
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
}
.dark{
  background-color: #192734;
}
.light{
  background-color: #f0f0f5 ;
}
</style>