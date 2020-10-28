<template>
    <div class="d-flex mt-3" >
      <div class="col-8">
          <b-card :class="(mode ==='dark') ? 'light' : 'dark'">
            <b-card-text>
              <h3>
              Despesas
              <b-icon icon="info-circle" scale="0.8" v-b-popover.hover.top="'Dispesas detalhada.'" variant="secondary"></b-icon>
              <hr>
              </h3>
            </b-card-text>
            <v-chart :options="bar" :loading="loading" />
          </b-card>
      </div>
      
        <div class="col-12 calendar">
          <!-- <b-card :class="(mode ==='dark') ? 'dark' : 'light'" class="col-4 ">
            <b-card-text>
              <h3>
                Fluxo de caixa
                <b-icon icon="info-circle" v-b-popover.hover.top="'Movimentação (entrada e saida) do caixa.'" variant="secondary"></b-icon>
              </h3>
              <hr>
              <div class="Positive">
                <p> Sandro Filho </p><strong><p> R$50,00</p></strong>
              </div>
              <div class="hours">
                <p>13:20</p>
              </div>
            </b-card-text>
          </b-card> -->

         <!--  <b-card :class="(mode ==='dark') ? 'dark' : 'light'" class="col-4 mt-3">
              <b-card-text>
                <h3>
                  Historico de dispesas
                  <b-icon icon="info-circle" v-b-popover.hover.top="'Historico de saida do caixa.'" variant="secondary"></b-icon>
                </h3>
                <hr>
                <div class="grind">
                  <p> Sandro Filho </p><strong><p> R$50,00</p></strong>
                </div>
                <div class="hours">
                  <p>13:20</p>
                </div>
              </b-card-text>
          </b-card> -->

          <!-- <b-card :class="(mode ==='dark') ? 'dark' : 'light'"  class="col-4 mt-3">
            <b-dropdown class="menuDrop" text="Dropdown Button">
              <b-dropdown-item>Historico de dispesas</b-dropdown-item>
              <b-dropdown-item>Fluxo de caixa</b-dropdown-item>
            </b-dropdown>
          </b-card> -->
          
          <b-card :class="(mode ==='dark') ? 'light' : 'dark'" class="col-4 d-flex">
             <b-card-text>
              <h3>
              Calendario
              <b-icon icon="info-circle" scale="0.8" v-b-popover.hover.top="'Crie um alerta para datas de pagamentos'" variant="secondary"></b-icon>
              </h3>
              <hr>
            </b-card-text>
            <div>
              <h5>Vence hoje</h5><h2><b-badge href="/event" variant="danger">5</b-badge></h2>
              <h5>Perto do vencimento</h5><h2><b-badge href="/event" variant="warning">5</b-badge></h2>
            </div>
          </b-card>
        </div>
    </div>
</template>
<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'

export default {
  components: {
    'v-chart': ECharts
  },
  data () {
return {
    mode:'dark',
    dispesa:'',
    lista:[],
    value: '',
    loading: true,
    bar: {
        title: {
            text: 'ECharts'
        },
        tooltip: {},
        xAxis: {
            data: ['Refrigerante', 'Comida', 'Limpeza', 'Agua', 'Luz', 'Funcionario']
        },
        yAxis: {},
        series: [{
            name: 'Clouds',
            type: 'bar',
            label: {
                show: false,
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '24',
                    fontWeight: 'bold'
                }
            },
            data: [1200, 549, 76, 120, 350, 950],
            color: '#ff0000'
        }]
      },
    }
  },
  methods: {
      submitMsg() {
        this.lista = this.lista.concat(this.dispesa)
      },
      showModal() {
        this.$refs['my-modal'].show()
      },
    }
}
</script>


<style scoped>
.card{
  border-radius:10px; 
  justify-content:center;
  flex: 1;
  /* background-color: #7F85DE; */
  box-shadow: 0 4px 6px 2px rgba(0,0, 0, 0.1);
}
.echarts{
  width: 750px;
  height: 500px;
}
.grind{
  display: flex;
  justify-content:space-between;
}
.grind strong{
  color: #ff0000;
  
  /* margin-left: 10px; */
}
.Positive{
  display: flex;
  justify-content:space-between;
}
.Positive strong{
  color: #0eb251;
  /* margin-left: 10px; */
}
.hours{
  margin-top: -20px;
  font-size: 14px;
  color: #9da0a5;
}
.btn1{
  border-radius:20px; 

}
.pesquise{
  border-radius:20px; 
  justify-content:center;
  flex:1;
}
.menuDrop{
  width: 100%;
}
.calendar{
  margin-left: -15px;
}
.dark{
  background-color: #97afd5;
  color: #fff;
}
.light{
  background-color: #fff ;
  color: #000;
}
</style>

