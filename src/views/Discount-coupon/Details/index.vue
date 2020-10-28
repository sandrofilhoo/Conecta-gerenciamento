<template>
    <div class="config">
      <div class="col-12 mr-4">
        <div class="col-12 d-flex">
          <b-card
            class="col-12"
          >
              <div v-if="style==true" class="on"></div>
              <div v-else class="Off"></div>
              <div class="meiaLuaUp"></div>
              <div class="linha-vertical"></div>
            <b-card-text >
                <div class="l1">
                    <div>
                        <h4>On/Off</h4>
                    </div>
                    <label class="switch">
                        <input v-model="style" @click="OnOff()" type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </b-card-text>
            <div class="labelCoupon">
              <b-row>
                <b-form-group
                  class="lb1 col-12"
                >
                <label  for="input-1">Nome do cupom:</label>
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    placeholder="#inaguraçao"
                  ></b-form-input>
                </b-form-group>
              </b-row>
              <b-row>
                <b-form-group
                  class="lb2 col-6"
                >
                <label  for="input-2">Opção de desconto:</label>
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-form-group>

                <b-form-group
                  class="lb2 col-6"
                >
                <label  for="input-2">Duração de desconto:</label>
                  <b-form-select v-model="time" :options="optionsTime"></b-form-select>
                </b-form-group>
              </b-row>
              <b-row>
                <b-form-group
                  class="lb2 col-6"
                >
                <label  for="input-3">Desconto:</label>
                  <b-form-input
                    id="input-3"
                    v-model="form.discount"
                    placeholder="Desconto"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    v-if="time==='Data'"
                    class="lb2 col-6"
                  >
                  <label  for="Data">Data:</label>
                  <b-form-input
                    id="Data"
                    type="date"
                    v-model="form.data"
                    placeholder="Data de vencimento"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    v-if="time==='Limite de unidades'"
                    class="lb2 col-6"
                  >
                  <label  for="Quantidade">Quantidade:</label>
                  <b-form-input
                    id="Quantidade"
                    v-model="form.days"
                    placeholder="5"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    class="lb1 col-12"
                  >
                  <label  for="Token">Token:</label>
                  <b-form-input
                    id="Token"
                    v-model="form.token"
                    disabled
                  ></b-form-input>
                </b-form-group>
              </b-row>
            </div>
            <div class="meiaLuaDown"></div>
          </b-card>
          <!-- 
            <b-row class="col-12 mt-3">
          <b-col lg="4" xs="12" v-for="(percent,index) in percents" :key="index" class="mb-2 ">
            <b-card
              
              @click="$router.push({ name: 'Discount-coupon-details', params: { id: percent.id } })"
            >
              <div v-if="(percent.discount-percent.discount)!=0" class="on"></div>
              <div v-else class="Off"></div>
              <div class="meiaLuaUp"></div>
              <div class="linha-vertical"></div>
              <div class="ul-widget-app__header mb-30 mt-3">
                <h5 class="text-mute"><strong>{{ percent.name }}</strong></h5>
                <p>{{percent.discount}}</p>
              </div>
              <div class="ul-widget-card__rate-icon align-items-center">
                <span v-if="(percent.discount-percent.discount)!=0" class="text-success">ATIVO</span>
                <span v-else class="text-danger">DESATIVO</span>
              </div>
              <div class="meiaLuaDown"></div>
            </b-card>
          </b-col>
        </b-row>
           -->
        </div>
      </div>
      <b-row class="col-12">
        <div class="col-12 float-right">
          <b-button class="mt-3 ml-3  float-right" variant="primary"  @click="handlerFinish()">Finalizar</b-button>
          <b-button class="mt-3  float-right" variant="danger"  @click="handlerDelet()">Excluir</b-button>
        </div>
      </b-row>
    </div>
</template>

<script>
import {api} from '../../../services/api'

export default {
  data () {
  return {
    form:{
          name:'',
          discount:'',
          data:'',
          days:'',
          token:'',
        },
        selected: null,
        time: null,
        options: [
          "Porcentagem",
          "Valor"
        ],
        
        optionsTime: [
          "Limite de unidades",
          "Data"
        ],
    style:false,
    tiket:false,
    status:null,
    status2:null,
    number:'',
    }
  },
  created: function () {
      this.$nextTick(async function () {
        api.get(`/percent/${this.$route.params.id}`).then((res)=>{
          const {name, discount ,data, days } = res.data
          this.form = {name, discount ,data, days, token:123} 
          console.log(this.form)
        })      
      })
    } 
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
  margin-bottom: 50px ;
    margin-left: 300px;
    display: flex;
    justify-content: space-between;
}
.card{
  margin-top: 5%;
  height: 600px;
  border-radius:5px; 
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
}
img{
  width: 100%;
  width: 500px;
  display: flex;
  flex: 1;
}
.labelCoupon label{
  /* margin-right: 300px; */
  margin-top: 10px;
  display: block;
}
.lb1 label{
  float: left;
}
.lb2 label{
  float: left;
}
.labelCoupon{
  margin-left: 300px;
  display: block;
}
.on{
  width: 20px;
  height: 100%;
  background: linear-gradient(to bottom,#008080,#48D1CC);
  margin: -20px -20px -20px -40px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  /* background: linear-gradient(to right,#0000CD,#6495ED); */
  /* border-bottom: 20px solid #008080;
  border-right: 20px solid transparent;*/
}
.Off{
  width: 20px;
  height: 100%;
  background: linear-gradient(to bottom,#800000,#DC143C);
  margin: -20px -20px -20px -40px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  /* background: linear-gradient(to right,#0000CD,#6495ED); */
  /* border-bottom: 20px solid #008080;
  border-right: 20px solid transparent;*/
}
.meiaLuaDown{
    width: 90px;
    height: 45px;
    border-radius: 150px 150px 0px 0px;
    background-color: #f0f0f5;
    position: absolute;
    margin: 93px 0 0 180px;
}
.meiaLuaUp{
    width: 90px;
    height: 45px;
    border-radius: 0px 0px 150px 150px;
    background-color: #f0f0f5;
    position: absolute;
    margin: -21px 0 0 180px;
}
.linha-vertical {
    height: 85%;
    border-right: 1px dashed #000;
    position: absolute;
    margin: 25px 0 0 225px;
    opacity: 0.4;
}
</style>