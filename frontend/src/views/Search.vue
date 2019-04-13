<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>

        <v-flex lg6 xs12>
          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Primary Search</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <div>Specify your primary search criteria and get results in this card.</div>
              <search-form>
                <template v-slot:fields>
                  <v-select label="Ion Mode" name="ion-mode-select"
                            v-model="ionMode" :items="ionModeItems"></v-select>
                  <v-select label="Adduct Type" name="adduct-type-select"
                            :items="adductTypeItems"></v-select>
                  <v-text-field label="Tolerance" placeholder="Enter a molecular weight tolerance here."
                                v-model="tolerance"
                                clearable prefix="±"></v-text-field>
                  <v-text-field label="ParentValue" placeholder="Enter the parent mass here."
                                v-model="parentValue"
                                clearable></v-text-field>
                </template>
                <template v-slot:buttons>
                  <v-btn :loading="searchLoading" :disabled="searchLoading" @click="search()"
                         color="success" class="hidden-xs-only" flat>
                    <v-icon>search</v-icon>Search
                  </v-btn>
                  <v-btn :loading="searchLoading" :disabled="searchLoading" @click="search()"
                         color="success" class="hidden-sm-and-up" icon flat>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn @click="loadExample()"
                         color="primary" class="hidden-xs-only" flat>
                    <v-icon>launch</v-icon>Load Example
                  </v-btn>
                  <v-btn @click="loadExample()"
                         color="primary" class="hidden-sm-and-up" icon flat>
                    <v-icon>launch</v-icon>
                  </v-btn>
                  <v-btn @click="resetForm()"
                         color="error" class="hidden-xs-only" flat>
                    <v-icon>refresh</v-icon>Reset
                  </v-btn>
                  <v-btn @click="resetForm()"
                         color="error" class="hidden-sm-and-up" icon flat>
                    <v-icon>refresh</v-icon>
                  </v-btn>
                </template>
              </search-form>
              <search-result-table></search-result-table>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg6 xs12>
          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Secondary Search</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <div>After your primary search, you can execute a secondary search with fragment values in this card.</div>
              <search-form>
                <template v-slot:fields>
                  <template v-for="fragment in fragmentArray">
                    <v-text-field placeholder="Please enter a fragment mass here."
                                  :label="fragment.label + fragment.id" v-model="fragment.fragmentValue"
                                  @keyup.enter="addAFragment()" @click:append-outer="addAFragment()"
                                  append-outer-icon="add" clearable
                    ></v-text-field>
                  </template>
                </template>
                <template v-slot:buttons>
                  <v-btn :loading="searchLoading" :disabled="searchLoading" @click="search()"
                         color="success" class="hidden-xs-only" flat>
                    <v-icon>search</v-icon>Search
                  </v-btn>
                  <v-btn :loading="searchLoading" :disabled="searchLoading" @click="search()"
                         color="success" class="hidden-sm-and-up" icon flat>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn @click="loadExample()"
                         color="primary" class="hidden-xs-only" flat>
                    <v-icon>launch</v-icon>Load Example
                  </v-btn>
                  <v-btn @click="loadExample()"
                         color="primary" class="hidden-sm-and-up" icon flat>
                    <v-icon>launch</v-icon>
                  </v-btn>
                  <v-btn @click="resetForm()"
                         color="error" class="hidden-xs-only" flat>
                    <v-icon>refresh</v-icon>Reset
                  </v-btn>
                  <v-btn @click="resetForm()"
                         color="error" class="hidden-sm-and-up" icon flat>
                    <v-icon>refresh</v-icon>
                  </v-btn>
                </template>
              </search-form>
              <search-result-table></search-result-table>
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
  export default {
    name: 'search',
    data: () => ({
      ionModeItems: ['Positive', 'Negative'],
      ionMode: null,
      tolerance: null,
      parentValue: null,
      searchLoading: false,
      fragmentArray: [{
        id: 1,
        label: 'FragmentValue',
        fragmentValue: null,
      },{
        id: 2,
        label: 'FragmentValue',
        fragmentValue: null,
      },{
        id: 3,
        label: 'FragmentValue',
        fragmentValue: null,
      }],
    }),
    components: {
      SearchForm,
      SearchResultTable,
    },
    computed: {
      adductTypeItems: function () {
        const adductTypeMap = new Map()
            .set('Positive', ['M+H', 'M+Na', 'M+NH4'])
            .set('Negative', ['M-H', 'M-Cl', 'M+FA-H']);
        return adductTypeMap.get(this.ionMode) || [];
      }
    },
    methods: {
      search: function () {
        console.log('start search');
        this.searchLoading = true;
        setTimeout(() => {
          this.searchLoading = false;
        }, 3000);
      },
      loadExample: function () {
        console.log('start loadExample');
      },
      resetForm: function () {
        console.log('start resetForm');
      },
      addAFragment: function () {
        console.log('add a fragment');
      },
    },
  }
</script>

<style scoped>

</style>
