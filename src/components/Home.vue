<template>
<v-container fluid class="pa-1">
    <!-- Loading Spinner -->
        <v-layout>
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

    <v-container class="card-columns">
        <app-card></app-card>
    </v-container>
</v-container>
</template>

<script>
    import Card from '@/components/Vendor/Card'
    import CardTest from '@/components/Vendor/CardTest'


    export default {
        components: {
            appCard: Card,
            appCardTest: CardTest
        },
        computed: {
        // Loading state
            loading () {
                return this.$store.getters.loading
            }
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
