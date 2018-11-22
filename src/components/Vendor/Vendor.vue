<template>
    <v-container fluid class="green">
        <!-- Loading Spinner -->
        <v-layout row wrap v-if="loading">
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

        <v-layout v-else row wrap justify-center align-start>
            <v-flex xs12 lg2 m-1>
                <v-card>
                    <v-container fluid pt-0>
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
                                        <h6 class="mb-0">Woman Avatar (Vendor)</h6>
                                        <div><small>{{ vendor.kategori }}</small> | <small>{{ vendor.lokasi }}</small></div>
                                    </div>
                               </v-card-title>
                           </v-flex>
                       </v-layout>
                       <v-divider></v-divider>
                       <v-layout 
                            row wrap 
                            align-center 
                            text-center>
                            <v-flex xs12 sm12>
                                <div>Harga-$$$</div>
                            </v-flex>
                            <v-flex xs12 sm12 lg12>
                                <v-rating 
                                    v-model="rating"
                                    color="yellow accent-4"
                                    dense
                                    hover
                                    size="14">
                                </v-rating>
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

            <v-flex xs12 lg5 m-1>
                <v-card>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs12 pb-3>
                                <v-card-text class="pa-0 text-center">
                                    <div class="headline ma-0">{{ vendor.title }}</div>
                                    <div><small> {{ vendor.date | dateFilter }} </small></div>
                                </v-card-text>
                            </v-flex>

                            <!-- Edit Service -->
                            <template v-if="vendorIsCreator">
                                <app-edit-service-details-dialog :vendor="vendor"></app-edit-service-details-dialog>                                  
                            </template>
                        </v-layout>
                        <v-layout row xs12>
                            <v-flex>
                                <v-img
                                    :src="vendor.imageUrl"
                                    max-height="750px"
                                ></v-img>
                            </v-flex>                  
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout row xs12>
                            <v-flex>
                                <v-tabs show-arrows height="100">
                                    <v-tabs-slider></v-tabs-slider>
                                    <v-tab
                                        v-for="i in 12"
                                        :href="'#tab-' + i"
                                        :key="i"
                                    >
                                        <v-img 
                                            src="https://source.unsplash.com/daily?"
                                            width="100px"
                                            height="100px"></v-img>
                                    </v-tab>                                 
                                </v-tabs>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>

                        <!-- Video -->
                        <v-layout row xs12 class="red">
                            <v-flex>
                                
                                        <iframe width="566" 
                                                height="320" 
                                                src="https://www.youtube.com/embed/nQWFzMvCfLE" 
                                                frameborder="1" 
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                                allowfullscreen></iframe>
                                
                            </v-flex>
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
    </v-container>
</template>

<script>
    export default { 
        data () {
            return {
                images: [
                    {   id: '1',
                        big: 'https://source.unsplash.com/daily?music',
                        thumb: 'https://source.unsplash.com/daily?music'
                    },
                    {   id: '2',
                        big: 'https://source.unsplash.com/daily?rock',
                        thumb: 'https://source.unsplash.com/daily?rock'
                    },
                    {   id: '3',
                        big: 'https://source.unsplash.com/daily?sky',
                        thumb: 'https://source.unsplash.com/daily?sky'
                    }
                ],
                rating: 3,
            }
        },
        props: ['id'],
        computed: {
            vendor (state) {
                return state.$store.getters.loadedVendor(this.id)
            },
            vendorIsAuthenticated () {
                return this.$store.getters.vendor !== null && this.$store.getters.vendor !== undefined
            },
            vendorIsCreator () {
                if(!this.vendorIsAuthenticated) {
                    return false
                }
                return this.$store.getters.vendor.id === this. vendor.creatorId
            },
            loading () {
                return this.$store.getters.loading
    }
        }
        
    }
</script>

<style scoped>

</style>
