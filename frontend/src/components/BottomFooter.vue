<template>
  <div>
    <v-footer color="primary">
      <v-layout justify-center row>
        <v-flex primary text-xs-center xs12 class="white--text font-sui font-weight-light">
          &copy;2020 — <strong>Saponins Mass Spectrometry Database</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'bottomFooter',
    data: () => ({

    }),
    components: {

    },
  }
</script>

<style scoped>
.font-sui {
  font-family: Segoe UI, sans-serif !important;
}
</style>