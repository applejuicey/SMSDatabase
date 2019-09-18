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
                <v-data-table :items="generalInformationArray" hide-actions hide-headers>
                  <template v-slot:items="props">
                    <td class="text-xs-left left-column">{{ props.item.key }}:</td>
                    <td class="text-xs-left right-column">{{ props.item.value }}</td>
                  </template>
                </v-data-table>
              </div>
              <v-divider class="primary"></v-divider>

              <div class="mb-3">
                <v-subheader class="title">Spectrum Information(Negative)</v-subheader>
                <v-data-table :items="spectrumInfoNegativeArray" hide-actions hide-headers>
                  <template v-slot:items="props">
                    <td class="text-xs-left left-column">{{ props.item.key }}:</td>
                    <td class="text-xs-left right-column">{{ props.item.value }}</td>
                  </template>
                </v-data-table>
              </div>
              <v-divider class="primary"></v-divider>

              <div class="mb-3">
                <v-subheader class="title">Spectrum Information(Positive)</v-subheader>
                <v-data-table :items="spectrumInfoPositiveArray" hide-actions hide-headers>
                  <template v-slot:items="props">
                    <td class="text-xs-left left-column">{{ props.item.key }}:</td>
                    <td class="text-xs-left right-column">{{ props.item.value }}</td>
                  </template>
                </v-data-table>
              </div>
              <v-divider class="primary"></v-divider>

              <div class="mb-3">
                <v-subheader class="title">Images</v-subheader>
                <v-data-table :items="imagesAddArray" hide-actions hide-headers>
                  <template v-slot:items="props">
                    <td class="text-xs-left left-column-image">{{ props.item.key }}:</td>
                    <td class="text-xs-left right-column-image justify-center px-0">
                      <v-icon small color="success" class="mr-2 cursor-pointer" @click="showImageModal(props.item.key, props.item.value)">
                        search
                      </v-icon>
                    </td>
                  </template>
                </v-data-table>
              </div>
              <v-divider class="primary"></v-divider>

              <div class="mt-3">
                <v-btn color="primary" @click="toMassQueryPage()" class="hidden-xs-only">
                  <v-icon>format_list_numbered</v-icon>Mass Query
                </v-btn>
                <v-btn color="primary" @click="toMassQueryPage()" class="hidden-sm-and-up" icon>
                  <v-icon>format_list_numbered</v-icon>
                </v-btn>
                <v-btn color="primary" @click="toNameQueryPage()" class="hidden-xs-only">
                  <v-icon>sort_by_alpha</v-icon>Name Query
                </v-btn>
                <v-btn color="primary" @click="toNameQueryPage()" class="hidden-sm-and-up" icon>
                  <v-icon>sort_by_alpha</v-icon>
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
              <v-icon>format_list_numbered</v-icon>Mass Query
            </v-btn>
            <v-btn color="primary" @click="toMassQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>format_list_numbered</v-icon>
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-xs-only">
              <v-icon>sort_by_alpha</v-icon>Name Query
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>sort_by_alpha</v-icon>
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
              <v-icon>format_list_numbered</v-icon>Mass Query
            </v-btn>
            <v-btn color="primary" @click="toMassQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>format_list_numbered</v-icon>
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-xs-only">
              <v-icon>sort_by_alpha</v-icon>Name Query
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>sort_by_alpha</v-icon>
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
              <v-icon>format_list_numbered</v-icon>Mass Query
            </v-btn>
            <v-btn color="primary" @click="toMassQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>format_list_numbered</v-icon>
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-xs-only">
              <v-icon>sort_by_alpha</v-icon>Name Query
            </v-btn>
            <v-btn color="primary" @click="toNameQueryPage()" class="hidden-sm-and-up" icon>
              <v-icon>sort_by_alpha</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>

      <v-dialog v-model="modal" persistent max-width="800px">
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>{{ modalHeader }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="text-xs-center">
            <v-img :src="modalImageAddress" contain v-if="modalImageProvided"></v-img>
            <span v-else class="subheading">
            {{modalImageMessage}}
          </span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="closeImageModal()">
              <v-icon>close</v-icon>
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-container>
  </div>
</template>

<script>
  import { COMPOUNDWHERE } from '../utils/apolloString';
  export default {
    name: 'view-metabolite',
    components: {

    },
    data: () => ({
      queryResult: 'null',
      queryError: '',
      compoundDetail: {},
      generalInformationArray: [],
      spectrumInfoPositiveArray: [],
      spectrumInfoNegativeArray: [],
      imagesAddArray: [],
      modal: false,
      modalHeader: '',
      modalImageProvided: false,
      modalImageMessage: '',
      modalImageAddress: '',
    }),
    computed: {

    },
    methods: {
      sugarOrParentClassifier: function (originalArray, identifier) {
        if (originalArray.length === 0) {
          return [];
        }
        let sugarArray = [];
        let parentArray = [];
        for (let item of originalArray) {
          const trunc = parseFloat((item + '').split('.')[0]);
          const fraction = parseFloat('0.' + (item + '').split('.')[1]);
          const z = -0.572 * trunc + 1627.277 * fraction;
          if (z >= 32.12) {
            parentArray.push(item);
          } else {
            sugarArray.push(item);
          }
        }
        if (identifier === 'sugar') {
          return sugarArray;
        } else if (identifier === 'parent') {
          return parentArray;
        }
      },
      processMetaboliteInfo: function () {
        this.generalInformationArray.push({ key: 'SMSD ID', value: this.compoundDetail.uniqueID });
        this.generalInformationArray.push({ key: 'Common Name', value: this.compoundDetail.commonName });
        this.generalInformationArray.push({ key: 'Chemical Formula', value: this.compoundDetail.chemicalFormula });
        this.generalInformationArray.push({ key: 'CAS Number', value: this.compoundDetail.casCode });
        this.generalInformationArray.push({ key: 'ChemSpider ID', value: this.compoundDetail.chemSpiderID });
        this.generalInformationArray.push({ key: 'PubChem CID', value: this.compoundDetail.pubChemCID });
        this.generalInformationArray.push({ key: 'SMILES', value: this.compoundDetail.smiles });
        this.generalInformationArray.push({ key: 'Reference Sources of Saponins', value: this.compoundDetail.literatureSource.sourceCodes });
        this.spectrumInfoNegativeArray.push({ key: '1.[M-H]-', value: this.compoundDetail.msData.parentValue1 });
        this.spectrumInfoNegativeArray.push({ key: '2.[M+Cl]-', value: this.compoundDetail.msData.parentValue2 });
        this.spectrumInfoNegativeArray.push({ key: '3.[M+FA-H]-', value: this.compoundDetail.msData.parentValue3 });
        this.spectrumInfoNegativeArray.push({ key: 'Parent Fragment Ions', value: this.sugarOrParentClassifier(this.compoundDetail.msData.fragmentsValues1, 'parent') });
        this.spectrumInfoNegativeArray.push({ key: 'Sugar Fragment Ions', value: this.sugarOrParentClassifier(this.compoundDetail.msData.fragmentsValues1, 'sugar') });
        this.spectrumInfoNegativeArray.push({ key: 'Fragment Ions Data from Reference Standards', value: this.compoundDetail.msData.dataSource1 });
        this.spectrumInfoNegativeArray.push({ key: 'References Sources of Fragment Ions Data', value: this.compoundDetail.msData.referenceCodes1 });
        this.spectrumInfoPositiveArray.push({ key: '4.[M+H]+', value: this.compoundDetail.msData.parentValue4 });
        this.spectrumInfoPositiveArray.push({ key: '5.[M+Na]+', value: this.compoundDetail.msData.parentValue5 });
        this.spectrumInfoPositiveArray.push({ key: '6.[M+NH4]+', value: this.compoundDetail.msData.parentValue6 });
        this.spectrumInfoPositiveArray.push({ key: 'Parent Fragment Ions', value: this.compoundDetail.msData.fragmentsValues2 });
        this.spectrumInfoPositiveArray.push({ key: 'Fragment Ions Data from Reference Standards', value: this.compoundDetail.msData.dataSource2 });
        this.spectrumInfoPositiveArray.push({ key: 'References Sources of Fragment Ions Data', value: this.compoundDetail.msData.referenceCodes2 });
        this.imagesAddArray.push({ key: 'Structure Picture', value: this.compoundDetail.structurePicAdd });
        this.imagesAddArray.push({ key: 'LC-MS Spectrum - Negative mode; Fragmentor voltage, 120V; Collision energy, 10V', value: this.compoundDetail.msData.spectrumPicAddArray1[0] });
        this.imagesAddArray.push({ key: 'LC-MS Spectrum - Negative mode; Fragmentor voltage, 120V; Collision energy, 40V', value: this.compoundDetail.msData.spectrumPicAddArray1[1] });
        this.imagesAddArray.push({ key: 'LC-MS Spectrum - Negative mode; Fragmentor voltage, 120V; Collision energy, 70V', value: this.compoundDetail.msData.spectrumPicAddArray1[2] });
        this.imagesAddArray.push({ key: 'LC-MS Spectrum - Positive mode; Fragmentor voltage, 200V; Collision energy, 0V', value: this.compoundDetail.msData.spectrumPicAddArray2[0] });
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
      showImageModal: function (imgType, imgAddress) {
        const imageMap = new Map()
            .set('Structure Picture', ['/images/structure/', '.jpg'])
            .set('LC-MS Spectrum - Negative mode; Fragmentor voltage, 120V; Collision energy, 10V', ['/images/ms/negative/10/', '_10.png'])
            .set('LC-MS Spectrum - Negative mode; Fragmentor voltage, 120V; Collision energy, 40V', ['/images/ms/negative/40/', '_40.png'])
            .set('LC-MS Spectrum - Negative mode; Fragmentor voltage, 120V; Collision energy, 70V', ['/images/ms/negative/70/', '_70.png'])
            .set('LC-MS Spectrum - Positive mode; Fragmentor voltage, 200V; Collision energy, 0V', ['/images/ms/positive/200/', '_200.png']);
        const imageAddressFragmentsArray = imageMap.get(imgType);
        if (imgAddress === 'empty' || imgAddress === null || imgAddress === undefined) {
          this.modalImageProvided = false;
          this.modalImageMessage = 'No image provided!';
        } else {
          this.modalImageProvided = true;
          this.modalImageAddress = imageAddressFragmentsArray[0] + imgAddress +imageAddressFragmentsArray[1];
          // console.log(this.modalImageAddress);
        }
        this.modalHeader = imgType;
        this.modal = true;
      },
      closeImageModal: function () {
        this.modal = false;
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
  .left-column {
    width: 40%;
  }
  .right-column {
    width: 60%;
  }
  .left-column-image {
    width: 70%;
  }
  .right-column-image {
    width: 30%;
  }
</style>