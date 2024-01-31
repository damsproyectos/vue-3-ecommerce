<script lang="ts">
import ProductList from '@/components/ProductList.vue';
import CategoryList from '@/components/CategoryList.vue';
import { mapActions } from 'pinia';
import { useProductsStore } from '@/stores/products';

export default {
  components: {
  ProductList,
  CategoryList
  },
  methods: {
  
  },
  beforeRouteEnter(to, from) {
      console.log('beforeRouteEnter', to.params);
      const productsStore = useProductsStore();
      const categoryId = Number(to.params.categoryId);
      productsStore.selectCategory(categoryId);
  },
  beforeRouteUpdate(to, from) {
      console.log('beforeRouteUpdate', to.params);
      const productsStore = useProductsStore();
      const categoryId = Number(to.params.categoryId);
      productsStore.selectCategory(categoryId);
  }
}
</script>

<template>
  <main>
    <v-row>
     <v-col cols="2">
       <CategoryList/>
     </v-col>
     <v-col cols="10">
        <ProductList />
     </v-col>
    </v-row>         
  </main>
</template>
