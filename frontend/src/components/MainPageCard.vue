<template>
  <div>
    <v-card class="elevation-1 transparent" style="min-height: 400px">
      <v-card-text class="text-xs-center">
        <v-icon x-large class="primary--text">{{cardInfo.iconName}}</v-icon>
      </v-card-text>
      <v-card-title primary-title class="justify-center py-0">
        <div class="headline text-xs-center font-sui font-weight-thin">{{cardInfo.cardTitle}}</div>
      </v-card-title>
      <v-card-text class="font-sui font-weight-thin">{{cardInfo.cardText}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'MainPageCard',
    props: {
      cardInfo: Object,
    }
  }
</script>

<style scoped>
  .font-sui {
    font-family: Segoe UI, sans-serif !important;
  }
</style>