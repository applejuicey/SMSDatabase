<template>
  <div>
    <v-container fluid>

      <v-layout row wrap>
        <v-flex offset-lg2 lg8 xs12>
          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Metabolite Search</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <div>You can enter the common name of the metabolite to get your results.</div>
              <search-form>
                <template v-slot:fields>
                  <v-text-field label="Keyword" placeholder="Enter your keyword here."
                                v-model="keyword" autofocus="autofocus" @keyup.enter="search()"
                                clearable></v-text-field>
                </template>
                <template v-slot:buttons>
                  <v-btn :loading="searchLoading" :disabled="searchLoading" @click="search()"
                         color="success" class="hidden-xs-only">
                    <v-icon>search</v-icon>Search
                  </v-btn>
                  <v-btn :loading="searchLoading" :disabled="searchLoading" @click="search()"
                         color="success" class="hidden-sm-and-up" icon>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn @click="loadExample()"
                         color="primary" class="hidden-xs-only">
                    <v-icon>launch</v-icon>Load Example
                  </v-btn>
                  <v-btn @click="loadExample()"
                         color="primary" class="hidden-sm-and-up" icon>
                    <v-icon>launch</v-icon>
                  </v-btn>
                </template>
              </search-form>
              <search-result-table :headers="headers" :results="results" :buttons="buttons"
                                   :pagination="pagination" :tableLoading="tableLoading"></search-result-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
  import SearchForm from '@/components/SearchForm.vue';
  import SearchResultTable from '@/components/SearchResultTable.vue';
  import { COMPOUNDSWHERE } from '../utils/apolloString';
  export default {
    name: 'search-metabolite',
    data: () => ({
      keyword: null,
      searchLoading: false,
      headers: [
        { text: 'SMSD ID', align: 'center', sortable: true, value: 'uniqueID'},
        { text: 'Common Name', align: 'center', sortable: true, value: 'commonName'},
        { text: 'CAS', align: 'center', sortable: true, value: 'casCode' },
        { text: 'Chemical Formula', align: 'center', sortable: true, value: 'chemicalFormula' },
        { text: 'Actions', align: 'center', sortable: false },
      ],
      results: [],
      buttons: {
        view: true,
        edit: false,
        delete: false,
      },
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
      tableLoading: false,
    }),
    components: {
      SearchForm,
      SearchResultTable,
    },
    methods: {
      search: async function () {
        const self = this;
        self.searchLoading = true;
        self.tableLoading = true;
        try {
          const result = await this.$apollo.query({
            query: COMPOUNDSWHERE,
            fetchPolicy: 'no-cache',
            variables: {
              where: {
                commonName_contains: this.keyword,
              },
            },
          });
          console.log(result.data.compounds);
          self.results = result.data.compounds;
          self.searchLoading = false;
          self.tableLoading = false;
        } catch (error) {
          console.log(error);
          self.searchLoading = false;
          self.tableLoading = false;
        }
      },
      loadExample: function () {
        this.keyword = 'Ginsenoside';
      },
    },
    computed: {

    },
  }
</script>

