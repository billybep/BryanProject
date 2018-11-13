import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedVendors: [
      {   id:'qwe1',
          cardTitle: 'Title 1', 
          cardSubtitle: 'Subtitle 1', 
          cardText: 'Card quote 1', 
          cardImg: 'https://source.unsplash.com/daily?nature',
          date: '2018-11-13' 
      },
      {   id:'qwe2',                     
          cardTitle: 'Title 2', 
          cardSubtitle: 'Subtitle 2', 
          cardText: 'Card quote 2', 
          cardImg: 'https://source.unsplash.com/daily?sky',
          date: '2018-11-13' 
      },
      {   id:'qwe3',
          cardTitle: 'Title 3', 
          cardSubtitle: 'Subtitle 3', 
          cardText: 'Card quote 3', 
          cardImg: 'https://source.unsplash.com/daily?rock',
          date: '2018-11-13' 
      },
      {   id:'qwe4',
          cardTitle: 'Title 4', 
          cardSubtitle: 'Subtitle 4', 
          cardText: 'Card quote 4', 
          cardImg: 'https://source.unsplash.com/daily',
          date: '2018-11-13' 
      },
      {   id:'qwe5',
          cardTitle: 'Title 5', 
          cardSubtitle: 'Subtitle 5', 
          cardText: 'Card quote 5', 
          cardImg: 'https://source.unsplash.com/daily?wood',
          date: '2018-11-13' 
      },
      {   id:'qwe6',
          cardTitle: 'Title 6', 
          cardSubtitle: 'Subtitle 6', 
          cardText: 'Card quote 6', 
          cardImg: 'https://source.unsplash.com/weekly?water',
          date: '2018-11-13' 
      },
      {   id:'qwe7',
          cardTitle: 'Title 1', 
          cardSubtitle: 'Subtitle 1', 
          cardText: 'Card quote 1', 
          cardImg: 'https://source.unsplash.com/daily?a',
          date: '2018-11-13' 
      },
      {   id:'qwe8',
          cardTitle: 'Title 2', 
          cardSubtitle: 'Subtitle 2', 
          cardText: 'Card quote 2', 
          cardImg: 'https://source.unsplash.com/daily?tech',
          date: '2018-11-13' 
      },
      {   id:'qwe9',
          cardTitle: 'Title 3', 
          cardSubtitle: 'Subtitle 3', 
          cardText: 'Card quote 3', 
          cardImg: 'https://source.unsplash.com/collection/190727/800x600',
          date: '2018-11-13' 
      },
      {   id:'qwe10',
          cardTitle: 'Title 4', 
          cardSubtitle: 'Subtitle 4', 
          cardText: 'Card quote 4', 
          cardImg: 'https://source.unsplash.com/random',
          date: '2018-11-13' 
      },
      {   id:'qwe11',
          cardTitle: 'Title 5', 
          cardSubtitle: 'Subtitle 5', 
          cardText: 'Card quote 5', 
          cardImg: 'https://source.unsplash.com/daily?abstrack',
          date: '2018-11-13' 
      },
      {   id:'qwe12',
          cardTitle: 'Title 6', 
          cardSubtitle: 'Subtitle 6', 
          cardText: 'Card quote 6', 
          cardImg: 'https://source.unsplash.com/weekly',
          date: '2018-11-13' 
      },
      {   id:'qwe13',
          cardTitle: 'Title 1', 
          cardSubtitle: 'Subtitle 1', 
          cardText: 'Card quote 1', 
          cardImg: 'https://source.unsplash.com/daily?h',
          date: '2018-11-13' 
      },
      {   id:'qwe14',
          cardTitle: 'Title 2', 
          cardSubtitle: 'Subtitle 2', 
          cardText: 'Card quote 2', 
          cardImg: 'https://source.unsplash.com/daily?music',
          date: '2018-11-13' 
      },
      {   id:'qwe15',
          cardTitle: 'Title 3', 
          cardSubtitle: 'Subtitle 3', 
          cardText: 'Card quote 3', 
          cardImg: 'https://source.unsplash.com/user/erondu/daily',
          date: '2018-11-13' 
      },
      {   id:'qwe16',
          cardTitle: 'Title 4', 
          cardSubtitle: 'Subtitle 4', 
          cardText: 'Card quote 4', 
          cardImg: 'https://source.unsplash.com/random',
          date: '2018-11-13' 
      },
      {   id:'qwe17',
          cardTitle: 'Title 5', 
          cardSubtitle: 'Subtitle 5', 
          cardText: 'Card quote 5', 
          cardImg: 'https://source.unsplash.com/daily?design',
          date: '2018-11-13' 
      },
      {   id:'qwe18',
          cardTitle: 'Title 6', 
          cardSubtitle: 'Subtitle 6', 
          cardText: 'Card quote 6', 
          cardImg: 'https://source.unsplash.com/daily?z',
          date: '2018-11-13' 
      }
    ],
    user: {
      id: 'asdfa123',
      avatar: ''
    }
  },
  mutations: {
    // Ambil Data dari CreateVendorService simpan ke Vuex Store
    createVendorService (state, payload) {
        state.loadedVendors.push(payload)
    }
  },
  actions: {
    // destructuring payload CreateVendorService
    createVendorService ({commit}, payload) {
        const vendorService = {
            vendorName: payload.vendorName,
            title: payload.title,
            kategori: payload.kategori,
            lokasi: payload.lokasi,
            imageUrl: payload.imageUrl,
            date: payload.date,
            id: 'asdsazxcvzxcad321'
        }
        // Reach out to firebase and store it
        commit('createVendorService', vendorService)
    }
  },
  getters: {
    loadedVendors (state) {
      return state.loadedVendors.sort((vendorA, vendorB) => {
        return vendorA.date > vendorB.date
      })
    },
    featuredVendors (state, getters) {
      return getters.loadedVendors.slice(0)
    },
    loadedVendor (state) {
      return (vendorId) => {
        return state.loadedVendors.find((vendor) => {
          return vendor.id === vendorId
        })
      }
    }
  }
})
