import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import AlertComp from './components/Shared/Alert.vue'
import DateFilter from './filters/date'

Vue.config.productionTip = false

Vue.component('app-alert', AlertComp)

Vue.filter('dateFilter', DateFilter)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBe3HEcnXbOKYZGSIzKEfF6l9ftEPOs7MU",
      authDomain: "musicproject-1.firebaseapp.com",
      databaseURL: "https://musicproject-1.firebaseio.com",
      projectId: "musicproject-1",
      storageBucket: "musicproject-1.appspot.com",
    })
    this.$store.dispatch('loadServices')
  }
}).$mount('#app')
