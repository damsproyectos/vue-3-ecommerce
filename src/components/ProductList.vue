<script lang="ts">
import type { CartDetail, Product } from '../model/types';
import ProductCard from './ProductCard.vue';
import Cart from './Cart.vue';

export default {
    components: {
        ProductCard,
        Cart
    },
    data() {
        return {
            products: <Array<Product>> [
                { name: 'Silla', price: 56, id: 1},
                { name: 'Monitor', price: 450, id: 2},
                { name: 'Micrófono', price: 120, id: 3},
                { name: 'Mouse', price: 15, id: 4},
                { name: 'Tablet', price: 700, id: 5},
                { name: 'Pantalla', price: 512, id: 6},
                { name: 'Usb', price: 10, id: 7},
            ],
            details: <Array<CartDetail>>[]
        };
    },
    methods: {
        onProductAdded(productId: number) {
            // console.log('Agregar producto ' + productId);
            const detailFound = this.details.find(d => d.productId === productId);
            
            // console.log(detailFound);
            if (detailFound) {
                //+1
                detailFound.quantity += 1;
            } else {
                this.details.push({
                    productId,
                    quantity: 1 
                }); 
            }            
        }
    },
}
</script>

<template>
    <v-row>
        <v-col v-for="p in products" cols="4">
            <ProductCard
                :product="p"
                @addProduct="onProductAdded(p.id)"/>
        </v-col>
    </v-row>
    <!-- <Cart :details="[{productId: 3, quantity: 100}]"/> -->
    <Cart :details="details"/>
</template>