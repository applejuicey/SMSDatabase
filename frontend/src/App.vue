<template>
  <div id="app">
    <v-app id="app-wrapper">
      <top-nav-toolbar></top-nav-toolbar>
      <v-content>
        <router-view/>
        <bottom-footer></bottom-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import TopNavToolbar from '@/components/TopNavToolbar.vue';
  import BottomFooter from '@/components/BottomFooter.vue'
  export default {
    data: () => ({

    }),
    props: {

    },
    components: {
      TopNavToolbar,
      BottomFooter,
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
