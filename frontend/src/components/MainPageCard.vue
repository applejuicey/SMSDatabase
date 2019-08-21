<template>
  <div>
    <v-card class="elevation-1 transparent" style="height: 350px">
      <v-card-text class="text-xs-center">
        <v-icon x-large class="primary--text">{{cardInfo.iconName}}</v-icon>
      </v-card-text>
      <v-card-title primary-title class="justify-center">
        <div class="headline text-xs-center">{{cardInfo.cardTitle}}</div>
      </v-card-title>
      <v-card-text class="text-sm-justify">{{cardInfo.cardText}}</v-card-text>
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

</style>