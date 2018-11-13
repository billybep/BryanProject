<template>
    <v-container fluid>
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
                               <v-card-actions>
                                    <p><small>Harga-$$$</small> |</p>
                                    <v-rating 
                                        v-model="rating"
                                        color="yellow accent-4"
                                        dense
                                        hover
                                        size="14"></v-rating>
                                    <small>Ulasan (10)</small>
                                    
                               </v-card-actions>
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
                        </v-layout>
                        <v-layout row xs12>
                            <v-flex class="red">
                                <v-img
                                    :src="vendor.cardImg"
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
            }
        }
        
    }
</script>

<style scoped>

</style>
