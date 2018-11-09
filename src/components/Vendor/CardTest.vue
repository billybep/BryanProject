<template>
   <v-container>
       <v-layout columns wrap align-center>
           <v-flex xs12 sm6 md4 lg3>
               <!-- Card Border -->
               <v-card class="info">
                   <v-container fluid>
                       <!-- Image Top -->
                       <v-layout row>
                                <v-card-media
                                    src="https://source.unsplash.com/daily?music"
                                    height="300px"
                                ></v-card-media>
                       </v-layout>

                       <!-- Card Body -->
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
                                        <h5 class="white--text mb-0">Title Card</h5>
                                        <div>Subtitle and Quotes</div>
                                    </div>
                               </v-card-title>
                           </v-flex>
                       </v-layout>
                   </v-container>
               </v-card>
           </v-flex>
           
       </v-layout>
   </v-container>
</template>
