import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {readLocalStorage} from '@/common/utils.js'

let defaultCity =  '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
} catch(e){}
const state = {
  city: defaultCity
}
import mutations from './mutations.js'
import actions from './actions.js'
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
