<template>
  <div class="fill-height">
    <v-container fluid fill-height>
      <v-layout align-center row fill-height wrap>
        <v-flex offset-lg2 lg8 xs12 v-if="queryResult === 'exist'">
          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Edit Metabolite -- {{formData.commonName}}</div>
            </v-card-title>
            <v-card-text class="text-xs-center">

              <v-card class="mb-3">
                <v-card-title class="justify-center">
                  <div class="title">Section1: General Information</div>
                </v-card-title>
                <v-card-text class="text-xs-center">
                  <v-form ref="metaboliteInfoForm1">
                    <v-container>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.commonName" label="Common Name" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12 md6>
                          <v-text-field v-model="formData.uniqueID" label="SMSD ID" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                          <v-text-field v-model="formData.chemicalFormula" label="Chemical Formula" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.casCode" label="CAS Code" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.chemSpiderID" label="ChemSpider ID" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.pubChemCID" label="PubChem CID" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.smiles" label="SMILES" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.literatureSource.sourceCodes" label="Reference Sources of Saponins" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>

              <v-card class="mb-3">
                <v-card-title class="justify-center">
                  <div class="title">Section2: Spectrum Information(Negative)</div>
                </v-card-title>
                <v-card-text class="text-xs-center">
                  <v-form ref="metaboliteInfoForm2">
                    <v-container>
                      <v-layout>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue1" label="1.[M-H]-" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue2" label="2.[M+CL]-" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue3" label="3.[M-H+FA]-" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.fragmentsValues1" label="MS Fragment Ions(Negative)" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.dataSource1" label="MS Fragmentation Data from Reference Standards(Negative)" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.referenceCodes1" label="Reference Sources of Saponins(Negative)" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>

              <v-card class="mb-3">
                <v-card-title class="justify-center">
                  <div class="title">Section3: Spectrum Information(Positive)</div>
                </v-card-title>
                <v-card-text class="text-xs-center">
                  <v-form ref="metaboliteInfoForm3">
                    <v-container>
                      <v-layout>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue4" label="4.[M+H]+" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue5" label="5.[M+Na]+" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue6" label="6.[M+NH4]+" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.fragmentsValues2" label="MS Fragment Ions(Positive)" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.dataSource2" label="MS Fragmentation Data from Reference Standards(Positive)" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.referenceCodes2" label="Reference Sources of Saponins(Positive)" @click="changeBackground($event)"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>

              <v-card class="mb-3">
                <v-card-title class="justify-center">
                  <div class="title">Section4: Images</div>
                </v-card-title>
                <v-card-text class="text-xs-center">
                  <p class="subheading">Please check the boxes where you have upload the related images.</p>
                  <v-form ref="metaboliteInfoForm4">
                    <v-container>
                      <v-layout>
                        <v-flex xs12>
                          <v-checkbox v-model="selectedImagesArray" label="Structure Picture" value="sp"></v-checkbox>
                          <v-checkbox v-model="selectedImagesArray" label="LC-MS/MS Spectrum - 10V, Negative" value="ms10n"></v-checkbox>
                          <v-checkbox v-model="selectedImagesArray" label="LC-MS/MS Spectrum - 40V, Negative" value="ms40n"></v-checkbox>
                          <v-checkbox v-model="selectedImagesArray" label="LC-MS/MS Spectrum - 70V, Negative" value="ms70n"></v-checkbox>
                          <v-checkbox v-model="selectedImagesArray" label="LC-MS/MS Spectrum - 200V, Positive" value="ms200p"></v-checkbox>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>

            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :loading="postLoading" :disabled="postLoading" @click="update()"
                     color="success" class="hidden-xs-only">
                <v-icon>arrow_upward</v-icon>Update
              </v-btn>
              <v-btn :loading="postLoading" :disabled="postLoading" @click="update()"
                     color="success" class="hidden-sm-and-up" icon>
                <v-icon>arrow_upward</v-icon>
              </v-btn>
              <v-btn @click="toManagePage()"
                     color="primary" class="hidden-xs-only">
                <v-icon>build</v-icon>Manage
              </v-btn>
              <v-btn @click="toManagePage()"
                     color="primary" class="hidden-sm-and-up" icon>
                <v-icon>build</v-icon>
              </v-btn>
              <v-btn @click="resetForm()"
                     color="error" class="hidden-xs-only">
                <v-icon>refresh</v-icon>Reset
              </v-btn>
              <v-btn @click="resetForm()"
                     color="error" class="hidden-sm-and-up" icon>
                <v-icon>refresh</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex offset-lg3 lg6 xs12 v-else-if="queryResult === 'null'">
          <v-alert :value="true" color="primary" class="text-xs-center">
            <v-progress-circular :size="30" :width="5"  indeterminate></v-progress-circular>
            &nbsp;&nbsp;
            <span class="title">
              Please wait while we are querying metabolite information from the server...
            </span>
          </v-alert>
          <div class="text-xs-center">
            <v-btn @click="toManagePage()"
                   color="primary" class="hidden-xs-only">
              <v-icon>build</v-icon>Manage
            </v-btn>
            <v-btn @click="toManagePage()"
                   color="primary" class="hidden-sm-and-up" icon>
              <v-icon>build</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex offset-lg3 lg6 xs12 v-else-if="queryResult === 'not_exist'">
          <v-alert :value="true" color="error" class="text-xs-center">
            <span class="title">
              The metabolite queried do not exist!
            </span>
          </v-alert>
          <div class="text-xs-center">
            <v-btn @click="toManagePage()"
                   color="primary" class="hidden-xs-only">
              <v-icon>build</v-icon>Manage
            </v-btn>
            <v-btn @click="toManagePage()"
                   color="primary" class="hidden-sm-and-up" icon>
              <v-icon>build</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex offset-lg3 lg6 xs12 v-else-if="queryResult === 'query_error'">
          <v-alert :value="true" color="error" class="text-xs-center">
            <span class="title">
              An error occurred while querying, detailed information is listed as follows: {{queryError}}
            </span>
          </v-alert>
          <div class="text-xs-center">
            <v-btn @click="toManagePage()"
                   color="primary" class="hidden-xs-only">
              <v-icon>build</v-icon>Manage
            </v-btn>
            <v-btn @click="toManagePage()"
                   color="primary" class="hidden-sm-and-up" icon>
              <v-icon>build</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
      <v-snackbar v-model="snackbarShowed"
                  :color="snackbarColor" :timeout="5000"
                  top multi-line auto-height>
        {{ snackbarMessage }}
        <v-btn flat @click="snackbarShowed = false">
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
  import { COMPOUNDWHERE, UPDATECOMPOUND } from '../utils/apolloString';
  export default {
    name: 'edit-metabolite',
    components: {

    },
    data: () => ({
      queryResult: 'null',
      queryError: '',
      formData: {},
      selectedImagesArray: [],
      postLoading: false,
      snackbarShowed: false,
      snackbarColor: null,
      snackbarMessage: null,
    }),
    computed: {

    },
    methods: {
      processRaw: function (something) {
        if (something.split) {
          // 是字符串
          if (something.trim() !== '') {
            // 不是空字符串
            return something.split(',');
          } else {
            return [];
          }
        } else {
          // 是数组
          return something;
        }
      },
      processImages: function (identifier) {
        if (this.selectedImagesArray.includes(identifier)) {
          return this.formData.uniqueID;
        } else {
          return 'empty';
        }
      },
      setCheckboxInitial: function () {
        console.log(this.formData)
        this.selectedImagesArray = [];
        const noImageArray = ['empty', undefined, null];
        if (!noImageArray.includes(this.formData.structurePicAdd)) {
          this.selectedImagesArray.push('sp');
        }
        if (!noImageArray.includes(this.formData.msData.spectrumPicAddArray1[0])) {
          this.selectedImagesArray.push('ms10n');
        }
        if (!noImageArray.includes(this.formData.msData.spectrumPicAddArray1[1])) {
          this.selectedImagesArray.push('ms40n');
        }
        if (!noImageArray.includes(this.formData.msData.spectrumPicAddArray1[2])) {
          this.selectedImagesArray.push('ms70n');
        }
        if (!noImageArray.includes(this.formData.msData.spectrumPicAddArray2[0])) {
          this.selectedImagesArray.push('ms200p');
        }
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
            self.formData = result.data.compound;
            self.setCheckboxInitial();
            console.log(self.formData);
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
      toManagePage: function () {
        this.$router.push({ name: 'manage-metabolite' })
      },
      resetForm: function () {
        this.loadMetabolite();
      },
      changeBackground: function (e) {
        e.currentTarget.setAttribute('style', 'color: #f44336')
      },
      processPostData: function () {
        return {
          uniqueID: this.formData.uniqueID,
          commonName: this.formData.commonName,
          chemicalFormula: this.formData.chemicalFormula,
          casCode: this.formData.casCode,
          chemSpiderID: this.formData.chemSpiderID,
          pubChemCID: this.formData.pubChemCID,
          smiles: this.formData.smiles,
          literatureSource: {
            update: {
              sourceCodes: {
                set: this.processRaw(this.formData.literatureSource.sourceCodes),
              }
            }
          },
          msData: {
            update: {
              parentValue1: parseFloat(this.formData.msData.parentValue1),
              parentValue2: parseFloat(this.formData.msData.parentValue2),
              parentValue3: parseFloat(this.formData.msData.parentValue3),
              fragmentsValues1: {
                set: this.processRaw(this.formData.msData.fragmentsValues1).map((item)=>{return parseFloat(item)}),
              },
              dataSource1:  {
                set: this.processRaw(this.formData.msData.dataSource1),
              },
              referenceCodes1: {
                set: this.processRaw(this.formData.msData.referenceCodes1),
              },
              parentValue4: parseFloat(this.formData.msData.parentValue4),
              parentValue5: parseFloat(this.formData.msData.parentValue5),
              parentValue6: parseFloat(this.formData.msData.parentValue6),
              fragmentsValues2: {
                set: this.processRaw(this.formData.msData.fragmentsValues2).map((item)=>{return parseFloat(item)}),
              },
              dataSource2: {
                set: this.processRaw(this.formData.msData.dataSource2),
              },
              referenceCodes2:  {
                set: this.processRaw(this.formData.msData.referenceCodes2),
              },
              spectrumPicAddArray1:  {
                set: [this.processImages('ms10n'), this.processImages('ms40n'), this.processImages('ms70n')],
              },
              spectrumPicAddArray2: {
                set: [this.processImages('ms200p')],
              },
            }
          },
          structurePicAdd: this.processImages('sp'),
        };
      },
      update: async function () {
        let self = this;
        self.postLoading = true;
        const postDataObject = self.processPostData();
        try {
          const result = await self.$apollo.mutate({
            mutation: UPDATECOMPOUND,
            variables: {
              data: postDataObject,
              where: {
                uniqueID: self.$route.params.uniqueID,
              },
            },
          });
          // console.log(result.data);
          self.snackbarShowed = true;
          self.snackbarColor = 'success';
          self.snackbarMessage = 'Update metabolite successfully!';
          self.postLoading = false;
        } catch (error) {
          console.error('Error occurred when updating metabolite info: ', error);
          self.snackbarShowed = true;
          self.snackbarColor = 'error';
          self.snackbarMessage = error.message;
          self.postLoading = false;
        }
      },
    },
    watch: {
      $route() {
        this.loadMetabolite();
      },
    },
    mounted () {
      this.loadMetabolite();
    },
  }
</script>

<style scoped>

</style>