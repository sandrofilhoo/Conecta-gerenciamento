<template>
  <div>
    <div class="home">
      <b-row class="col-12 ml-2">
        <div class="mr-3">
          <b-icon icon="pie-chart-fill" scale="2"></b-icon>
        </div>
        <h4>Dashboard</h4>
      </b-row>
      <!--  -->
      <div>
        <div class="col-12 justify-content-center">
          <b-card-group deck>
            <b-card :class="mode === 'dark' ? 'light' : 'dark'">
              <b-icon icon="arrow-down" color="#3BB800" scale="2"></b-icon>
              <h2>R${{ panel.entrada }}</h2>
              <b-card-text>
                Entrada
                <b-icon
                  icon="info-circle"
                  v-b-popover.hover.top="'Faturamento em tempo real.'"
                  variant="secondary"
                ></b-icon>
              </b-card-text>
            </b-card>

            <b-card :class="mode === 'dark' ? 'light' : 'dark'">
              <b-icon icon="arrow-up" color="#ff9d00" scale="2"></b-icon>
              <h2>R${{ panel.saida }}</h2>
              <b-card-text>
                Saida
                <b-icon
                  icon="info-circle"
                  v-b-popover.hover.top="'Dispesas em tempo real.'"
                  variant="secondary"
                ></b-icon>
              </b-card-text>
            </b-card>

            <b-card :class="mode === 'dark' ? 'light' : 'dark'">
              <b-icon icon="circle-fill" color="#3BB800" scale="1.5"></b-icon>
              <h2>{{panel.mesas_ativas}}</h2>
              <b-card-text>
                Mesas ativas
                <b-icon
                  icon="info-circle"
                  v-b-popover.hover.top="'Mesas ocupadas em tempo real.'"
                  variant="secondary"
                ></b-icon>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
      <!--  -->
      <LineBox />
      <!--  -->
      <div style="margin-top: 20px">
        <div class="col-12 justify-content-center">
          <b-card-group deck>
            <b-card :class="mode === 'dark' ? 'light' : 'dark'">
              <b-card-text>
                <h3>
                  Faturamento
                  <b-icon
                    icon="info-circle"
                    scale="0.8"
                    v-b-popover.hover.top="
                      'Faturamento em reais durante a semana.'
                    "
                    variant="secondary"
                  ></b-icon>
                  <hr />
                </h3>
              </b-card-text>
              <v-chart :options="line" :loading="loading" />
            </b-card>

            <b-card :class="mode === 'dark' ? 'light' : 'dark'">
              <b-card-text>
                <h3>
                  Mais vendidos
                  <b-icon
                    icon="info-circle"
                    scale="0.8"
                    v-b-popover.hover.top="'Produtos mais vendidos.'"
                    variant="secondary"
                  ></b-icon>
                  <hr />
                </h3>
              </b-card-text>
              <v-chart :options="option" :loading="loading" />
            </b-card>
          </b-card-group>
        </div>
      </div>
      <LineBoxDespesa />
    </div>
  </div>
</template>


<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";

import LineBox from "@/components/LineBox.vue";
import LineBoxDespesa from "@/components/LineBoxDespesa.vue";

import {api} from '../../services/api.js'

export default {
  metaInfo: {
    title: "Dashboard",
  },
  components: {
    "v-chart": ECharts,
    LineBox,
    LineBoxDespesa,
  },
  data() {
    return {
      panel: {
        entrada: 0,
        saida: 0,
        mesas_ativas: 0
      },
      mode: "dark",
      loading: true,      
      line: {
        title: {
          text: "ECharts",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado",
            "Domingo",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            color: "#7F85DE",
            type: "line",
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "24",
                fontWeight: "bold",
              },
            },
            areaStyle: {
              color: "#7F85DE",
            },
          },
        ],
      },
      option: {
        aria: {
          show: true,
        },
        title: {
          text: "Source of user access to a site",
          x: "center",
        },
        series: [
          {
            Name: "access source",
            type: "pie",
            label: {
              show: true,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "24",
                fontWeight: "bold",
              },
            },
            data: [
              { value: 335, name: "Chopp" },
              { value: 310, name: "Pizza" },
              { value: 234, name: "Batata" },
              { value: 135, name: "frita" },
              { value: 1548, name: "Cerveja" },
              { value: 154, name: "Refrigerante" },
            ],
          },
        ],
      },
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.avatar = this.avatar.concat(this.form);
      this.$refs["my-modal"].hide();
      console.log(this.avatar);
    },
  },
  created: function () {
    this.$nextTick(async function () {
      api.get('tables').then((res)=>{ 
          this.panel.mesas_ativas = res.data.length
      })   
    })
  } 
};
</script>


<style scoped>
/* .cards {
  width:500px ;
  height:300px ;
} */
.home {
  margin: 65px 5px 5px 75px;
}
/* .title{
  display: flex;
  margin-left: 10px;
}
.title h1{
  margin-left: -10px;
} */
.card {
  border-radius: 10px;
  justify-content: center;
  /* background-color: #7F85DE; */
  box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  flex: 1;
  font-family: Roboto;
}
.echarts {
  max-width: 550px;
  max-height: 400px;
}
.ref {
  display: flex;
  background-color: #bdbebd;
  height: 50px;
  justify-content: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.dark {
  background-color: #97afd5; /* 545457 */
  color: #fff;
}
.light {
  background-color: #fff;
}
</style>

