<template>
   <v-container>
       <v-layout row warp>
            <v-flex xs12 lg8 offset-lg-2>
                <!-- Profile Card -->
                <v-card class="red">
                    <v-container mt-0 pt-0 class="blue">
                        <v-layout>
                            <v-flex xs12 class="grey">
                                <v-card-title class="headline"><h4>PROFILE</h4></v-card-title>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout row justify-center>
                            <v-flex class="grey" xs6 lg2 align-center>
                                <v-img  
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                                    class="rounded-circle" 
                                    alt="woman avatar"
                                    height="150px" width="150px"
                                >
                                    <div class="card-img-overlay">
                                        <v-btn dark flat fab>
                                            <v-icon>add_circle</v-icon>
                                        </v-btn>
                                    </div>
                                </v-img>
                            </v-flex>
                        </v-layout>
                        <v-layout row justify-center mt-2>
                            <form>
                                <div class="row mb-2">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Nama Depan">
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Nama Keluarga">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Nama Vendor">
                                    </div>
                                </div>
                                <v-divider></v-divider>
                                <div class="row mb-2">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Kategori">
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Lokasi">
                                    </div>
                                </div>
                                

                            </form>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
       </v-layout>
   </v-container>
</template>