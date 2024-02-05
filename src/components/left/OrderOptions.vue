<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useProductsStore } from '@/stores/products';

export default {
    methods: {
        ...mapActions(useProductsStore, [
            'orderByPrice', 'orderByPriceDesc',
            'orderByName', 'orderByNameDesc'
        ])
    },
    computed: {
        ...mapState(useProductsStore, ['order'])
    }
}
</script>

<template>
    <v-list-subheader>Orden</v-list-subheader>
    <v-list-item link @click="orderByPrice" :active="order === 'price'" 
        title="Más económico">
    </v-list-item>
    <v-list-item link @click="orderByPriceDesc" :active="order === 'priceDesc'"
        title="Más costoso">
    </v-list-item>
    <v-list-item link @click="orderByName" :active="order === 'name'" 
        title="Nombre (A-Z)">
    </v-list-item>
    <v-list-item link @click="orderByNameDesc" :active="order === 'nameDesc'"
        title="Nombre (Z-A)">
    </v-list-item>
</template>