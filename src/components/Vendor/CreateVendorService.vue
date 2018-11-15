<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4 class="blue--text">Create Vendor Service</h4>
            </v-flex> 
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <form @submit.prevent="onCreateVendorService">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="vendorName"
                                label="Vendor Name"
                                id="vendor"
                                v-model="vendorName"
                                required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Title"
                                id="title"
                                v-model="title"
                                required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="kategori"
                                label="Kategori"
                                id="katagori"
                                v-model="kategori"
                                required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="lokasi"
                                label="Lokasi"
                                id="lokasi"
                                v-model="lokasi"
                                required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="imageUrl"
                                label="image URL"
                                id="image-Url"
                                v-model="imageUrl"
                                required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="200">
                        </v-flex>
                    </v-layout>

                    <!-- Date Picker -->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-3>
                            <v-menu
                                :close-on-content-click="false"
                                v-model="menu"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px">
                                <v-text-field
                                    slot="activator"
                                    v-model="date"
                                    label="Date"
                                    prepend-icon="event"
                                    readonly
                                    ></v-text-field>
                                    <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                            </v-menu>
                            <p>{{ date }}</p>
                        </v-flex>
                    </v-layout>

                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn 
                                class="blue" 
                                :disabled="!formIsValid"
                                type="submit">Create</v-btn>
                        </v-flex>
                    </v-layout>                        
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                vendorName: '',
                title: '',
                kategori: '',
                lokasi: '',
                imageUrl: '',
                date: new Date().toISOString().substr(0, 10),
                menu: false
            }
        },
        computed: {
            formIsValid () {
                return this.vendorName !== '' &&
                    this.title !== '' &&
                    this.kategori !== '' &&
                    this.lokasi !== '' &&
                    this.imageUrl !== ''
            },
            submittableDate () {
                const date = new Date(this.date)
                return date
            }
        },
        methods: {
            onCreateVendorService () {
                if (!this.formIsValid) {
                    return
                }
                // data dari inputForm
                const vendorServiceData = {
                    vendorName: this.vendorName,
                    title: this.title,
                    kategori: this.kategori,
                    lokasi: this.lokasi,
                    imageUrl: this.imageUrl,
                    date: this.submittableDate
                }
                // 
                this.$store.dispatch('createVendorService', vendorServiceData)
                this.$router.push('/')
            }
        }
    }
</script>