import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedVendors: [
        // {   id:'qwe1',
        //     cardTitle: 'Title 1', 
        //     cardSubtitle: 'Subtitle 1', 
        //     cardText: 'Card quote 1', 
        //     imageUrl: 'https://source.unsplash.com/daily?nature',
        //     kategori: 'band',
        //     location: 'manado',
        //     date: new Date() 
        // },
        // {   id:'qwe2',                     
        //     cardTitle: 'Title 2', 
        //     cardSubtitle: 'Subtitle 2', 
        //     cardText: 'Card quote 2', 
        //     imageUrl: 'https://source.unsplash.com/daily?sky',
        //     kategori: 'bass-player',
        //     location: 'manado',
        //     date: new Date()
        // },
        // {   id:'qwe3',
        //     cardTitle: 'Title 3', 
        //     cardSubtitle: 'Subtitle 3', 
        //     cardText: 'Card quote 3', 
        //     imageUrl: 'https://source.unsplash.com/daily?rock',
        //     kategori: 'guitar-teacher',
        //     location: 'manado',
        //     date: new Date()
        // },
        // {   id:'qwe4',
        //     cardTitle: 'Title 4', 
        //     cardSubtitle: 'Subtitle 4', 
        //     cardText: 'Card quote 4', 
        //     imageUrl: 'https://source.unsplash.com/daily',
        //     kategori: 'Orchestra',
        //     location: 'manado',
        //     date: new Date()
        // },
        // {   id:'qwe5',
        //     cardTitle: 'Title 5', 
        //     cardSubtitle: 'Subtitle 5', 
        //     cardText: 'Card quote 5', 
        //     imageUrl: 'https://source.unsplash.com/daily?wood',
        //     kategori: 'Piano-Player',
        //     location: 'tomohon',
        //     date: new Date() 
        // },
        // {   id:'qwe6',
        //     cardTitle: 'Title 6', 
        //     cardSubtitle: 'Subtitle 6', 
        //     cardText: 'Card quote 6', 
        //     imageUrl: 'https://source.unsplash.com/weekly?water',
        //     kategori: 'Full Band',
        //     location: 'tondano',
        //     date: new Date() 
        // },
        // {   id:'qwe7',
        //     cardTitle: 'Title 1', 
        //     cardSubtitle: 'Subtitle 1', 
        //     cardText: 'Card quote 1', 
        //     imageUrl: 'https://source.unsplash.com/daily?a',
        //     kategori: 'Acoustic Band',
        //     location: 'jakarta',
        //     date: new Date() 
        // },
        // {   id:'qwe8',
        //     cardTitle: 'Title 2', 
        //     cardSubtitle: 'Subtitle 2', 
        //     cardText: 'Card quote 2', 
        //     imageUrl: 'https://source.unsplash.com/daily?tech',
        //     kategori: 'test1',
        //     location: 'manado',
        //     date: new Date() 
        // },
        // {   id:'qwe9',
        //     cardTitle: 'Title 3', 
        //     cardSubtitle: 'Subtitle 3', 
        //     cardText: 'Card quote 3', 
        //     imageUrl: 'https://source.unsplash.com/collection/190727/800x600',
        //     kategori: 'Drum-Teacher',
        //     location: 'jakarta',
        //     date: new Date() 
        // },
        // {   id:'qwe10',
        //     cardTitle: 'Title 4', 
        //     cardSubtitle: 'Subtitle 4', 
        //     cardText: 'Card quote 4', 
        //     imageUrl: 'https://source.unsplash.com/random',
        //     kategori: 'Full Band',
        //     location: 'semarang',
        //     date: new Date() 
        // },
        // {   id:'qwe11',
        //     cardTitle: 'Title 5', 
        //     cardSubtitle: 'Subtitle 5', 
        //     cardText: 'Card quote 5', 
        //     imageUrl: 'https://source.unsplash.com/daily?abstrack',
        //     kategori: 'test2',
        //     location: 'manado',
        //     date: new Date() 
        // },
        // {   id:'qwe12',
        //     cardTitle: 'Title 6', 
        //     cardSubtitle: 'Subtitle 6', 
        //     cardText: 'Card quote 6', 
        //     imageUrl: 'https://source.unsplash.com/weekly',
        //     kategori: 'Guitar-Player',
        //     location: 'tomohon',
        //     date: new Date() 
        // },
        // {   id:'qwe13',
        //     cardTitle: 'Title 1', 
        //     cardSubtitle: 'Subtitle 1', 
        //     cardText: 'Card quote 1', 
        //     imageUrl: 'https://source.unsplash.com/daily?h',
        //     kategori: 'Guitar-Teacher',
        //     location: 'tondano',
        //     date: new Date() 
        // },
        // {   id:'qwe14',
        //     cardTitle: 'Title 2', 
        //     cardSubtitle: 'Subtitle 2', 
        //     cardText: 'Card quote 2', 
        //     imageUrl: 'https://source.unsplash.com/daily?music',
        //     kategori: 'test3',
        //     location: 'jakarta',
        //     date: new Date() 
        // },
        // {   id:'qwe15',
        //     cardTitle: 'Title 3', 
        //     cardSubtitle: 'Subtitle 3', 
        //     cardText: 'Card quote 3', 
        //     imageUrl: 'https://source.unsplash.com/user/erondu/daily',
        //     kategori: 'test4',
        //     location: 'manado',
        //     date: new Date() 
        // },
        // {   id:'qwe16',
        //     cardTitle: 'Title 4', 
        //     cardSubtitle: 'Subtitle 4', 
        //     cardText: 'Card quote 4', 
        //     imageUrl: 'https://source.unsplash.com/random',
        //     kategori: 'test5',
        //     location: 'semarang',
        //     date: new Date() 
        // },
        // {   id:'qwe17',
        //     cardTitle: 'Title 5', 
        //     cardSubtitle: 'Subtitle 5', 
        //     cardText: 'Card quote 5', 
        //     imageUrl: 'https://source.unsplash.com/daily?design',
        //     kategori: 'test6',
        //     location: 'jakarta',
        //     date: new Date()
        // },
        // {   id:'qwe18',
        //     cardTitle: 'Title 6', 
        //     cardSubtitle: 'Subtitle 6', 
        //     cardText: 'Card quote 6', 
        //     imageUrl: 'https://source.unsplash.com/daily?z',
        //     kategori: 'test7',
        //     location: 'manado',
        //     date: new Date() 
        // }
      ],
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
                        date: obj[key].date
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
    createVendorService ({commit}, payload) {
        const vendorService = {
            vendorName: payload.vendorName,
            title: payload.title,
            kategori: payload.kategori,
            lokasi: payload.lokasi,
            imageUrl: payload.imageUrl,
            date: payload.date.toISOString()
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