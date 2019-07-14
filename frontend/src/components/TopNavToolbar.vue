<template>
  <div>
    <v-toolbar color="primary" app>
      <v-toolbar-title class="cursor-pointer hidden-xs-only white--text"
                       @click="toHomePage()">Saponins Mass Spectrometry Database</v-toolbar-title>
      <v-toolbar-title class="cursor-pointer hidden-sm-and-up white--text"
                       @click="toHomePage()">SMSDatabase</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat class="white--text"
               @click="toClassifyPage()">
          <v-icon>view_module</v-icon>
          Classify
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn flat class="white--text"
               @click="toSearchPage()">
          <v-icon>search</v-icon>
          Search
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn flat class="white--text"
               @click="toCompoundPage()">
          <v-icon>list</v-icon>
          Metabolite
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn flat class="white--text"
               @click="toUserPage()">
          <v-icon>person</v-icon>
          Me
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-up white--text">
        <v-btn icon
               @click="toClassifyPage()">
          <v-icon>view_module</v-icon>
        </v-btn>
        <v-btn icon
               @click="toSearchPage()">
          <v-icon>search</v-icon>
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn icon
               @click="toCompoundPage()">
          <v-icon>list</v-icon>
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn icon
               @click="toUserPage()">
          <v-icon>person</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'topNavToolbar',
    data: () => ({

    }),
    components: {

    },
    methods: {
      toHomePage: function () {
        this.$router.push({ name: 'home' })
      },
      toSearchPage: function () {
        this.$router.push({ name: 'search' })
      },
      toCompoundPage: function () {
        this.$router.push({ name: 'search-metabolite' })
      },
      toClassifyPage: function () {
        this.$router.push({ name: 'classify' })
      },
      toUserPage: function () {
        this.$router.push({ name: 'user' })
      },
    },
  }
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>