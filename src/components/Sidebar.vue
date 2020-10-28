<template>
  <div class="sidebar" style="display:flex">
    <vuescroll :ops="ops">
      <div class="bar" >
      
        <ul>

          <li>
            <router-link to="/dashboard">
              <b-icon icon="pie-chart-fill" class="mt-3 mb-2" aria-hidden="true" font-scale="2.5"></b-icon>
              <span style="font-size:12px">Dashboard</span>   
              <div v-if="$route.name === 'Dashboard'" class="marc"></div>    
            </router-link>
            <hr>
          </li>

          <li>
            <router-link to="/inventory">
                <b-icon icon="card-checklist" aria-hidden="true" font-scale="2.5"></b-icon>
                <span style="font-size:12px">Inventario</span>
                <div v-if="$route.name === 'Inventory'" class="marc"></div>
            </router-link>
            <hr>
          </li>

          <li>
            <router-link to="/users">
              <b-icon icon="person-circle" aria-hidden="true" font-scale="2.5"></b-icon>
              <span style="font-size:10px">Conta</span>
              <div v-if="$route.name === 'Users'" class="marc"></div>
            </router-link>
            <hr>
          </li>

          <li>
            <router-link to="/sale-panel">
              <b-icon icon="shop" aria-hidden="true" font-scale="2.5"></b-icon>
              <span style="font-size:10px">Painel de vendas</span> 
              <div v-if="$route.name === 'Sale-panel'" class="marc"></div>
            </router-link>
            <hr>
          </li>

          <li>
            <router-link to="/event">
              <b-icon icon="calendar-check" aria-hidden="true" font-scale="2.5"></b-icon>
              <span style="font-size:10px">Evento</span>
              <div v-if="$route.name === 'Event'" class="marc"></div>
            </router-link>
            <hr>
          </li>

          <li>
            <router-link to="/menu">
              <b-icon icon="clipboard" aria-hidden="true" font-scale="2.5"></b-icon>
              <span style="font-size:10px">Cardapio</span>
              <div v-if="$route.name === 'Menu'" class="marc"></div>
            </router-link>
          </li>
          <hr>
          <li>
            <router-link to="/discount-coupon">
                <b-icon icon="percent" aria-hidden="true" font-scale="2.5"></b-icon>
                <span style="font-size:10px">Cupom de desconto</span>
                <div v-if="$route.name == 'Discount-coupon'" class="marc"></div>
            </router-link>
          </li>
          <hr>
          <li>
            <router-link to="/order">
              <b-icon icon="truck" aria-hidden="true" font-scale="2.5"></b-icon>
              <span style="font-size:10px">Pedido</span>
              <div v-if="$route.name === 'Order'" class="marc"></div>
            </router-link>
            
          </li>
          <hr>
          <!-- <li>
            <router-link to="/config">
                <b-icon icon="gear" aria-hidden="true" font-scale="2.5"></b-icon>
                <span style="font-size:10px">Configurações</span>
                <div v-if="$route.name === 'Config'" class="marc"></div>
            </router-link>
          </li>
          <hr> -->
        </ul>
        
      </div>
    </vuescroll>
    <!-- <div class="linha-vertical"></div> -->
  </div>
</template>

<script>
import vuescroll from 'vuescroll';

export default {
  components: {
    vuescroll
  },
  data() {
    return {
      operation: {
        bar: {
          size: '5px',
          opacity: 0,
          onlyShowBarOnScroll: false
        }
      },
      ops: {
        bar: {
          background: '#cecece',
          keepShow: false,
          size: '5px',
          minSize: 0
        },
        scrollButton: {
          enable: true,
          background: '#cecece'
        },
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 500
        },
        vuescroll: {
          wheelScrollDuration: 0,
          wheelDirectionReverse: false
        }
      },
      width: '',
      dataCount: 1024,
      items: []
    };
  },
}
</script>
<style scoped>
.sidebar{
  width:67px ;
  height: 100%;
  position:fixed;
  margin: 0 ;
  margin-top: 47px;
  border-right: 1px solid #A9A9A9;
  margin-bottom: 20px;
}
/* .linha-vertical {
  height: 500px;
  border-left: 1px solid;
} */
.bar{
  background-color: #ffffff;
  /* margin-left: 2px; */
  margin-top: 5px;
  margin-bottom: 30px;
  border-right: 1px solid #A9A9A9;
}
.span{
  background-color: #fff;
  
}
ul {
  list-style-type: none;
  padding: 0;
} 
vuescroll{
  color: aqua;
} 
.bar a{
  text-decoration: none;
}
a{
  color: #000;
  opacity: 0.8;
}
/* .bar ul li{
  position:relative;
  top:0;
  padding:4px;
  transition: all .2s ease-in-out
}

.bar ul li:hover{
  top:-4px;
  box-shadow:0 4px 3px #999;
} */
.bar a.router-link-exact-active {
  /* color: #008080; */
  /* color: #0000CD; */
  color: #4169E1;
}
.marc{
  width: 66px;
  height: 7px;
  /* background: linear-gradient(to right,#008080,#48D1CC); */
  /* background: linear-gradient(to right,#0000CD,#6495ED); */
  background-color: #4169E1;
  /* border-bottom: 20px solid #008080;
  border-right: 20px solid transparent;
  margin-right:0;
  margin-top:0; */
  margin-bottom: -16px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
