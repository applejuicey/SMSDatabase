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
              <search-form @submit.native.prevent>
                <template v-slot:fields>
                  <v-text-field label="Common Name" placeholder="Enter the common name here." @keyup.native.enter="search()"
                                v-model="keyword" autofocus="autofocus" clearable></v-text-field>
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
              <div class="pa-2">
                <v-data-table :headers="headers" :items="results" :pagination.sync="pagination" :loading="tableLoading" class="elevation-1">
                  <v-progress-linear v-slot:progress color="primary" indeterminate></v-progress-linear>
                  <template v-slot:items="props">
                    <td>{{ props.item.uniqueID }}</td>
                    <td class="justify-center layout px-0">
                      <v-icon small color="success" class="mr-2 cursor-pointer" @click="viewItem(props.item.uniqueID)">
                        search
                      </v-icon>
                    </td>
                    <td>{{ props.item.commonName }}</td>
                    <td>{{ props.item.chemicalFormula }}</td>
                    <td>{{ props.item.msData.parentValue1 }}</td>
                    <td>{{ props.item.msData.parentValue2 }}</td>
                    <td>{{ props.item.msData.parentValue3 }}</td>
                    <td>{{ props.item.msData.parentValue4 }}</td>
                    <td>{{ props.item.msData.parentValue5 }}</td>
                    <td>{{ props.item.msData.parentValue6 }}</td>
                  </template>
                </v-data-table>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
  import SearchForm from '@/components/SearchForm.vue';
  import { COMPOUNDSWHERE } from '../utils/apolloString';
  export default {
    name: 'search-metabolite',
    data: () => ({
      keyword: null,
      searchLoading: false,
      headers: [
        { text: 'SMSD ID', align: 'center', sortable: true, value: 'uniqueID'},
        { text: 'Actions', align: 'center', sortable: false },
        { text: 'Common Name', align: 'center', sortable: true, value: 'commonName'},
        { text: 'Chemical Formula', align: 'center', sortable: true, value: 'chemicalFormula' },
        { text: '[M-H]-', align: 'center', sortable: true, value: 'msData.parentValue1' },
        { text: '[M+Cl]-', align: 'center', sortable: true, value: 'msData.parentValue2' },
        { text: '[M+FA-H]-', align: 'center', sortable: true, value: 'msData.parentValue3' },
        { text: '[M+H]+', align: 'center', sortable: true, value: 'msData.parentValue4' },
        { text: '[M+Na]+', align: 'center', sortable: true, value: 'msData.parentValue5' },
        { text: '[M+NH4]+', align: 'center', sortable: true, value: 'msData.parentValue6' },
      ],
      results: [],
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
      tableLoading: false,
    }),
    components: {
      SearchForm,
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
          // console.log(result.data.compounds);
          self.results = result.data.compounds;
          self.searchLoading = false;
          self.tableLoading = false;
        } catch (error) {
          console.error('Error occurred when executing ms search: ', error);
          self.searchLoading = false;
          self.tableLoading = false;
        }
      },
      loadExample: function () {
        this.keyword = 'Ginsenoside';
      },
      viewItem: function (id) {
        const { href } = this.$router.resolve({
          name: "view-metabolite",
          params:{ uniqueID: id}
        });
        window.open(href, '_blank');
      },
    },
    computed: {

    },
  }
</script>

