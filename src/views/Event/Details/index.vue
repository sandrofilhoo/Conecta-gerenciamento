<template>
    <div class="order">
        <b-row class="mt-3">
          <b-col lg="10" xs="12" class="mb-2 ">
            <b-card
            >
            <h3>name</h3>
            <hr>
              <b-row class="col-12 d-flex mt-5 mb-3">
                <b-form-group
                  class="col-6"
                >
                  <label for="input-1">Nome:</label>
                  <b-form-input
                    id="input-1"
                    v-model="form.nome"
                    placeholder="Nome do evento"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    class="col-6"
                >
                  <label for="Data">Data:</label>
                  <b-form-input
                    id="Data"
                    type="date"
                    v-model="form.data"
                    placeholder="Data do evento"
                  ></b-form-input>
                </b-form-group>
              </b-row>
              <div class="btnU">
                <b-button class="mt-3 col-5" variant="primary" @click="hendleFinish">Finalizar</b-button>
                <b-button class="mt-3 col-5" variant="danger" @click="hendleDelet">Exclui</b-button>
              </div>
            </b-card>
          </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form:{
          nome:'',
          data:'',
        },
      }
    },
    methods: {
    },
  }
</script>

<style scoped>
.order{
    min-height: 750px;
    margin: 65px 5px 5px 75px;
}
label{
  float: left;
}
.btnU{
    justify-content: space-between;
    display: flex;
}
.card{
  border-radius:10px; 
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
  margin-left: 170px;
  margin-top: 20%;
}

</style>