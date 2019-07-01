<template>
  <div class="fill-height">
    <v-container fluid fill-height>
      <v-layout align-center row wrap v-if="queryResult === 'exist'">
        <v-flex offset-lg2 lg8 xs12>
          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Metabolite Details -- {{compoundDetail.commonName}}</div>
            </v-card-title>
            <v-card-text class="text-xs-center">

              <v-divider class="primary"></v-divider>
              <div class="mb-3">
                <v-subheader class="title">General Information</v-subheader>
                <metabolite-table-view :metaboliteFields="generalInformationArray"></metabolite-table-view>
              </div>
              <v-divider class="primary"></v-divider>

              <div class="mb-3">
                <v-subheader class="title">Spectrum Information(Negative)</v-subheader>
                <metabolite-table-view :metaboliteFields="spectrumInfoPositiveArray"></metabolite-table-view>
              </div>
              <v-divider class="primary"></v-divider>

              <div class="mb-3">
                <v-subheader class="title">Spectrum Information(Positive)</v-subheader>
                <metabolite-table-view :metaboliteFields="spectrumInfoNegativeArray"></metabolite-table-view>
              </div>
              <v-divider class="primary"></v-divider>

              <div class="mb-3">
                <v-subheader class="title">Images</v-subheader>
                <metabolite-table-view :metaboliteFields="imagesAddArray" :buttons="buttons"></metabolite-table-view>
              </div>
              <v-divider class="primary"></v-divider>

              <div class="mt-3">
                <v-btn color="primary" @click="toMassQueryPage()" class="hidden-xs-only">
                  <v-icon>search</v-icon>Mass Query
                </v-btn>
                <v-btn color="primary" @click="toMassQueryPage()" class="hidden-sm-and-up" icon>
                  <v-icon>search</v-icon>
                </v-btn>
                <v-btn color="primary" @click="toNameQueryPage()" class="hidden-xs-only">
                  <v-icon>search</v-icon>Name Query
                </v-btn>
                <v-btn color="primary" @click="toNameQueryPage()" class="hidden-sm-and-up" icon>
                  <v-icon>search</v-icon>
                </v-btn>
              </div>

            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout align-center row wrap v-else-if="queryResult === 'null'">
        <v-flex offset-lg3 lg6 xs12>
          <v-alert :value="true" color="primary" class="text-xs-center">
            <v-progress-circular :size="30" :width="5"  indeterminate></v-progress-circular>
            &nbsp;&nbsp;
            <span class="title">
              Please wait while we are querying metabolite information from the server...
            </span>
          </v-alert>
          <div class="text-xs-center">
            <v-btn color="primary" @click="toMassQueryPage()" class="hidden-xs-only">
              <v-icon>search</v-icon>Mass Query
            </v-btn>
            <v-btn color="primary" @click="toMassQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>search</v-icon>
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-xs-only">
              <v-icon>search</v-icon>Name Query
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>search</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
      <v-layout align-center row wrap v-else-if="queryResult === 'not_exist'">
        <v-flex offset-lg3 lg6 xs12>
          <v-alert :value="true" color="error" class="text-xs-center">
            <span class="title">
              The metabolite queried do not exist!
            </span>
          </v-alert>
          <div class="text-xs-center">
            <v-btn color="primary" @click="toMassQueryPage()" class="hidden-xs-only">
              <v-icon>search</v-icon>Mass Query
            </v-btn>
            <v-btn color="primary" @click="toMassQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>search</v-icon>
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-xs-only">
              <v-icon>search</v-icon>Name Query
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>search</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
      <v-layout align-center row wrap v-else-if="queryResult === 'query_error'">
        <v-flex offset-lg3 lg6 xs12>
          <v-alert :value="true" color="error" class="text-xs-center">
            <span class="title">
              An error occurred while querying, detailed information is listed as follows: {{queryError}}
            </span>
          </v-alert>
          <div class="text-xs-center">
            <v-btn color="primary" @click="toMassQueryPage()" class="hidden-xs-only">
              <v-icon>search</v-icon>Mass Query
            </v-btn>
            <v-btn color="primary" @click="toMassQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>search</v-icon>
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-xs-only">
              <v-icon>search</v-icon>Name Query
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>search</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import MetaboliteTableView from '@/components/MetaboliteTableView.vue';
  import { COMPOUNDWHERE } from '../utils/apolloString';
  export default {
    name: 'view-metabolite',
    components: {
      MetaboliteTableView,
    },
    data: () => ({
      queryResult: 'null',
      queryError: '',
      compoundDetail: {},
      generalInformationArray: [],
      spectrumInfoPositiveArray: [],
      spectrumInfoNegativeArray: [],
      imagesAddArray: [],
      buttons: {
        view: true,
      },
    }),
    computed: {

    },
    methods: {
      processMetaboliteInfo: function () {
        this.generalInformationArray.push({ key: 'SMSD ID', value: this.compoundDetail.uniqueID });
        this.generalInformationArray.push({ key: 'Common Name', value: this.compoundDetail.commonName });
        this.generalInformationArray.push({ key: 'Chemical Formula', value: this.compoundDetail.chemicalFormula });
        this.generalInformationArray.push({ key: 'CAS Code', value: this.compoundDetail.casCode });
        this.generalInformationArray.push({ key: 'ChemSpider ID', value: this.compoundDetail.chemSpiderID });
        this.generalInformationArray.push({ key: 'PubChem CID', value: this.compoundDetail.pubChemCID });
        this.generalInformationArray.push({ key: 'SMILES', value: this.compoundDetail.smiles });
        this.generalInformationArray.push({ key: 'Reference Sources of Saponins', value: this.compoundDetail.literatureSource.sourceCodes });
        this.spectrumInfoPositiveArray.push({ key: '1.[M-H]-', value: this.compoundDetail.msData.parentValue1 });
        this.spectrumInfoPositiveArray.push({ key: '2.[M+CL]-', value: this.compoundDetail.msData.parentValue2 });
        this.spectrumInfoPositiveArray.push({ key: '3.[M-H+FA]-', value: this.compoundDetail.msData.parentValue3 });
        this.spectrumInfoPositiveArray.push({ key: 'MS Parent Fragment Ions', value: this.compoundDetail.msData.fragmentsValues1 });
        this.spectrumInfoPositiveArray.push({ key: 'MS Sugar Fragment Ions', value: this.compoundDetail.msData.fragmentsValues1 });
        this.spectrumInfoPositiveArray.push({ key: 'MS Fragmentation Data from Reference Standards', value: this.compoundDetail.msData.dataSource1 });
        this.spectrumInfoPositiveArray.push({ key: 'References Sources of MS Fragmentation Data', value: this.compoundDetail.msData.referenceCodes1 });
        this.spectrumInfoNegativeArray.push({ key: '4.[M+H]+', value: this.compoundDetail.msData.parentValue4 });
        this.spectrumInfoNegativeArray.push({ key: '5.[M+Na]+', value: this.compoundDetail.msData.parentValue5 });
        this.spectrumInfoNegativeArray.push({ key: '6.[M+NH4]+', value: this.compoundDetail.msData.parentValue6 });
        this.spectrumInfoNegativeArray.push({ key: 'MS Fragment Ions:', value: this.compoundDetail.msData.fragmentsValues2 });
        this.spectrumInfoNegativeArray.push({ key: 'MS Fragmentation Data from Reference Standards', value: this.compoundDetail.msData.dataSource2 });
        this.spectrumInfoNegativeArray.push({ key: 'References Sources of MS Fragmentation Data', value: this.compoundDetail.msData.referenceCodes2 });
        this.imagesAddArray.push({ key: 'Structure Picture', value: this.compoundDetail.structurePicAdd });
        this.imagesAddArray.push({ key: 'LC-MS/MS Spectrum - 10V, Negative', value: this.compoundDetail.msData.spectrumPicAddArray1[0] });
        this.imagesAddArray.push({ key: 'LC-MS/MS Spectrum - 40V, Negative', value: this.compoundDetail.msData.spectrumPicAddArray1[1] });
        this.imagesAddArray.push({ key: 'LC-MS/MS Spectrum - 70V, Negative', value: this.compoundDetail.msData.spectrumPicAddArray1[2] });
        this.imagesAddArray.push({ key: 'LC-MS/MS Spectrum - 200V, Positive', value: this.compoundDetail.msData.spectrumPicAddArray2[0] });
      },
      loadMetabolite: async function () {
        let self = this;
        try {
          const result = await self.$apollo.query({
            query: COMPOUNDWHERE,
            fetchPolicy: 'no-cache',
            variables: {
              where: {
                uniqueID: self.$route.params.uniqueID,
              },
            },
          });
          // console.log(result.data.compound);
          if (result.data.compound) {
            self.compoundDetail = result.data.compound;
            // console.log(self.compoundDetail);
            self.processMetaboliteInfo();
            self.queryResult = 'exist';
          } else {
            self.queryResult = 'not_exist';
          }
        } catch (error) {
          console.error('Error occurred when loading metabolite info from server: ', error);
          self.queryResult = 'query_error';
          self.queryError = error;
        }
      },
      toMassQueryPage: function () {
        this.$router.push({ name: 'search' })
      },
      toNameQueryPage: function () {
        this.$router.push({ name: 'search-metabolite' })
      },
    },
    watch: {
      $route() {
        this.loadMetabolite();
      }
    },
    mounted () {
      this.loadMetabolite();
    },
  }
</script>

<style scoped>

</style>