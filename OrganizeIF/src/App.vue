<template>
  <ion-app>
    <Menu />
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Menu from './views/MenuSide.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu,
  }
});
</script>

<style>
/* nav{
  margin-bottom: 10px;
} */
</style>