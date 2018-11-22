<template>
    <v-container fluid>
        <v-layout row class="red">
            <v-flex>
                <app-card-test></app-card-test>    
            </v-flex>
        </v-layout>
        <v-layout row class="green">
            <v-flex>
                <app-portfolio></app-portfolio>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import SingleVendor from '@/components/Vendor/SingleVendor'
import CardTest from '@/components/Vendor/CardTest'
import Portfolio from '@/components/Vendor/Portfolio'


export default {
    data () {
        
    },
    components: {
        appCardTest: CardTest,
        appPortfolio: Portfolio
    }
}
</script>

