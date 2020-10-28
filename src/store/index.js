import Vue from 'vue'
import Vuex from 'vuex'
import app from "./modulo/app.module"
import config from "./modulo/Config.module"
import dashboard from "./modulo/Dashboard.module"
import discount from "./modulo/DiscountCoupon.module"
import event from "./modulo/Event.module"
import inventory from "./modulo/Inventory.module"
import menu from "./modulo/Menu.module"
import order from "./modulo/Order.module"
import salepanel from "./modulo/SalePanel.module"
import user from "./modulo/User.module"

Vue.use(Vuex)

export default new Vuex.Store({
	strict: false,
	modules: {
		app,
		config,
		dashboard,
		discount,
		event,
		inventory,
		menu,
		order,
		salepanel,
		user,
	},
})
/* export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}) */
