<template>
    <div class="account">
        <b-row class="lt col-12">
            <div class="header">
                <div class="col-1 mr-4">
                    <b-icon icon="person-circle" scale="2"></b-icon>
                </div>
                <h4>Usuarios</h4>
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

                    <b-form-group
                    class="mb-0 mr-4"
                    label="Função:"
                    label-for="selection"
                    >
                    <b-form-select id="selection" v-model="form.selected" :options="options">
                      <option :value="null">Selecione uma opção...</option>
                    </b-form-select>
                    </b-form-group>
                </b-row>
                <b-form-group
                    class="mb-0"
                    label="E-mail:"
                    label-for="input-2"
                    >
                    <b-form-input
                        type="email"
                        id="input-2"
                        v-model="form.email"
                        placeholder="E-mail"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    class="mb-0 mt-3"
                    label="Senha:"
                    label-for="input-3"
                    >
                    <b-form-input
                        type="password"
                        id="input-3"
                        v-model="form.password"
                        placeholder="Senha"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    class="mb-0 mt-3"
                    label="Imagem:"
                    >
                    <b-form-file type="image" v-model="form.file" plain></b-form-file>
                </b-form-group>

                <b-button class="mt-3 col-5 float-right" variant="primary" @click="hideModal">Enviar</b-button>
            </b-modal>
        </b-row>
        
        <b-row class="mt-3">
          <b-col lg="6" xs="12" v-for="(avata,index) in avatars" :key="index" class="mb-2 ">
            <b-card
              :title="avata.name"
              @click="$router.push({ name: 'User-details', params: { id: avata.id } })"
            >
              <img src="../../assets/imagem/faces/allegro.png" class="mr-3"/>
              <div class="ul-widget-app__header mb-30 mt-3">
                <h5 class="text-mute">{{ avata.email }}</h5>
                <h5 class="text-mute"><strong>{{ avata.selected }}</strong></h5>
              </div>
              <div class="ul-widget-card__rate-icon align-items-center">
                <!-- <span v-if="zappush.online" class="text-success">ATIVO</span>
                <span v-else class="text-danger">DESATIVADO</span> -->
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
              selected: '',
              email:'',
              password:'',
              file: null,
          },
          options: [
                "Gerente",
                "Caixa",
                "Atendente"
                ],
          product: '',
          lista:[],
          pedidos:'',
          avatars:[]
          
      }
    },
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        console.log(this.form)
        const {name, email, password, selected, } = this.form

        const new_user = {
          name,
          email,
          password,
          image: 'teste',
          function: selected
        }
        console.log(new_user)

        api.post('/users', new_user)

        this.avatars =this.avatars.concat(this.form)
        this.$refs['my-modal'].hide()
      },
    },
    created: function () {
      this.$nextTick(async function () {
        api.get('/users').then((res)=>{
          res.data.map( user => {
              const usuario = {
                name: user.name,
                email: user.name,
                selected: user.function,
                file: user.image
              }

             this.avatars =this.avatars.concat(usuario)
          })
        })        
      })
    } 
  }
</script>

<style scoped>
.account{
    margin: 65px 5px 5px 75px;
    height: 87vh;
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
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
}
.card:hover{
  top:-2px;
  box-shadow:0 6px 2px rgba(0,0, 3, 0.1);
}
img{
  border-radius: 50%;
  width: 70px;
  height: 70px;
} 
</style>