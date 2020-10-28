<template>
    <div class="percent">
        <!-- titulo da pagina com toggle -->
        <b-row class="l1 col-12 ">
            <div class="d-flex ml-3">
                <b-icon icon="percent" scale="2"></b-icon>
                <h4 class="ml-3">Cupom de desconto</h4>
            </div>
            <div >
            <b-button class="btn1 mb-3" @click="showModal"  variant="primary">Adicionar Pedido</b-button>

            <b-modal ref="my-modal" hide-footer title="Fazer pedido">
              <b-row>
                <b-form-group
                  class="col-12"
                  label="Nome do cupom:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    placeholder="#inaguraçao"
                  ></b-form-input>
                </b-form-group>
              </b-row>
              <b-row>
                <b-form-group
                  class="col-6"
                  label="Opção de desconto:"
                  label-for="input-2"
                >
                  <b-form-select v-model="selected" :options="options">
                    <option :value="null">Selecione uma opção...</option>
                  </b-form-select>
                </b-form-group>

                <b-form-group
                  class="col-6"
                  label="Duração de desconto:"
                  label-for="input-2"
                >
                  <b-form-select v-model="time" :options="optionsTime">
                    <option :value="null">Selecione uma opção...</option>
                  </b-form-select>
                </b-form-group>
              </b-row>
              <b-row>
                <b-form-group
                  v-show="selected"
                  class="col-6"
                  label="Desconto:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.discount"
                    placeholder="Desconto"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    v-if="time==='Data'"
                    class="col-6"
                    label="Data:"
                    label-for="Data"
                  >
                  <b-form-input
                    id="Data"
                    type="date"
                    v-model="form.data"
                    placeholder="Data de vencimento"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    v-if="time==='Limite de unidades'"
                    class="col-6"
                    label="Quantidade:"
                    label-for="Quantidade"
                  >
                  <b-form-input
                    id="Quantidade"
                    v-model="form.days"
                    placeholder="5"
                  ></b-form-input>
                </b-form-group>
              </b-row>

              <b-button class=" btn mt-3 col-5 float-right" variant="primary"  @click="handlerCoupon()">Enviar</b-button>
            </b-modal>
          </div>  
        </b-row>
        <!-- titulo da pagina com toggle -->
        <div v-if="percents ==''" class="col-12">
            <div class="mt-5" >
                <h3>Você ainda não tem nenhum cupons cadastrado <br>Adicione um cupom de desconto para melhoras sua conversão.</h3>
            </div> 
        </div>
        <!-- <b-row class="mt-3">
          <b-col lg="4" xs="12" class="mb-2 ">
            <b-card>
              <div v-if="1!=1" class="on"></div>
              <div v-else class="Off"></div>
              <div class="meiaLuaUp"></div>
              <div class="linha-vertical"></div>
              <div style="border:1px dashed;margin-left:15px"><div>
              <label width="60px" height="34px" ></label>
              <div class="ul-widget-app__header mb-30 mt-3">
                <h5 class="text-mute"><strong>aaaa</strong></h5>
                <p>bbbbbbb</p>
              </div>
              <div class="ul-widget-card__rate-icon align-items-center">
                <span v-if="1!=1" class="text-success">ATIVO</span>
                <span v-else class="text-danger">DESATIVO</span>
              </div>
              <div class="meiaLuaDown"></div>
            </b-card>
          </b-col>
        </b-row> -->
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
    </div>
</template>

<script>
  import {api} from '../../services/api'
  export default {
    data() {
      return {
        form:{
          name:'',
          discount:'',
          data:'',
          days:'',
          
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
        perPage: 15,
        currentPage: 100,
          product: '',
          lista:[],
          percents: [],
          status:null,
          status2:null,
      }
    },
    methods: {
      async handlerCoupon() {   
        
        const { data, days, discount, name } = this.form   
        const selected = this.selected

        const new_coupon = {
          name: name,
          optionDiscount: selected,
          timeDiscount: days,
          discount,
          amount: days,
          date: data
        }
        await api.post('/percents', new_coupon)       
        this.percents = this.percents.concat(this.form)
        this.$refs['my-modal'].hide()
        console.log(this.percents)
      },
      showModal() {
        this.$refs['my-modal'].show()
      },
      showModalAlert() {
        this.$refs['modalAlert'].show()
      },
      submitProductAlert() {
        this.alertCards = this.alertCards.concat(this.nameAlert)
        this.$refs['modalAlert'].hide()
      },
    },
    created: function () {
      this.$nextTick(async function () {
        api.get('/percents').then((res)=>{
          res.data.map( coupon => {
            console.log(coupon)
              const { _id, data, days, discount, name } = coupon
              const new_coupon = {
                id:_id,
                name: name,
                timeDiscount: days,
                discount,
                amount: days,
                date: data
              }

            this.percents = this.percents.concat(new_coupon)
          })
        })        
      })
    } 
  }
</script>

<style scoped>
.percent{
    margin-top: 3px;
    min-height: 750px;
    margin: 65px 5px 5px 65px;
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
  border-radius:10px; 
  /* box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1); */
}
.card:hover{
  top:-4px;
  /* box-shadow:0 4px 3px 0 rgba(0,0, 1, 0.1);; */
} 
.btnDanger{
    margin-top:20px;
}
.pesquise{
    border-radius:20px; 
    justify-content:center;
    flex:1;
}
.btn1{
    border-radius:20px; 

}
.card-text{
    cursor: pointer;
}
.total{
    display: flex;
    justify-content: space-between;
}
.total strong{
    color: #3BB800;
}
.entrega{
    display: flex;
    justify-content: space-between;
}
.pedido{
    display: flex;
    justify-content: space-between;
}
.command{
    height: 300px;
}
/* .cardgeral{
    min-width: 800px;
} */
.lb{
    display: flex;
    margin-bottom: -15px;
}
.btnModal{
    justify-content: space-around;
    display: flex;
}
.on{
  width: 20px;
  height: 134px;
  background: linear-gradient(to bottom,#008080,#48D1CC);
  margin: -20px -20px -20px -20px;
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
  margin: -20px -20px -20px -20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  /* background: linear-gradient(to right,#0000CD,#6495ED); */
  /* border-bottom: 20px solid #008080;
  border-right: 20px solid transparent;*/
}
.meiaLuaDown{
    width: 30px;
    height: 15px;
    border-radius: 150px 150px 0px 0px;
    background-color: #f0f0f5;
    position: absolute;
    margin: 6px 0 0 40px;
}
.meiaLuaUp{
    width: 30px;
    height: 15px;
    border-radius: 0px 0px 150px 150px;
    background-color: #f0f0f5;
    position: absolute;
    margin: -21px 0 0 40px;
}
.linha-vertical {
    height: 80%;
    border-right: 1px dashed #000;
    position: absolute;
    margin: -5px 0 0 55px;
    opacity: 0.4;
}
</style>