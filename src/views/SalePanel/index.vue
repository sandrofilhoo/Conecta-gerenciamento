<template>
    <div class="salePanel ">
        <!-- titulo da pagina com toggle -->
       <b-row class="l1 col-12 ">
            <div class="d-flex ml-3">
                <b-icon icon="shop" scale="2"></b-icon>
                <h4 class="ml-3">Painel de vendas</h4>
            </div>  
            <label class="switch">
                <input v-model="online" @click="saleOpen()" type="checkbox">
                <span class="slider round"></span>
            </label>
            
        </b-row>
        <!-- titulo da pagina com toggle -->

        <b-row v-if="online" class="col-12">
            <div class="d-flex">
                <h3>CAIXA ON</h3>
                <b-spinner  variant="success" type="grow" label="Spinning"></b-spinner>
            </div>
        </b-row>

        <div v-else class="col-12">
            <b-row >
                <h3>CAIXA FECHADO<b-icon class="ml-2 mb-0" icon="circle"  scale="1"></b-icon></h3>
            </b-row>
            <div class="mt-5" style="opacity:0.3">
                <!-- <h1>Caixa fechado</h1> -->
                <h1><b-icon icon="lock-fill" scale="2" ></b-icon></h1>
            </div>
            
        </div>

        <div v-show="online" class="cardgeral">
            <div class="d-flex">
                <b-card
                    class="col-4"
                    >
                    <div>
                        <b-tabs content-class="mt-3">
                            <b-tab title="Mesa" active>
                                <label class="lb ">Mesa:<b-icon icon="info-circle" v-b-popover.hover.top="'Adicione uma mesa para criar uma comanda.'" variant="secondary"></b-icon></label>
                                <b-row class="col-12 mb-3 mt-3">
                                    <b-input class="pesquise col-12 mr-2 mesa_btn" v-model="comanda" placeholder="Informe a mesa"/>
                                    <b-button @click="handleCreateNewTable()" class="btn1" variant="primary">Adicionar</b-button>
                                </b-row>

                                <div>
                                    <b-card-text 
                                        class="m-0"
                                        @click="addCommand()"
                                        v-for="mesa in mesas"
                                        :key="mesa.id"
                                        v-model="mesaSelect"
                                    >
                                        {{mesa.id}}
                                        <hr>
                                    </b-card-text>
                                </div>
                            </b-tab>
                            
                            <b-tab title="Delivery">
                                <label class="lb ">Mesa:</label>
                                <b-row class="col-12 mb-3 mt-3">
                                    <b-input class="pesquise col-8 mr-2" v-model="comanda" placeholder="Informe o nome do cliente"/>
                                    <b-button @click="handleCreateNewOrder()" class="btn1" variant="primary">Adicionar</b-button>
                                </b-row>

                                <div>
                                    <b-card-text 
                                        class="m-0"
                                        @click="addCommand()"
                                        v-for="order in orders"
                                        :key="order.id"
                                        v-model="orderSelect"
                                    >
                                        {{order.name}}
                                        <hr>
                                    </b-card-text>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </b-card>
            

                <div v-if="request == true" class="col-8">
                    <b-card
                        
                        >
                        <h3>mesa.name</h3>
                        <hr>
                        <div>
                            <div
                                v-for="item in items"
                                :key="item"
                            >
                                <p>{{item}}</p>
                            </div>
                        
                        </div>
                        <hr>
                        <div class="pedido">
                            <p>Valor do pedido</p>
                            <p>R$ 00,00</p>
                        </div>
                        <div class="entrega">
                            <p>Entrega:</p>
                            <p>R$ 00,00</p>
                        </div>
                        <div v-if="descont!==''" class="entrega">
                            <p>Desconto:</p>
                            <p>R$ {{descont}}</p>
                        </div>
                        <div class="total" >
                            <h4>Total:</h4>
                            <h4><strong>R$ 00,00</strong></h4>
                        </div>
                        <div class="d-flex">
                            
                            <b-input class="col-11" v-model="addItems" placeholder="Produto"/>
                            <b-button class="ml-2" @click="addItem()" variant="primary"><b-icon icon="cursor"></b-icon></b-button>
                        </div>
                        <b-input class="col-12 mt-2" v-model="descont" placeholder="Cupom de desconto"/>
                        <b-modal ref="modalFinish" hide-footer title="Alerta">
                            <div class="btnModal">
                                <div>
                                    <b-button variant="primary" ><h1><b-icon icon="cash"></b-icon></h1>Dinheiro</b-button>
                                </div>
                                <div >
                                    <b-button variant="primary" class="ml-5"><h1><b-icon icon="credit-card"></b-icon></h1>Cartão</b-button>
                                </div>
                            </div>
                        </b-modal>
                        <b-button class=" col-12 mt-2" @click="finish()" variant="primary">Finalizar</b-button>
                    </b-card>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
    import { api } from '../../services/api'

