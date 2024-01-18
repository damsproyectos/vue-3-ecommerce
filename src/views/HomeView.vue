<script lang="ts">
  import CategoryList from '@/components/CategoryList.vue';
  import ProductList from '@/components/ProductList.vue';

  export default {
    components: {
    ProductList,
    CategoryList
}
    // props: ['details']
  }
</script>

<template>
  <main>
    <v-row>
     <v-col cols="2">
       <CategoryList/>
     </v-col>
     <v-col cols="10">
        <!-- <ProductList :details="details" />     -->
        <ProductList />
     </v-col>
    </v-row>         
  </main>
</template>
