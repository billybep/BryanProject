<template>
   <v-container>
       <v-layout row wrap>
           <v-flex xs12>
               <v-card class="info">
                   <v-container fluid>
                       <v-layout row>
                           <v-flex xs5 sm4 md3>
                                <v-card-media
                                    src="https://source.unsplash.com/daily?music"
                                    height="130px"
                                ></v-card-media>
                           </v-flex>
                           <v-flex xs7 sm8 md9>
                               <v-card-title primary-title>
                               <div>
                                <h5 class="white--text mb-0">Title Card</h5>
                                <div>Subtitle and Quotes</div>
                               </div>
                               </v-card-title>
                               <v-card-actions>
                                   <v-btn flat>
                                       <v-icon left light>arrow_forward</v-icon>
                                       View
                                   </v-btn>
                               </v-card-actions>
                           </v-flex>
                       </v-layout>
                   </v-container>
               </v-card>
           </v-flex>
       </v-layout>
   </v-container>
</template>
