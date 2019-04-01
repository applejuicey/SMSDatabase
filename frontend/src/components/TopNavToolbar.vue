<template>
  <div>
    <v-toolbar color="primary" app>
      <v-toolbar-title class="cursor-pointer hidden-xs-only white--text" @click="toHomePage()">Saponins Mass Spectrometry Database</v-toolbar-title>
      <v-toolbar-title class="cursor-pointer hidden-sm-and-up white--text" @click="toHomePage()">SMSDatabase</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat @click="toSearchPage()" class="white--text">
          <v-icon>search</v-icon>
          Search
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn flat @click="toAboutPage()" class="white--text">
          <v-icon>info</v-icon>
          About
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn flat class="white--text">
          <v-icon>perm_contact_calendar</v-icon>
          Contact Us
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-up white--text">
        <v-btn icon @click="toSearchPage()">
          <v-icon>search</v-icon>
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn icon @click="toAboutPage()">
          <v-icon>info</v-icon>
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn icon>
          <v-icon>perm_contact_calendar</v-icon>
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
      toAboutPage: function () {
        this.$router.push({ name: 'about' })
      },
    },
  }
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>