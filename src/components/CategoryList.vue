<script lang="ts">
import type { Category } from '@/model/types';

export default {
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
        selectCategory(categoryId: number) {
            this.$router.push({
                 name: 'category', 
                 params: { categoryId } 
            })
        }
    },
}
</script>

<template>
   <v-sheet rounded="lg">
        <v-list rounded="lg">
        <v-list-item
            v-for="category in categories"
            :key="category.id"
            link
            @click="selectCategory(category.id)"

            :title="`${ category.name }`"
        >
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item
            color="grey-lighten-4"
            link
            title="Order by price"
        ></v-list-item>
        </v-list>
    </v-sheet>
</template>