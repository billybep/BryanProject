<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignin">
                                <!-- Email  -->
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="email"
                                        label="Mail"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <!-- Password -->
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="password"
                                        label="Password"
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <!-- Button -->
                                <v-layout>
                                    <v-flex>
                                        <v-btn type="submit">Sign in</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                // Bind Signin input tu data
                email: '',
                password: ''
            }
        },
        computed: {
            // vendor in vuex store
            vendor () {
                return this.$store.getters.vendor
            }
        },
        watch: {
            // pantau data dalam vendor
            vendor (value) {
                if (value !== null && value !== undefined) {
                    // setelah signin redirek ke homepage
                    this.$router.push('/')
                }
            }
        },
        methods: {
            onSignin () {
                // store to Vuex Store
                this.$store.dispatch('signinVendor', { email: this.email, password: this.password })

                console.log({ 
                    email: this.email, 
                    password: this.password,
                    })
            }
        }
    }
</script>