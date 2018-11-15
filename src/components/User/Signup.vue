<template>
    <v-container>
        <!-- Alert Message -->
        <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignup">
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

                                <!-- Confirm Password -->
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        id="confirmPassword"
                                        v-model="confirmPassword"
                                        type="password"
                                        :rules="[comparePasswords]">
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <!-- Button -->
                                <v-layout>
                                    <v-flex>
                                        <v-btn type="submit" :disabled="loading" :loading="loading">
                                            Sign up
                                        </v-btn>
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
                // Bind Signup input tu data
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        computed: {
            comparePasswords () {
                return this.password !== this.confirmPassword ? 'Password do not match' : ''
            },
            
            // vendor in vuex store
            vendor () {
                return this.$store.getters.vendor
            },

            // 
            error () {
                return this.$store.getters.error
            },

            // 
            loading () {
                return this.$store.getters.loading
            }
        },
        watch: {
            // pantau data dalam vendor
            vendor (value) {
                if (value !== null && value !== undefined) {
                    // setelah signup redirek ke homepage
                    this.$router.push('/')
                }
            }
        },
        methods: {
            onSignup () {
                // store to Vuex Store
                this.$store.dispatch('signupVendor', { email: this.email, password: this.password })
            },
            onDismissed () {
                this.$store.dispatch('clearError')
            }
        }
    }
</script>
