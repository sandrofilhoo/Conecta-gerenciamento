<template>              
  <div class="menu">
    <b-row class="lt col-12">
      <div class="header">
        <div class="col-1 mr-4">
          <b-icon icon="clipboard" scale="2"></b-icon>
        </div>
        <h4 class="ml-3">Cardapio</h4>
      </div>
      <b-button @click="showModal" class="btn1" variant="primary">+ adicionar</b-button>
      <b-modal ref="my-modal" hide-footer title="Criar usuario">
        <b-row class="col-12 d-flex mb-3">
          <b-form-group
          class="mb-0 mr-4"
          label="Nome:"
          label-for="input-1"
          >
            <b-form-input
                id="input-1"
                v-model="form.name"
                placeholder="Nome"
            ></b-form-input>
          </b-form-group>
        </b-row>
        <b-form-group
          class="mb-0 mt-3"
          label="Imagem:"
          >
            <b-form-file type="file" v-model="form.file" @change="onFileSelected"></b-form-file>
        </b-form-group>
        <b-button class="mt-3 col-5 float-right" variant="primary" @click="hideModal">Enviar</b-button>
      </b-modal>
    </b-row>
    
    <b-row class="mt-3">
			<b-col lg="4" xs="12" v-for="(cardapio,index) in cardapios" :key="index" class="mb-2 ">
				<b-card 
            @click="$router.push({ name: 'Menu-details', params: { id: cardapio.id } })"
            class="cardapio"
          
        >
          <img src="../../assets/imagem/faces/allegro.png">
					<div class="ul-widget-app__header mb-30 mt-3">
            <h5 class="text-mute">{{ cardapio.name }}</h5>
					</div>
					<div class="ul-widget-card__rate-icon align-items-center">
						<span v-if="1 ==''" class="text-success">ATIVO</span>
						<span class="text-danger">DESATIVADO</span>
					</div>
				</b-card>
			</b-col>
      <div v-if="cardapios ==''" class="col-12">
            <div class="mt-5" >
                <h3>Adicione um cardapio para ter acesso a outras funcionalidades</h3>
            </div>  
      </div>
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
              file:null,
          },
          product: '',
          lista:[],
          pedidos:'',
          cardapios:[]
          
      }
    },
    methods: {
      /* submitMsg() {
        console.log(this.lista)
        console.log(this.product)
        this.lista = this.lista.concat(this.product)
        console.log(this.lista)
      }, */
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        const { name } = this.form 

        const new_menu = {
          name:name,
          image: 'teste',
        }
        api.post('/menus', new_menu)
        this.cardapios = this.cardapios.concat(this.form)
        this.$refs['my-modal'].hide()
        console.log(new_menu)
      },
      onFileSelected(event){
        this.form.file = event.target.files[0]
      }
    },
    created: function () {
      this.$nextTick(async function () {
        api.get('/menus').then((res)=>{
          res.data.map( menu => {
              const new_menu = {
                name: menu.name,
                file: menu.image
              }

             this.cardapios = this.cardapios.concat(new_menu)
          })
        })        
      })
    } 
  }
</script>

<style scoped>
.menu{
  margin: 65px 5px 5px 75px;
    height: 92vh;
}
.btn1{
    border-radius:20px; 
}
.lt{
    justify-content:space-between;
}
.header{
    display: flex;
}
.card{
  border-radius:10px; 
  justify-content:center;
  flex:1;
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
}
.card:hover{
  top:-4px;
  box-shadow:0 4px 3px #999;
} 
img{
  width: 300px;
  height: 300px;
  position: relative;
} 
</style>