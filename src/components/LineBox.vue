<template>
    <div class="d-flex mt-3" >
      <div class="col-8 ">
           <b-card :class="(mode ==='dark') ? 'dark' : 'light'">
            <b-card-text>
              <h3>
              Atendimento por atendentes
              <b-icon icon="info-circle" scale="0.8" v-b-popover.hover.top="'Quantidade de atendimento por atendentes.'" variant="secondary"></b-icon>
              <hr>
              </h3>
            </b-card-text>
            <v-chart :options="bar" :loading="loading"/>
          </b-card>
      </div>
      
      <div class="col-12 colun">
        <b-card :class="(mode ==='dark') ? 'dark' : 'light'" class="col-4">
          <b-card-text>
              <h4>
                Alerta de produtos
                <b-icon icon="info-circle" v-b-popover.hover.top="'Alerta de produtos com poucas unidades.'" variant="secondary"></b-icon>
              </h4>
              <hr>
            </b-card-text>
              <h2><b-badge href="/inventory" variant="danger">5</b-badge></h2>
            
          </b-card>

          <b-card :class="(mode ==='dark') ? 'dark' : 'light'" class="col-4 mt-3">
            <b-card-text>
              <h4>
                Ranking de atendentes
                <b-icon icon="info-circle"  v-b-popover.hover.top="'Ranking com a quantidade de atendimentos.'" variant="secondary"></b-icon>
              </h4>
              <hr>
              </b-card-text>
            <div >
              <label>Sandy:</label><!-- {{bar.xAxis.data}} -->  
              <b-progress value="63" max="max" show-progress animated></b-progress>
            </div>
            <div class="mt-1">
              <label>Marai:</label><b-progress value="5" variant="success" max="max" show-progress animated></b-progress>
            </div>
            <div class="mt-1">
              <label>Andre:</label>  <b-progress value="20" variant="warning" max="max" show-progress animated></b-progress>
            </div>
            <div class="mt-1">
              <label>Maria:</label>  <b-progress value="35" variant="danger" max="max" show-progress animated></b-progress>
            </div>
            <div class="mt-1">
              <label>Luiza:</label>  <b-progress value="10" variant="secondary" max="max" show-progress animated></b-progress>
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
  mode:'light',
  loading: true,
    bar: {
        title: {
            text: 'ECharts'
        },
        tooltip: {},
        xAxis: {
            data: ['Sandy', 'Luciana', 'Marai', 'Andre', 'Maria', 'Luiza']
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
            data: [5, 20, 36, 10, 10, 20],
            color: '#7F85DE'
        }]
      },
    }
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

/* .label{
  float:right;
} */
.dark{
  background-color: #97AFD5;/* 545457 */
  color: #fff;
}
.light{
  background-color: #fff ;

}
label{
  margin-right: 270px;
}
.colun{
  margin-left: -15px;
}
</style>

