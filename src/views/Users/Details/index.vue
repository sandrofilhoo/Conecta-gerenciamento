<template>
    <div class="userId">
        <div class="mt-3">
            <b-card
              class="cardUser"
            >
            <img src="../../../assets/imagem/faces/allegro.png" class="mr-3"/>
              <b-row>
                    <b-form-group
                      class="col-6"
                    >
                    <label for="input-1">Nome:</label>
                      <b-form-input
                          id="input-1"
                          v-model="form.name"
                          placeholder="Nome"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      class="col-6"
                    >
                      <label for="selection">Função:</label>
                      <b-form-select id="selection" v-model="form.selected" :options="options">
                        <option :value="null">Selecione uma opção...</option>
                      </b-form-select>
                    </b-form-group>
                </b-row>
                <b-form-group
                    class="mb-0"
                >
                  <label for="input-2">E-mail:</label>
                  <b-form-input
                      type="email"
                      id="input-2"
                      v-model="form.email"
                      placeholder="E-mail"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    class="mb-0 mt-3"
                >
                  <label for="input-3">Senha:</label>
                  <b-form-input
                      type="password"
                      id="input-3"
                      v-model="form.password"
                      placeholder="Senha"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    class="mb-0 mt-3"
                >
                  <label>Imagem:</label>
                  <b-form-file type="image" v-model="form.file" plain></b-form-file>
                </b-form-group>
                <div class="btnU">
                  <b-button class="mt-3 col-5" variant="primary" @click="hendleFinish">Finalizar</b-button>
                  <b-button class="mt-3 col-5" variant="danger" @click="hendleDelet">Exclui</b-button>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>
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
      }
    },
    methods: {
      hendleFinish() {
        console.log("oi")
      },
      hendleDelet() {
        console.log("oi")
      },
    },
  }
</script>

<style scoped>
.userId{
    min-height: 750px;
    margin: 65px 5px 5px 75px;
}
.card{
  width: 500px;
  border-radius:10px; 
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
  left: 30%;
  margin-right: -50%;
}
label{
  float: left;
}
.btnU{
    justify-content: space-between;
    display: flex;
}
img{
  border-radius: 50%;
  width: 300px;
  height: 300px;
} 
.cardUser{
  margin: 0 0 0 0;
}
</style>