<template>
    <div class="order">
        <b-row class="mt-3">
          <b-col lg="6" xs="12" class="mb-2 ">
            <b-card
            >
              <div class="ul-widget-app__header mb-30 mt-3">
                <h5 class="text-mute"><strong>order.name</strong></h5>
                <p class="text-mute">order.nameVend </p>
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
        submitProduct() {
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