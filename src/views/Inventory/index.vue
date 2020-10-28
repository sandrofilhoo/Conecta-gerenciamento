<template>
  <div class="conference">
     <!-- titulo da pagina com modal -->
       <b-row class="l1 col-12 ">
         <div class="ml-5 d-flex">
            <div>
              <b-icon icon="card-checklist" scale="2"></b-icon>
            </div>
            <h4 class="ml-3">Produtos</h4>
          </div>

          <div >
            <b-button class="btn1 mb-3" @click="showModal"  variant="primary">Adicionar produto</b-button>

            <b-modal ref="my-modal" hide-footer title="Produto">
              <b-row class="col-12 d-flex mb-3">
                <b-form-group
                  class="mb-0 mr-4"
                  label="Codigo:"
                  label-for="code"
                >
                  <b-form-input
                    id="code"
                    v-model="form.codigo"
                    placeholder="Codigo do produto"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  class="mb-0"
                  label="Nome:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.nome"
                    placeholder="Nome do produto"
                  ></b-form-input>
                </b-form-group>
              </b-row>

              <b-row class="col-12 d-flex mb-3">
                <b-form-group
                  class="mb-0 mr-4"
                  label="Quantidade:"
                  label-for="qtd"
                >
                  <b-form-input
                    id="qtd"
                    v-model="form.quantidade"
                    placeholder="Quantidade do produto"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  class="mb-0"
                  label="Valor:"
                  label-for="Valor"
                >
                  <b-form-input
                    id="Valor"
                    v-model="form.preco"
                    placeholder="R$"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  class="mb-0 mt-3"
                  label="Lucro:"
                  label-for="Lucro"
                >
                  <b-form-input
                    id="Lucro"
                    v-model="form.lucro"
                    placeholder="R$"
                  ></b-form-input>
                </b-form-group>
              </b-row>

              <b-button class=" btn mt-3 col-5 float-right" variant="primary"  @click="submitProduct()">Enviar</b-button>
            </b-modal>
          </div>
        </b-row>
        <!-- titulo da pagina com modal -->
    <div v-if="items ==''" class="my-5">
      <h5>Lista de produtos vazia, adicione um produto!</h5>
    </div>
    <div v-if="items !=''" class="col-12 d-flex">
        <div class="col-8 mr-1">
          <b-card >
            <h3>
              Inventario
              <b-icon icon="info-circle" v-b-popover.hover.top="'Adicione produtos para melhorar a experiencia.'" variant="secondary"></b-icon>
            </h3>
            
            
            <div class="overflow-auto">
              <b-table 
                @click="$router.push({ name: 'Inventory-details', params: { id: items.id } })"
                :items="items" 
                :fields="fields" 
                :tbody-tr-class="rowClass"
              ></b-table>
            </div>
            
          </b-card>
        </div>
      <!--  -->
      <div class="col-12">
        <b-card
          v-if="items !=''"
          style="max-width: 23rem;"
        >
          <b-card-text>
            <h3>
              Alertas
              <b-icon icon="info-circle" v-b-popover.hover.top="'Painel onde exibirá os alertas dos produto.'" variant="secondary"></b-icon>
            </h3>
            <hr>
            <div v-if="items ==''">
              <h5>Lista de produtos vazia, adicione um produto!</h5>
            </div>
            <div v-else-if="alerta =='0'">
              <h5>Sem produtos em falta</h5>
            </div>    
            <div v-else>
              <b-table
                id="my-table"
                :items="alert_items"
                small
              ></b-table>
            </div>        
          </b-card-text>
        </b-card>
      </div>
      
    </div>
  </div>
</template>

<script>
  import { api } from '../../services/api.js'

  export default {
    data() {
      return {
        alerta: 1,
        alert_items: [],
        form:{
          codigo:'',
          nome:'',
          quantidade:'',
          preco:'',
          lucro:'',
        },
        perPage: 15,
        currentPage: 100,
          product: '',
          lista:[],
          fields: ['codigo', 'nome', 'quantidade', 'preco', 'lucro'],
          items: [],
          alert:'',
          alertCards:[],
          status:null,
          status2:null,
      }
    },
    methods: {
      submitProduct() {
        this.items = this.items.concat(this.form)       

        const { codigo, nome, quantidade, preco, lucro} = this.form    
        const preco_replaced = preco.replace(',','.')   
        const lucro_replaced = lucro.replace(',','.')   

        const new_product = {
          code: Number(codigo),
          name: nome,
          amount: Number(quantidade),
          value: Number(preco_replaced),
          profit: Number(lucro_replaced)   
        } 
      
        console.log(new_product)

        api.post('products', new_product)
        
        this.$refs['my-modal'].hide()
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
      rowClass(item, type) {
        if (! item || type !== 'row' ) return 
        if (item.quantidade <= 10) return 'table-danger'
      }
    },
    created: function () {
      this.$nextTick(async function () {
        api.get('products').then((res)=>{
          res.data.map(product =>{ 
            const { code, name, amount, value, profit } = product
            const new_product = {
              codigo: code,
              nome: name,
              quantidade: amount,
              preco: value,
              lucro: profit
            }
            this.items = this.items.concat(new_product)

            if(amount < 10){
              this.alert_items = this.alert_items.concat({nome: name, quantidade: amount})
            }
          })    
                   
        })   
      })
    } 
  } 
</script>
<style scoped>
.conference {
  margin: 65px 5px 5px 75px;
  min-height: 750px;
}
.card{
  border-radius:10px; 
  justify-content:center;
  flex:1;
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
}
.echarts{
  width: 550px;
  height: 400px;
}
.ref{
  display: flex;
  background-color: #bdbebd;
  height:50px ;
  justify-content: center;
}
.pesquise{
  border-radius:20px; 
  justify-content:center;
  flex:1;
}
.btn1{
  border-radius:20px; 

}
.l1{
    display: flex;
    justify-content: space-between;
}
.alt{
  display: flex;
  justify-content: space-around;
}
.numberAlert{
  color: #ff0000;
}
</style>
