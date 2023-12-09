<template>
  <HeaderComponent />
  
  <HomeViewComponent />
  
  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import FooterComponent from '@/components/Footer.vue';
import HomeViewComponent from '@/components/HomeViewComponent.vue';
import HeaderComponent from '@/components/Header.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    FooterComponent,
    HomeViewComponent,
    HeaderComponent,
  },
});
</script>
