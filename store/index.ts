import Vue from 'vue'
import Vuex, { Module } from 'vuex'

import lists from './lists';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    lists,
  }
})