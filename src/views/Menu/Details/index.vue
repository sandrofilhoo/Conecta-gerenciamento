<template>
    <div class="menusId">
      <div class="col-12 mr-4">
        <div class="col-12 d-flex">
          <b-card
            class="col-4"
          >
            <b-card-text >
                <div class="l1">
                    <div>
                        <label>On/Off:</label>
                    </div>
                    <label class="switch">
                        <input v-model="style" @click="styleThemer()" type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </b-card-text>
            <div class="labols">
                <b-form-group>
                <label for="input-1">Nome:</label>
                  <b-form-input
                      id="input-1"
                      v-model="form.name"
                      placeholder="Nome"
                  ></b-form-input>
                </b-form-group>
              <b-form-group >
                <label>Imagem:</label>
                  <b-form-file type="file" v-model="form.file" @change="onFileSelected"></b-form-file>
              </b-form-group>
              
              <div class="col-12 btn mb-5">
                <b-button class="col-5" variant="primary" @click="hideModal">Finalizar</b-button>
                <b-button class="col-5 ml-4" variant="danger" @click="hideModal">Excluir</b-button>
              </div>

              <p>Tire Print do qrcode para adicionar em sua arte</p>
              <div class="qr" >
                <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
              </div>
              
            </div>
            
          </b-card>
          <b-card
            class="col-8"
          >
            <div>
              <img src="../../../assets/imagem/faces/allegro.png" alt="">
            </div>
          </b-card>
        </div>
      </div>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
/* import {api} from '../../services/api' */
export default {
  components: {
      QrcodeVue,
    },
  data () {
    return {
      form:{
          name:'',
          file:null,
      },
      value: 'https://example.com',
      size: 300,
    }
  },
  methods: {
      /* submitMsg() {
        console.log(this.lista)
        console.log(this.product)
        this.lista = this.lista.concat(this.product)
        console.log(this.lista)
      }, 
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
      }*/
    },
  /* created: function () {
      this.$nextTick(async function () {
        api.get('/menu/:id').then((res)=>{
          res.data.map( menu => {
              const new_menu = {
                name: menu.name,
                file: menu.image
              }

             this.form = this.form.concat(new_menu)
          })
        })        
      })
    }  */
}
</script>

<style scoped>
.menusId{
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
  height: 730px;
  border-radius:5px; 
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
}
img{
  width: 100%;
  width: 500px;
  display: flex;
  flex: 1;
}
.labols label{
  margin-right: 250px;
}
.btn{
  margin-top: 5px ;
  margin-bottom: 5px;
  justify-content: space-between;
}
.qr{
  border:solid 1px;
}
</style>