<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>

        <v-flex lg6 xs12>
          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">MS Ion Search</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <div>Specify your parent ion search criteria and get results in this card.</div>
              <search-form>
                <template v-slot:fields>
                  <v-select label="Ion Mode" name="ion-mode-select"
                            v-model="ionMode" :items="ionModeItems"></v-select>
                  <v-select label="Adduct Type" name="adduct-type-select"
                            :items="adductTypeItems" v-model="adductType"></v-select>
                  <v-text-field label="Tolerance" placeholder="Enter a tolerance for parent ion here."
                                v-model="tolerance1"
                                clearable prefix="±"></v-text-field>
                  <v-select label="Tolerance Unit" name="tolerance-unit-select1"
                            v-model="toleranceUnit1" :items="toleranceUnitItems"></v-select>
                  <v-text-field label="ParentValue" placeholder="Enter the parent ion value here."
                                v-model="parentValue"
                                clearable></v-text-field>
                </template>
                <template v-slot:buttons>
                  <v-btn :loading="searchLoading1" :disabled="searchLoading1" @click="search1()"
                         color="success" class="hidden-xs-only">
                    <v-icon>search</v-icon>Search
                  </v-btn>
                  <v-btn :loading="searchLoading1" :disabled="searchLoading1" @click="search1()"
                         color="success" class="hidden-sm-and-up" icon>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn @click="loadExample1()"
                         color="primary" class="hidden-xs-only">
                    <v-icon>launch</v-icon>Load Example
                  </v-btn>
                  <v-btn @click="loadExample1()"
                         color="primary" class="hidden-sm-and-up" icon>
                    <v-icon>launch</v-icon>
                  </v-btn>
                </template>
              </search-form>
              <search-result-table :headers="headers1" :results="results1" :buttons="buttons"
                                   :pagination="pagination1" :tableLoading="tableLoading1"></search-result-table>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg6 xs12>
          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">MS/MS Ion Search</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <div>After your parent ion search, you can execute a daughter ion search with fragment values in this card.</div>
              <search-form>
                <template v-slot:fields>
                  <v-text-field label="Tolerance" placeholder="Enter a tolerance for daughter ions here."
                                v-model="tolerance2"
                                clearable prefix="±"></v-text-field>
                  <v-select label="Tolerance Unit" name="tolerance-unit-select2"
                            v-model="toleranceUnit2" :items="toleranceUnitItems"></v-select>
                  <v-textarea name="fragment-value-textarea" label="Fragment Values"
                      auto-grow v-model="fragmentValuesRaw"
                      placeholder="Enter the daughter ion values here. NOTE: Separate by ENTER."></v-textarea>
                </template>
                <template v-slot:buttons>
                  <v-btn :loading="searchLoading2" :disabled="searchDisabled2" @click="search2()"
                         color="success" class="hidden-xs-only">
                    <v-icon>search</v-icon>Search
                  </v-btn>
                  <v-btn :loading="searchLoading2" :disabled="searchDisabled2" @click="search2()"
                         color="success" class="hidden-sm-and-up" icon>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn @click="loadExample2()"
                         color="primary" class="hidden-xs-only">
                    <v-icon>launch</v-icon>Load Example
                  </v-btn>
                  <v-btn @click="loadExample2()"
                         color="primary" class="hidden-sm-and-up" icon>
                    <v-icon>launch</v-icon>
                  </v-btn>
                </template>
              </search-form>
              <v-data-table :headers="headers2" :items="results2" :pagination.sync="pagination2" :loading="tableLoading2"
                            class="elevation-1">
                <v-progress-linear v-slot:progress color="primary" indeterminate></v-progress-linear>
                <template v-slot:items="props">
                  <td>{{ props.item.matchCounter }}</td>
                  <td>{{ props.item.matchRate }}</td>
                  <td>{{ props.item.uniqueID }}</td>
                  <td>{{ props.item.commonName }}</td>
                  <td>{{ props.item.chemicalFormula }}</td>
                  <td class="justify-center layout px-0">
                    <v-icon small color="success" class="mr-2 cursor-pointer" @click="viewItem(props.item.uniqueID)">
                      search
                    </v-icon>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
      <v-snackbar v-model="snackbarShowed"
                  :color="snackbarColor" :timeout="5000"
                  top multi-line auto-height>
        {{ snackbarMessage }}
        <v-btn flat
               @click="snackbarShowed = false">
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
  import SearchForm from '@/components/SearchForm.vue';
  import SearchResultTable from '@/components/SearchResultTable.vue';
  import { COMPOUNDSWHERE } from '../utils/apolloString';
  export default {
    name: 'search',
    data: () => ({
      ionModeItems: ['Positive', 'Negative'],
      ionMode: null,
      adductType: null,
      tolerance1: null,
      tolerance2: null,
      toleranceUnitItems: ['ppm', 'Da'],
      toleranceUnit1: null,
      toleranceUnit2: null,
      parentValue: null,
      searchLoading1: false,
      searchLoading2: false,
      searchDisabled2: true,
      headers1: [
        { text: 'SMSD ID', align: 'center', sortable: true, value: 'uniqueID'},
        { text: 'Common Name', align: 'center', sortable: true, value: 'commonName'},
        { text: 'CAS', align: 'center', sortable: true, value: 'casCode' },
        { text: 'Chemical Formula', align: 'center', sortable: true, value: 'chemicalFormula' },
        { text: 'Actions', align: 'center', sortable: false },
      ],
      headers2: [
        { text: 'Match Count', align: 'center', sortable: true, value: 'matchCounter' },
        { text: 'Match Rate(%)', align: 'center', sortable: true, value: 'matchRate' },
        { text: 'SMSD ID', align: 'center', sortable: true, value: 'uniqueID'},
        { text: 'Common Name', align: 'center', sortable: true, value: 'commonName'},
        { text: 'Chemical Formula', align: 'center', sortable: true, value: 'chemicalFormula' },
        { text: 'Actions', align: 'center', sortable: false },
      ],
      results1: [],
      results2: [],
      buttons: {
        view: true,
      },
      pagination1: {
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
      pagination2: {
        descending: true,
        page: 1,
        rowsPerPage: 10,
      },
      tableLoading1: false,
      tableLoading2: false,
      fragmentValuesRaw: null,
      postDataObject1: null,
      postDataObject2: null,
      snackbarShowed: false,
      snackbarColor: null,
      snackbarMessage: null,
    }),
    components: {
      SearchForm,
      SearchResultTable,
    },
    computed: {
      adductTypeItems: function () {
        const adductTypeMap = new Map()
            .set('Positive', ['[M+H]+', '[M+Na]+', '[M+NH4]+'])
            .set('Negative', ['[M-H]-', '[M+Cl]-', '[M-H+FA]-']);
        return adductTypeMap.get(this.ionMode) || [];
      }
    },
    methods: {
      processPostDataObject1: function () {
        let lowerBoundValue = null;
        let upperBoundValue = null;
        const optionMap = new Map()
            .set('[M-H]-', ['parentValue1_gte', 'parentValue1_lte'])
            .set('[M+Cl]-', ['parentValue2_gte', 'parentValue2_lte'])
            .set('[M-H+FA]-', ['parentValue3_gte', 'parentValue3_lte'])
            .set('[M+H]+', ['parentValue4_gte', 'parentValue4_lte'])
            .set('[M+Na]+', ['parentValue5_gte', 'parentValue5_lte'])
            .set('[M+NH4]+', ['parentValue6_gte', 'parentValue6_lte']);
        const lowerBoundName = optionMap.get(this.adductType)[0];
        const upperBoundName = optionMap.get(this.adductType)[1];
        if (this.toleranceUnit1 === 'ppm') {
          lowerBoundValue = (parseFloat(this.parentValue)) / (1 + parseFloat(this.tolerance1) / 1000000);
          upperBoundValue = (parseFloat(this.parentValue)) / (1 - parseFloat(this.tolerance1) / 1000000);
        } else if (this.toleranceUnit1 === 'Da') {
          lowerBoundValue = parseFloat(this.parentValue) - parseFloat(this.tolerance1);
          upperBoundValue = parseFloat(this.parentValue) + parseFloat(this.tolerance1);
        } else {
          // error
          this.snackbarShowed = true;
          this.snackbarColor = 'error';
          this.snackbarMessage = 'Please specify a tolerance unit!';
        }
        let returnedObject = {};
        returnedObject[lowerBoundName] = lowerBoundValue;
        returnedObject[upperBoundName] = upperBoundValue;
        console.log('returnedObject', returnedObject);
        return returnedObject;
      },
      checkInside: function (databaseValue, userInputValue) {
        let lowerBoundValue = null;
        let upperBoundValue = null;
        if (this.toleranceUnit1 === 'ppm') {
          lowerBoundValue = (parseFloat(userInputValue)) / (1 + parseFloat(this.tolerance2) / 1000000);
          upperBoundValue = (parseFloat(userInputValue)) / (1 - parseFloat(this.tolerance2) / 1000000);
        } else if (this.toleranceUnit1 === 'Da') {
          lowerBoundValue = parseFloat(userInputValue) - parseFloat(this.tolerance2);
          upperBoundValue = parseFloat(userInputValue) + parseFloat(this.tolerance2);
        } else {
          // error
          this.snackbarShowed = true;
          this.snackbarColor = 'error';
          this.snackbarMessage = 'Please specify a tolerance unit!';
        }
        return databaseValue >= lowerBoundValue && databaseValue <= upperBoundValue;
      },
      search1: async function () {
        const self = this;
        self.searchLoading1 = true;
        self.tableLoading1 = true;
        try {
          const result = await this.$apollo.query({
            query: COMPOUNDSWHERE,
            fetchPolicy: 'no-cache',
            variables: {
              where: {
                msData: self.processPostDataObject1(),
              },
            },
          });
          console.log(result.data.compounds);
          self.results1 = result.data.compounds;
          self.searchLoading1 = false;
          self.searchDisabled2 = self.results1.length === 0;
          self.tableLoading1 = false;
        } catch (error) {
          console.log(error);
          self.searchLoading1 = false;
          self.tableLoading1 = false;
        }
      },
      search2: function () {
        this.results2 = [];
        this.searchLoading2 = true;
        this.searchDisabled2 = true;
        this.tableLoading2 = true;
        // 迭代每个化合物
        for (let i = 0; i < this.results1.length; i++) {
          this.results2.push(this.results1[i]);
          // 根据用户想检索positive还是negative，得到对应的数据库中的数组A
          let arrayFromDatabase = [];
          if (this.ionMode === 'Positive') {
            arrayFromDatabase = this.results1[i].msData.fragmentsValues2;
          } else if (this.ionMode === 'Negative') {
            arrayFromDatabase = this.results1[i].msData.fragmentsValues1;
          } else {
            //error
          }
          console.log(arrayFromDatabase);
          if (arrayFromDatabase.length === 0) {
            //error
            return;
          }
          // 获取用户的输入数组
          let userInputArray = [];
          if (this.fragmentValuesRaw.split) {
            userInputArray = this.fragmentValuesRaw.split('\n').map((item)=>{return parseFloat(item)});
            console.log(userInputArray);
            // 迭代用户的输入数组，按每个元素构造区间U，迭代数组A，检查数组A中的每个元素是否在区间U内，在则counter+1
            let counter = 0;
            for (let j = 0; j < userInputArray.length; j++) {
              let flag = false;
              // 迭代数组A
              for (let k = 0; k < arrayFromDatabase.length; k++) {
                flag = this.checkInside(arrayFromDatabase[k], userInputArray[j]);
                if (flag) {
                  counter = counter + 1;
                  break;
                }
              }
            }
            this.results2[i].matchCounter = counter;
            this.results2[i].matchRate = counter / arrayFromDatabase.length * 100;
            // console.log(`counter:${this.results1[i].commonName}`,counter)
            this.searchLoading2 = false;
            this.searchDisabled2 = false;
            this.tableLoading2 = false;
          } else {
            // error
          }
        }
      },
      loadExample1: function () {
        this.ionMode = 'Negative';
        this.adductType = '[M-H]-';
        this.tolerance1 = '0.05';
        this.toleranceUnit1 = 'Da';
        this.parentValue = '1107.5957';
      },
      loadExample2: function () {
        this.tolerance2 = '50';
        this.toleranceUnit2 = 'ppm';
        this.fragmentValuesRaw = '945.5428\n783.49\n621.4372\n459.3844\n375.2905';
      },
      viewItem: function (id) {
        this.$router.push({ name: 'view-metabolite', params: { uniqueID: id} })
      },
    },
  }
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
