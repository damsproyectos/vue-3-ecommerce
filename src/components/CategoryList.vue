<script lang="ts">
import type { Category } from '@/model/types';
import OrderOptions from './left/OrderOptions.vue';

export default {
    components: {
        OrderOptions
    },
    data() {
        return {
            categories: [{
                id: 1,
                name: 'Oficina',
                description: 'Productos para tu oficina'
            }, {
                id: 2,
                name: 'Computadora',
                description: 'Accesorios para computadora'
            }, {
                id: 3,
                name: 'Servicios',
                description: 'Servicios profesionales'
            }] as Category[]
        };
    },
    methods: {
        clearCategory() {
          this.$router.push({
                name: 'home'
            });  
        },
        goToCategory(categoryId: number) {
            this.$router.push({
                 name: 'category', 
                 params: { categoryId } 
            })
        },
    }
}
</script>

<template>
   <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-subheader>Categorías</v-list-subheader>
            <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
                <v-list-item-title>
                    Todas
                </v-list-item-title>
            </v-list-item>
            <v-list-item :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
                v-for="category in categories"
                :key="category.id"
                link
                @click="goToCategory(category.id)"
                :title="`${ category.name }`">
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <OrderOptions />
        </v-list>
    </v-sheet>
</template>