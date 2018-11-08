<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 md3 lg2 offset-sm1 offset-md6>
                <v-card class="info">
                    <v-container fluid>
                        <v-layout row align-center>

                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                                    class="rounded-circle" 
                                    alt="woman avatar">
                                ></v-card-media>
                            </v-flex>

                            <v-flex xs7 sm8 md9 class="ml-2">
                                <v-card-title primary-title>
                                    <div>
                                        <h5 class="white--text mb-0">My Title 1</h5>
                                        <div>My Subtitle 1</div>
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
