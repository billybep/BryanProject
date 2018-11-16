import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedVendors: [],
    vendor: null,
    loading: false,
    error: null
  },
  mutations: {
    // Ambil data dari firebase ke state
    setLoadedServices (state, payload) {
        state.loadedVendors = payload
    },

    // Ambil Data dari CreateVendorService simpan ke Vuex Store
    createVendorService (state, payload) {
        state.loadedVendors.push(payload)
    },

    // Vendor payload == id, avatar
    setVendor (state, payload) {
        state.vendor = payload
    },

    // 
    setLoading (state, payload) {
        state.loading = payload
    },

    // 
    setError (state, payload) {
        state.error = payload
    },

    // 
    clearError (state) {
        state.error = null
    }

  },
  actions: {
    // Load Services from firebase
    loadServices ({commit}) {
        commit('setLoading', true)
        firebase.database().ref('services').once('value')
            .then((data) => {
                const services = []
                const obj = data.val()
                for (let key in obj) {
                    services.push({
                        id: key,
                        title: obj[key].title,
                        kategori: obj[key].kategori,
                        lokasi: obj[key].lokasi,
                        imageUrl: obj[key].imageUrl,
                        date: obj[key].date,
                        creatorId: obj[key].creatorId
                    })
                }               
                commit('setLoadedServices', services)
                commit('setLoading', false)
            })
            .catch((error) => {
                console.log(error)
                commit('setLoading', true)
            })
    },

    // destructuring payload CreateVendorService
    createVendorService ({commit, getters}, payload) {
        const vendorService = {
            vendorName: payload.vendorName,
            title: payload.title,
            kategori: payload.kategori,
            lokasi: payload.lokasi,
            imageUrl: payload.imageUrl,
            date: payload.date.toISOString(),
            creatorId: getters.vendor.id
        }
        // Reach out to firebase and store it
        firebase.database().ref('services').push(vendorService)
            .then((data) => {
                const key = data.key;
                commit('createVendorService', {
                    ...vendorService,
                    id: key
                })
            })
            .catch((error) => {
                console.log(error)
            })
    },

    // Vendor SignUp
    signupVendor ({commit}, payload) {
        // while reach the server(sukses/tidak) we loading
        commit('setLoading', true)
        commit('clearError')

        // autentikasi ke firebase
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            // return promise, store ke vuex store > vendor
            .then(
                vendor => {
                    // Setelah signup loading selesai
                    commit('setLoading', false)

                    // vendor on firebase = user
                    const newVendor = {
                        id: vendor.user.uid,
                        avatar: '',
                        vendorServices: []
                    }
                    commit('setVendor', newVendor)
                }
            )
            .catch(
                error => {
                    // loading proses selesai saat ada error
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error);
                }
            )
    },

    // Vendor Signin
    //  payload dari page signin input ke firebase
    signinVendor ({commit}, payload) {
        // while reach the server(sukses/tidak) we loading
        commit('setLoading', true)
        commit('clearError')
        
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            // promise sukes/tidak
            .then(
                vendor => {
                    // Setelah signup loading selesai
                    commit('setLoading', false)

                    // vendor on firebase = user
                    const newVendor = {
                        id: vendor.user.uid,
                        avatar: '',
                        vendorServices: []
                    }
                    commit('setVendor', newVendor)
                } 
            )
            .catch(
                error => {
                    // loading proses selesai saat ada error
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                }
            )
    },
    // Auto signin payload from firebase user UID
    autoSignin ({commit}, payload) {
        commit('setVendor', { id: payload.uid })
    },
    // Logout
    logout({commit}) {
        // remove firebase token from local storage
        firebase.auth().signOut()
        // set state vendor to null
        commit('setVendor',null)
    },
    clearError ({commit}) {
        commit('clearError')
    }
  },
  getters: {
    loadedVendors (state) {
      return state.loadedVendors.sort((vendorA, vendorB) => {
        return vendorA.date > vendorB.date
      })
    },
    featuredVendors (state, getters) {
      return getters.loadedVendors.slice(0, 20)
    },
    loadedVendor (state) {
      return (vendorId) => {
        return state.loadedVendors.find((vendor) => {
          return vendor.id === vendorId
        })
      }
    },
    vendor (state) {
        return state.vendor
    },
    loading (state) {
        return state.loading
    },
    error (state) {
        return state.error
    }
  }
})