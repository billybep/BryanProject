<template>
    <v-container class="card-columns">
       
                <!-- <v-card> -->
                    <app-card></app-card>
                    <!-- <app-card-test></app-card-test> -->

                    <!-- <v-card v-for="item in cardItems" :key="item.cardTitle">
                        <v-img :src="item.cardImg"></v-img>

                        <v-card-title primary-title>
                        <div>
                            <h4 class="headline mb-0">{{ item.cardTitle }}</h4>
                            <div>South of Sydney in the 
                            <br>Highlands of New South Wales</div>
                        </div>
                        </v-card-title>

                        <v-card-actions>
                        <v-btn flat color="info">Share</v-btn>
                        <v-btn flat color="info">Explore</v-btn>
                        </v-card-actions>
                    </v-card> -->


                <!-- </v-card> -->
        
            <!-- <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/vendor-services" class="info">Vendor</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/vendor-service/new" class="info">Create Service</v-btn>
            </v-flex> -->

    </v-container>
</template>

<script>
    import Card from '@/components/Vendor/Card'
    import CardTest from '@/components/Vendor/CardTest'


    export default {
        components: {
            appCard: Card,
            appCardTest: CardTest
        }
    }
</script>

<style>
.card-columns {
    column-count: 7;
}
@media screen and (max-width: 1870px) {
    .card-columns {
        column-count: 5;
    }
}
@media screen and (max-width: 1600px) {
    .card-columns {
        column-count: 4;
    }
}
@media screen and (max-width: 1250px) {
    .card-columns {
        column-count: 3;
    }
}
@media screen and (max-width: 960px) {
    .card-columns {
        column-count: 2;
    }
}
@media screen and (max-width: 480px) {
    .card-columns {
        column-count: 1;
    }
}



</style>
