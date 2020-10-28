<template>
    <div class="container"
        style="width: 1440px;height: 100vh;"
    >
       <div 
            class="fixed-top d-flex align-items-center justify-content-center"
            style="bottom: 0; overflow-y: auto"
       >
           <b-card
                class="col-4"
            >
            <div>
                 <img src="../../assets/Conecta1.png" alt="logo" width=100 height=100>
            </div>
           
                    <label class="label" for="email">Email:</label>
                        <b-form-input
                            type="email"
                            id="email"
                            class="input"
                            v-model="form.email"
                            placeholder="E-mail"
                        ></b-form-input>

                    <label class="label" for="password">Senha:</label>
                        <b-form-input
                            type="password"
                            id="password"
                            class="input"
                            v-model="form.password"
                            placeholder="Senha"
                        ></b-form-input>
                    

                <b-button @click="login()" class="btn1 col-12" variant="primary" :disabled="loading">Entrar</b-button>
                
                <b-spinner class="mt-4" variant="primary" label="Spinning" v-if="loading"></b-spinner>
            </b-card>
       </div>
        
            

    </div>
</template>

<script>
/* import { mapGetters, mapActions } from "vuex" */
  export default {
    data() {
      return {
          form:{
              email:'',
              password:'',
            },
            loading:false,
      }
    },
    /* computed: {
		...mapGetters(["loading"]),
	}, */
    methods: {
      /* computend e sincrona e whatch e pra monitorar mudanças
      }, */
      login() {
            this.loading = true
            this.$bvToast.toast('Login efetuado com sucesso', {
            title: 'Sucesso',
            autoHideDelay: 1500,
            variant:"success",
            solid: true
            })
            setTimeout(()=>{
                {this.$router.push({ name: "Dashboard"})}
            },3000)	
      },
    }
  }
</script>

<style scoped>
.container{
    background-color:#7F85DE ;
    flex: 1;
    margin: 0 0 0 0;
}
.card{
    min-width: 300px;
    border-radius:10px; 
}
.btn1{
    border-radius:20px; 
    margin-top: 10px;
}
.label{
    float: left;
    font-size: 12px;
    margin-bottom:0 ;
    margin-top: 7px ;
    font-family: Roboto;
}
.input{
    border-radius: 20px;
}
</style>