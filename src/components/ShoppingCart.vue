<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default {
    methods: {
        decrementQuantity(productId: number) {
            this.cartStore.decrement(productId);
        },
        incrementQuantity(productId: number) {
            this.cartStore.increment(productId);
        },
        deleteProduct(productId: number) {
            this.cartStore.deleteProduct(productId);
        }
    },
    computed: {
        cartStore() {
          return useCartStore();  
        },
        details() {
            return this.cartStore.details;
        }   
    }
}
</script>

<template>
    <v-card class="mt-4">
        <v-card-text>
            <v-card-title>
                Productos agregados al carrito
            </v-card-title>

            <v-list v-if="details.length > 0">
                <v-list-item 
                    v-for="detail in details" 
                    :key="detail.product.id">
                <v-list-item-title>
                        {{ detail.product.name }} 
                         
                        <v-btn 
                           class="ml-2"
                           icon="mdi-minus"
                           size="x-small" 
                           @click="decrementQuantity(detail.product.id)" />                              
                        Cantidad: {{ detail.quantity }}
                        
                        <v-btn
                           icon="mdi-plus" 
                           size="x-small" 
                           @click="incrementQuantity(detail.product.id)" />
                       
                        <v-btn 
                           class="ml-2"
                           icon="mdi-delete"
                           size="x-small"
                        @click="deleteProduct(detail.product.id)" />
                </v-list-item-title>
                </v-list-item>
            </v-list>
            <p v-else>
                Aún no has agregado items a tu carrito de compras.
                Haz <RouterLink to="/">click aquí</RouterLink> para ver los productos disponibles.
            </p>
        </v-card-text>
    </v-card>
</template>