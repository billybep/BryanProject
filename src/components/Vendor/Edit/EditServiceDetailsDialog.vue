<template>
    <v-dialog width="350" persistent v-model="editDialog">
        <v-btn fab small accent class="primary" slot="activator">
            <v-icon>edit</v-icon>
        </v-btn>

        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <span class="headline">Edit Service</span>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                name="title"
                                label="Title"
                                id="title"
                                v-model="editedTitle"
                                required
                            ></v-text-field>

                            <v-text-field
                                name="kategori"
                                label="Kategori"
                                id="kategori"
                                v-model="editedKategori"
                                required
                            ></v-text-field>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn flat @click="editDialog = false" class="blue--text darken-1">Cancel</v-btn>
                            <v-btn flat @click="onSaveChange" class="blue--text darken-1">Save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: ['vendor'],
        data () {
            return {
                editDialog: false,
                editedTitle: this.vendor.title,
                editedKategori: this.vendor.kategori
            }
        },
        methods: {
            onSaveChange () {
                if (this.editedTitle.trim() === '' || this.editedKategori.trim() === '') {
                    return
                }
                this.editDialog = false
                this.$store.dispatch('updateServiceData', {
                    id: this.vendor.id,
                    title: this.editedTitle,
                    kategori: this.editedKategori
                })
            }
        }
    }
</script>