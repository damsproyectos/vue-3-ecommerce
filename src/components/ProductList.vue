<script lang="ts">
import type { Product } from '../model/types';
import ProductCard from './ProductCard.vue';

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            products: [
                { name: 'Silla', price: 56, id: 1},
                { name: 'Monitor', price: 450, id: 2},
                { name: 'Micrófono', price: 120, id: 3},
                { name: 'Mouse', price: 15, id: 4},
                { name: 'Tablet', price: 700, id: 5},
                { name: 'Pantalla', price: 512, id: 6},
                { name: 'Usb', price: 10, id: 7},
                { name: 'Silla', price: 56, id: 1},
                { name: 'Monitor', price: 450, id: 2},
                { name: 'Micrófono', price: 120, id: 3},
                { name: 'Mouse', price: 15, id: 4},
                { name: 'Tablet', price: 700, id: 5},
                { name: 'Pantalla', price: 512, id: 6},
                { name: 'Usb', price: 10, id: 7},
                { name: 'Silla', price: 56, id: 1},
            ] as Product []
        };
    }
}
</script>

<template>
    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="4">
            <ProductCard
                :product="p" />
        </v-col>
    </v-row>
</template>