<script lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
// export default {
//   data() {
//     return {
//       details: [{productId: 5, quantity: 3}]
//     };
//   }
// }
export default {
  components: {
    TopBar
  }
}
</script>

<template>
  <v-app>
    <TopBar />

    <v-main>
      <v-container>
        <!-- <RouterView :details="details" /> -->
        <RouterView/>
      </v-container>
    </v-main>    
  </v-app>
</template>