import Vue from 'vue'
import Vuex from 'vuex'
import {
  reqIcons,
  reqShopInfo,
  reqShops,
  reqOrder,
  reqFoods,
  reqCity,
  reqUserAddress
} from './api/api'
Vue.use(Vuex)
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    isLoading: false,
    swiperIcon: [],
    info: {},
    shops: [],
    order: [],
    foods: [],
    cities: {},
    hotCities: [],
    city: defaultCity,
    userAddress: []
  },
  mutations: {
    RECEIVE_ICONS (state, { swiperIcon }) {
      state.swiperIcon = swiperIcon
    },
    RECEIVE_INFO (state, { info }) {
      state.info = info
    },
    RECEIVE_SHOPS (state, { shops }) {
      state.shops = shops
    },
    RECEIVE_ORDER (state, { order }) {
      state.order = order
    },
    RECEIVE_FOODS (state, { foods }) {
      state.foods = foods
    },
    RECEIVE_CITIES (state, { cities, hotCities }) {
      state.cities = cities
      state.hotCities = hotCities
    },
    CHANGE_CITY (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    },
    RECEIVE_USERADDRESS (state, userAddress) {
      state.userAddress = userAddress
    }
  },
  actions: {
    async getIcons ({ commit }) {
      let result = await reqIcons()
      if (result.code === 0) {
        const swiperIcon = result.data
        commit('RECEIVE_ICONS', { swiperIcon })
      }
    },
    async getShopInfo ({ commit }) {
      const result = await reqShopInfo()
      if (result.code === 0) {
        const info = result.data
        commit('RECEIVE_INFO', { info })
      }
    },
    async getShops ({ commit }) {
      const result = await reqShops()
      if (result.code === 0) {
        const shops = result.data.data
        commit('RECEIVE_SHOPS', { shops })
      }
    },
    async getOrder ({ commit }) {
      const result = await reqOrder()
      if (result.code === 0) {
        const order = result.data.data
        commit('RECEIVE_ORDER', { order })
      }
    },
    async getFoods ({ commit }) {
      const result = await reqFoods()
      if (result.code === 0) {
        const foods = result.data
        commit('RECEIVE_FOODS', { foods })
      }
    },
    async getCitity ({ commit }) {
      const reuslt = await reqCity()
      const cities = reuslt.data.cities
      const hotCities = reuslt.data.hotCities
      commit('RECEIVE_CITIES', { cities, hotCities })
    },
    async getUserAddress ({ commit }) {
      const result = await reqUserAddress()
      const userAddress = result.data
      commit('RECEIVE_USERADDRESS', userAddress)
    }
  }
})
