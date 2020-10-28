<template>
    <div class="event">
        <!-- titulo da pagina com toggle -->
        <b-row class="l1 col-12 ">
            <div class="d-flex ml-3">
                <b-icon icon="calendar-check" scale="2"></b-icon>
                <h4 class="ml-3">Evento</h4>
            </div>
            <div >
            <b-button class="btn1 mb-3" @click="showModal"  variant="primary">Adicionar data</b-button>

            <b-modal ref="my-modal" hide-footer title="Eventos">
              <b-row class="col-12 d-flex mb-3">
                <b-form-group
                  class="col-12"
                  label="Nome:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.nome"
                    placeholder="Nome do evento"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    class="col-12"
                    label="Data:"
                    label-for="Data"
                  >
                  <b-form-input
                    id="Data"
                    type="date"
                    v-model="form.data"
                    placeholder="Data do evento"
                  ></b-form-input>
                </b-form-group>
              </b-row>

              <b-button class=" btn mt-3 col-5 float-right" variant="primary"  @click="submitProduct()">Enviar</b-button>
            </b-modal>
          </div>  
        </b-row>
        <!-- titulo da pagina com toggle -->
        <div class="col-12">
            
          <div v-if="items ==''">
            <h5>Lista de eventos vazia, adicione um evento!</h5>
          </div>
          <b-row class="col-12 mt-3">
            <b-col lg="4" xs="12" v-for="item in items" :key="item.length" class="mb-2 ">
              <b-card
                :title="item.name"
                @click="$router.push({ name: 'Event-details', params: { id: item.id } })"
              >
                <div v-if="(item.data-item.data)!=0" class="on"></div>
                <div v-else class="Off"></div>
                <div class="ul-widget-app__header mb-30 mt-3">
                  <h5 class="text-mute">{{ item.nome }}</h5>
                  <h5 class="text-mute">{{ item.data }}</h5>
                </div>
                <div class="ul-widget-card__rate-icon align-items-center">
                  <!-- <span v-if="zappush.online" class="text-success">ATIVO</span>
                  <span v-else class="text-danger">DESATIVADO</span> -->
                </div>
              </b-card>
            </b-col>
          </b-row>
        </div>
    </div>
</template>

<script>
import { api } from '../../services/api'

  export default {
    data() {
      return {
        form:{
          nome:'',
          data:'',
        },
          product: '',
          lista:[],
          items: [],
          status:null,
          status2:null,
      }
    },
    methods: {
      async submitProduct() {

        const {nome, data } = this.form

        console.log(nome, typeof nome, data, typeof data)

        const new_calendar = {
          name: nome,
          date: data,
        }

        this.$refs['my-modal'].hide()
        await api.post('/calendars', new_calendar)
        this.items = this.items.concat(this.form)   
      },
      showModal() {
        this.$refs['my-modal'].show()
      },
    },
    created: function () {
      this.$nextTick(async function () {
        api.get('/calendars').then((res)=>{
          res.data.map( calendar => {
            const { name, date } = calendar
              const new_calendar = {
                nome: name,
                data: date,
              }
             this.items = this.items.concat(new_calendar)             
          })
        })        
      })
    } 
  }
</script>

<style scoped>
.event{
  margin: 65px 5px 5px 75px;
    min-height: 750px;
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
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
}
.card:hover{
  top:-4px;
  box-shadow:0 4px 3px #999;
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
  height: 100%;
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
</style>