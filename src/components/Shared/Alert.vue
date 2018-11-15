<template>
    <v-alert error dismissible v-model="onClose">
        {{ text }}
    </v-alert>
</template>

<script>
    export default {
        props: ['text'],
        methods: {
            onClose () {
                this.$emit('dismissed')
            }
        }
    }
</script>