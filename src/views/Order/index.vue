<template>
    <div class="order">
        <!-- titulo da pagina com toggle -->
        <b-row class="l1 col-12 ">
            <div class="d-flex ml-3">
                <b-icon icon="truck" scale="2"></b-icon>
                <h4 class="ml-3">Pedido</h4>
            </div>
            <div >
            <b-button class="btn1 mb-3" @click="showModal"  variant="primary">Adicionar Pedido</b-button>

            <b-modal ref="my-modal" hide-footer title="Fazer pedido">
              <b-row class="col-12 d-flex mb-3">
                <b-form-group
                  class="col-12"
                  label="Nome do pedido:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    placeholder="Nome do pedido"
                  ></b-form-input>
                </b-form-group>
              </b-row>

              <b-row class="col-12 d-flex mb-3">
                <b-form-group
                  class="col-6"
                  label="Nome:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.nameVend"
                    placeholder="Nome do Vendedor"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  class="col-6"
                  label="Numero:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.number"
                    placeholder="(79) 99999-9999"
                  ></b-form-input>
                </b-form-group>

                
              </b-row>
                <b-form-group
                    class="col-12"
                    label="Pedido:"
                    label-for="pedido"
                  >
                  <b-form-textarea
                    id="pedido"
                    v-model="form.pedido"
                    placeholder="Digite seu pedido..."
                  ></b-form-textarea>
                </b-form-group>
              <b-button class=" btn mt-3 col-5 float-right" variant="primary"  @click="submitProduct()">Enviar</b-button>
            </b-modal>
          </div>  
        </b-row>
        <!-- titulo da pagina com toggle -->
        <div v-if="orders ==''" class="col-12">
            <div class="mt-5" >
                <h3>Você ainda não fez nenhum pedido.</h3>
            </div>  
        </div>
        <b-row class="mt-3">
          <b-col lg="6" xs="12" v-for="(order,index) in orders" :key="index" class="mb-2 ">
            <b-card
              :title="order.name"
              @click="$router.push({ name: 'Order-details', params: { id: order.id } })"
            >
              <div class="ul-widget-app__header mb-30 mt-3">
                <h5 class="text-mute"><strong>{{ order.name }}</strong></h5>
                <p class="text-mute">{{ order.nameVend }}</p>
              </div>
              <div class="ul-widget-card__rate-icon align-items-center">
                <span v-if="1!=1" class="text-success">PEDIDO FEITO</span>
                <span v-else class="text-danger">PEDIDO EM ESPERA</span>
              </div>
            </b-card>
          </b-col>
        </b-row>
    </div>
</template>

<script>
import { api } from '../../services/api'
  export default {
    data() {
      return {
        form:{
          name:'',
          nameVend:'',
          number:'',
          pedido:'',
        },
        perPage: 15,
        currentPage: 100,
          product: '',
          lista:[],
          orders: [],
          status:null,
          status2:null,
      }
    },
    methods: {
      async submitProduct() {
        const { name, nameVend, number, pedido  } = this.form
        const new_order = {
          name: name,
          nameSale: nameVend,
          number: number,
          order: pedido,
        }
        await api.post('/orders', new_order)
        this.orders = this.orders.concat(this.form)
        this.$refs['my-modal'].hide()
        console.log(this.orders)
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
         await api.get('/orders').then((res)=>{ 
          res.data.map( order => {
              const { name, nameVend, number, pedido  } = order
              const new_order = {
                name: name,
                nameSale: nameVend,
                number: number,
                order: pedido,
              }

             this.orders = this.orders.concat(new_order)
          })
        })        
      })
    }
  }
</script>

<style scoped>
.order{
    min-height: 750px;
    margin: 65px 5px 5px 75px;
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
  border-radius:10px; 
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
  cursor: pointer;
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
</style>