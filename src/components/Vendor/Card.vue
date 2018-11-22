<template>
<v-container class="pa-0">

    <v-dialog 
    v-model="dialog" 
    max-width="600px">
    <app-test-dialog></app-test-dialog>
    </v-dialog>

<v-layout 
    class="card-flex"
    v-for="vendor in vendors" 
    :key="vendor.id">

    <!-- @click="onLoadCard(item.id)" -->
    <v-hover>
    

    <v-card class="card"
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`">
        
        <router-link
            tag="span" 
            style="cursor: pointer"
            :to="'/vendor/' + vendor.id">
            <v-img  
                :src="vendor.imageUrl"
                max-height="600px">
            </v-img>
        </router-link>

        <!-- <div class="card-img-overlay">
            <h3 class="card-title" style="color: white;">{{ item.cardTitle }}</h3>
            <h4 class="card-subtitle" style="color: white;">{{ item.cardSubtitle}}</h4>
            <p class="card-text" style="color: white;">{{ item.cardText }}</p>
        </div> -->

        <div class="card-body">
            <div class="row">
            <!-- Avatar -->
                <div class="col-xs-12 white">
                    <v-img  
                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                         class="rounded-circle" 
                         alt="woman avatar">
                    </v-img>
                 </div>
                 <div class="avatar-text col">
                    <p class="card-title">
                        <router-link 
                            tag="span" 
                            style="cursor: pointer"
                            :to="'/vendor-services/' + vendor.id">Woman Avatar(Vendor)
                        </router-link>
                    </p> 
                    <p class="card-text">
                        <small>{{ vendor.kategori }}</small> | <small>{{ vendor.lokasi }}</small>
                    </p>
                </div>
            </div>
        </div>

    </v-card>

</v-hover>
</v-layout> 
</v-container>

</template>

<script>
import TestDialog from "@/components/Vendor/TestDialog";

export default {
  components: {
    appTestDialog: TestDialog
  },
  data() {
    return {
      rating: 4,
      dialog: false
    };
  },
  computed: {
    vendors() {
      return this.$store.getters.loadedVendors;
    }
  },
  methods: {
    onLoadCard(id) {
      this.dialog = true;
      // this.$router.push('/vendor/' + id)
    }
  }
};
</script>

<style>
.card-flex {
  display: inline;
}

.rounded-circle {
  margin: 0 3px 0 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}

.card-title {
  margin: 0px 0px;
}
</style>

