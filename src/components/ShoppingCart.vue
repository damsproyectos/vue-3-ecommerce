<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import ShoppingCartItem from './ShoppingCartItem.vue';

export default {
    components: { 
        ShoppingCartItem 
    },
    computed: {
        ...mapState(useCartStore, ['details'])   
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
               
                <ShoppingCartItem 
                    v-for="detail in details" 
                    :key="detail.product.id"
                    :detail="detail" />
            </v-list> 
            <p v-else>
                Aún no has agregado items a tu carrito de compras.
                Haz <RouterLink to="/">click aquí</RouterLink> para ver los productos disponibles.
            </p>
        </v-card-text>
    </v-card>
</template>