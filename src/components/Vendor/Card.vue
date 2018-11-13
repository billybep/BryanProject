<template>
<div class="card-flex">
    <!-- @click="onLoadCard(item.id)" -->
    <div 
        class="card" 
        v-for="vendor in vendors" 
        :key="vendor.id">
        
        <img 
            class="card-img-top" 
            :src="vendor.cardImg"
            max-height="600px"
            @click="dialog=true"
            alt="Card image top">
        <!-- <div class="card-img-overlay">
            <h3 class="card-title" style="color: white;">{{ item.cardTitle }}</h3>
            <h4 class="card-subtitle" style="color: white;">{{ item.cardSubtitle}}</h4>
            <p class="card-text" style="color: white;">{{ item.cardText }}</p>
        </div> -->

        <div class="card-body">
            <div class="row">
            <!-- Avatar -->
                <div class="col-xs-12 white">
                    <img 
                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                         class="rounded-circle" 
                         alt="woman avatar">
                 </div>
                 <div class="avatar-text col">
                    <p class="card-title">
                        <router-link 
                            tag="span" 
                            style="cursor: pointer"
                            :to="'/vendor/' + vendor.id"
                        >Woman Avatar
                        </router-link>
                    </p> 
                    <p class="card-text">
                        <small>Kategory - Lokasi</small>
                    </p>
                </div>
            </div>
        </div>

    </div>

    <!-- Dialogs -->
    <v-dialog
      v-model="dialog"
      fullscreen
    >
        <v-layout row wrap justify-center align-start>
            <v-flex xs12 lg2 m-1>
                <v-card>
                    <v-container fluid>
                       <v-layout row align-center>
                           <v-flex xs3>
                               <v-img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                                class="rounded-circle" 
                                alt="woman avatar"></v-img>
                           </v-flex>
                           <v-flex xs9>
                               <v-card-title primary-title>
                                    <div>
                                        <h5 class="mb-0">Woman Avatar</h5>
                                        <div><small>KATEGORI - LOKASI</small></div>
                                    </div>
                               </v-card-title>
                           </v-flex>
                       </v-layout>
                       <v-layout row align-center>
                           <v-flex xs12>
                               <v-card-text>
                                    <p><small>Harga-$$$</small> |</p>
                                    <v-rating 
                                        v-model="rating"
                                        color="yellow accent-4"
                                        dense
                                        hover
                                        size="14"></v-rating>
                                    <small>Ulasan (10)</small>
                                    
                               </v-card-text>
                           </v-flex>
                       </v-layout>
                       <v-divider></v-divider>
                       <v-layout row align-center>
                            <v-flex xs2> 
                                <v-icon class="material-icons">email</v-icon>
                            </v-flex>
                            <v-flex xs10 ml-1>
                                <v-card-text>: test@test.com</v-card-text>
                            </v-flex>
                       </v-layout>
                       <v-layout row align-center>
                            <v-flex xs2>
                                <v-icon class="material-icons">phone</v-icon>
                            </v-flex>
                            <v-flex xs10 ml-1>
                                <v-card-text>: xxxx-xxxx-xxxx</v-card-text>
                            </v-flex>
                       </v-layout>
                    </v-container>
                </v-card>
            </v-flex>

            <v-flex xs12 lg4 m-1>
                <v-card>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs12 pb-3>
                                <v-card-text class="pa-0 text-center"><h3 class="ma-0">Music Orchestra</h3></v-card-text>
                                <v-card-text class="pa-0 text-center">Kategory | Lokasi</v-card-text>
                            </v-flex>
                            <v-btn 
                                flat 
                                small
                                absolute
                                dark
                                fab     
                                right
                                color="blue darken-4"
                                @click="dialog = false">
                                <v-icon>clear</v-icon>
                            </v-btn>
                        </v-layout>
                        <v-layout row xs12>
                           
                            <v-flex class="red">
                                <v-img
                                    src="https://source.unsplash.com/daily?musicz"
                                    max-height="750px"
                                ></v-img>
                                
                            </v-flex>                  
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout row xs12>
                            
                                <img
                                    src="https://source.unsplash.com/daily?music" 
                                    aspect-ratio="1.7778"
                                    height="100"
                                    width="100">
                                <img 
                                    src="https://source.unsplash.com/daily?rock" 
                                    aspect-ratio="1.7778"
                                    height="100"
                                    width="100">
                                <img
                                    src="https://source.unsplash.com/daily?music" 
                                    aspect-ratio="1.7778"
                                    height="100"
                                    width="100">
                                <img 
                                    src="https://source.unsplash.com/daily?rock" 
                                    aspect-ratio="1.7778"
                                    height="100"
                                    width="100"> 
                                <img
                                    src="https://source.unsplash.com/daily?music" 
                                    aspect-ratio="1.7778"
                                    height="100"
                                    width="100">
                                <img 
                                    src="https://source.unsplash.com/daily?rock" 
                                    aspect-ratio="1.7778"
                                    height="100"
                                    width="100">                                 
                            
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout row xs12>
                            <v-card-actions class="pl-0">
                                <v-card-title class="pl-0">Share on </v-card-title>
                                <v-icon class="material-icons">mail</v-icon>
                            </v-card-actions>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
      

    </v-dialog>
    
</div> 
  
</template>

<script>

    export default {
        data () {
            return {
                dialog: false,
                rating: 4
            }
        },
        computed: {
            vendors () {
               return this.$store.getters.featuredVendors
            }
        },
        methods: {
            onLoadCard (id) {
                this.$router.push('/vendor/' + id)
            }
        }
    }
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

