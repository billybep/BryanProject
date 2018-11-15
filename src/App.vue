<template>
  <v-app>
    <!-- Sidebar Only for Medium | Small Screen -->
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list>
        <v-list-tile 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Top Navbar -->
    <v-toolbar fixed dark class="blue darken-4">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">BrianMusicProject</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
          flat 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.link">
          <i dark class="material-icons">{{ item.icon }}</i>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- For Main Content WebApp -->
    <main>
      <!-- Search Content Componen -->
      <app-filter-mix style="margin-top: 63px"></app-filter-mix>
      
      <!-- Loading Spinner -->
        <v-layout>
          <v-flex xs12 class="text-xs-center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="grey"
              indeterminate
              v-if="loading"
            ></v-progress-circular>
          </v-flex>
        </v-layout>

      <router-view></router-view>
        
    </main>
  </v-app>
</template>

<script>
import FilterMix from '@/components/FilterMix'

// menuItems: [
//         { icon: 'create', title: 'Create Service', link: '/vendor-service/new' },
//         { icon: 'supervisor_account', title: 'User Account', link: '/vendor-services' },
//         { icon: 'person', title: 'Profile', link: '/profile' },
//         { icon: 'face', title: 'Sign up', link: '/signup' },
//         { icon: 'lock_open', title: 'Sign in', link: '/signin' }
//       ]

export default {
  data () {
    return {
      sideNav: false,
    }
  },
  computed: {
    menuItems () {
      // Menu sebelum vendor signin (guess menu)
      let menuItems = [
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' }
      ]
      // jika user/vendor is authentikasi
      if (this.vendorIsAuthenticated) {
        menuItems = [
          { icon: 'create', title: 'Create Service', link: '/vendor-service/new' },
          { icon: 'person', title: 'Profile', link: '/profile' },
          { icon: 'supervisor_account', title: 'User Account', link: '/vendor-services' }
        ]
      }
      return menuItems
    },
    // Cek autentikasi
    vendorIsAuthenticated () {
      return this.$store.getters.vendor !== null && this.$store.getters.vendor !== undefined
    },
    // Loading state
    loading () {
      return this.$store.getters.loading
    }
  },
  components: {
    appFilterMix: FilterMix
  }
}
</script>
