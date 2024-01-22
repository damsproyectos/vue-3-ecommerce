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
                { name: 'Silla', price: 56, id: 1, image: '/silla.webp'},
                { name: 'Monitor', price: 450, id: 2, image: 'https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I'},
                { name: 'Micrófono', price: 120, id: 3, image: '/microfono.webp'},
                { name: 'Parlante', price: 15, id: 4},
                { name: 'Audífonos', price: 700, id: 5},
                { name: 'Mouse Gamer', price: 512, id: 6},
                { name: 'Memoria', price: 10, id: 7},
                { name: 'Portátil', price: 56, id: 8},
                { name: 'Computador de Escritorio', price: 450, id: 9},
                { name: 'Cargador', price: 120, id: 10},
                { name: 'Mouse', price: 15, id: 11},
                { name: 'Tablet', price: 700, id: 12},
                { name: 'Pantalla', price: 512, id: 13},
                { name: 'Usb', price: 10, id: 14},
                { name: 'Cable DMI', price: 56, id: 15},
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