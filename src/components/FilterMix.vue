<template>
    <v-container fluid style="padding: 0 0">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card dark color="blue darken-4">
                    <v-img
                        src="https://source.unsplash.com/daily?music"
                        height="150px"
                    ></v-img>
                    <div class="card-img-overlay">
                        <v-layout justify-center>
                            <v-flex xs1 sm1 mr-3 d-flex>
                                <v-select
                                :items="kategori"
                                label="Kategory"
                                outline
                                ></v-select>
                            </v-flex>
                            <v-flex xs1 sm1 mr-3 d-flex>
                                <v-select
                                :items="lokasi"
                                label="Kota"
                                outline
                                ></v-select>
                            </v-flex>
                            <v-flex xs1 sm1 mr-3 d-flex>
                                <v-select
                                :items="harga"
                                label="Harga"
                                outline
                                ></v-select>
                            </v-flex>

                            <v-btn fab dark small color="white">
                            <v-icon color="blue darken-4">search</v-icon>
                            </v-btn>
                        </v-layout>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      kategori: ['Piano', 'Guitar', 'Bass', 'Orchestra'],
      lokasi: ['Manado', 'Jakarta', 'Semarang', 'Tomohon'],
      harga: ['$$$','$$$$']
    })
  }
</script>