export default {
  data () {
return {
    online:false,
    comanda: null,
    command:'',
    mesas:[],
    orders:[],
    request:false,
    mesaSelect:'',
    addItems:'',
    items:[],
    descont:'',
    orderSelect:'',
    }
  },
  methods: {
      saleOpen() {       
        if(this.online == false ){     
            this.$bvToast.toast('Caixa aberto', {
            title: 'Sucesso',
            autoHideDelay: 1500,
            variant:"success",
            solid: true            
            }) 
            this.online = !this.online 
            api.put('panels/5f88d29ed3ee981e10d7c1ac', {active: true})    
        }else{
            this.$bvToast.toast('Caixa fechado', {
            title: 'Finalizado',
            autoHideDelay: 1500,
            variant:"danger",
            solid: true
            })  
            this.online = !this.online    
            api.put('panels/5f88d29ed3ee981e10d7c1ac', {active: false})           
        }
        
        
      },
      async handleCreateNewTable() {          
        if (this.mesas != this.comanda || this.mesas != '') {   
            this.comanda = Number(this.comanda)  
            if(isNaN(this.comanda)){
                 this.$bvToast.toast('Por favor, escreva um valor numérico', {
                    title: 'Erro',
                    autoHideDelay: 3000,
                    variant:"danger",
                    solid: true
                })
                this.comanda = ''
                return
             }            

            await api.post('/tables', {id: this.comanda})
            this.mesas = this.mesas.concat(this.comanda)
        }else{
            this.$bvToast.toast('Algo deu errado, digite um numero novo ', {
            title: 'Erro',
            autoHideDelay: 3000,
            variant:"danger",
            solid: true
            })
        }        
      },
      async handleCreateNewOrder() {
        if (this.orders != this.comanda || this.orders != '' ) {                       
            console.log(typeof this.comanda, this.comanda)            
            
            await api.post('/tables', this.comanda)
            this.orders = this.orders.concat(this.comanda)
        }else{
            this.$bvToast.toast('Algo deu errado, verifique se o nome da mesa ja foi adicionado', {
            title: 'Erro',
            autoHideDelay: 3000,
            variant:"danger",
            solid: true
            })
        }        
      },
      
      addCommand() {
          this.request = true
      },
      addItem(){
          this.items = this.items.concat(this.addItems)
      },
      finish(){
          this.$refs['modalFinish'].show()
      },
    },
    created: async function () {
    this.$nextTick(async function () {
        await api.get('panels').then((res)=>{  
          this.online = res.data[0].active
        })   
        await api.get('tables').then((res)=>{  
          console.log('API GET > ', res.data)
          res.data.map(table =>{ 
            const { id } = table
            const new_table = {
              id: id
            }
            this.mesas = this.mesas.concat(new_table)
          })
          
        })   
    })
  } 
}
</script>

<style scoped>
.salePanel{
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
  border-radius:5px; 
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
}
.btnDanger{
    margin-top:20px;
}
.pesquise{
    border-radius: 20px; 
    justify-content: center;
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