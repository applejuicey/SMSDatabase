<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>

        <v-flex lg6 xs12>
          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Search Options</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <div>Specify your search criteria here.</div>
              <search-page-form></search-page-form>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg6 xs12>
          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Search Results</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <div>Your search results are listed as follows:</div>
              fuckoff
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import SearchPageForm from '@/components/SearchPageForm.vue'
  export default {
    name: 'search',
    data: () => ({

    }),
    components: {
      SearchPageForm
    },

  }
</script>
