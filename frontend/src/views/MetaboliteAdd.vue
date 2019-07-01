<template>
  <div class="fill-height">
    <v-container fluid fill-height>
      <v-layout align-center row fill-height wrap>
        <v-flex offset-lg2 lg8 xs12>

          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Add New Metabolite</div>
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
                          <v-text-field v-model="formData.commonName" label="Common Name"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12 md6>
                          <v-text-field v-model="formData.uniqueID" label="SMSD ID"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                          <v-text-field v-model="formData.chemicalFormula" label="Chemical Formula"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.casCode" label="CAS Code"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.chemSpiderID" label="ChemSpider ID"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.pubChemCID" label="PubChem CID"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.smiles" label="SMILES"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.literatureSource.sourceCodes" label="Reference Sources of Saponins"></v-text-field>
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
                          <v-text-field v-model="formData.msData.parentValue1" label="1.[M-H]-"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue2" label="2.[M+CL]-"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue3" label="3.[M-H+FA]-"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.fragmentsValues1" label="MS Fragment Ions(Negative)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.dataSource1" label="MS Fragmentation Data from Reference Standards(Negative)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.referenceCodes1" label="Reference Sources of Saponins(Negative)"></v-text-field>
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
                          <v-text-field v-model="formData.msData.parentValue4" label="4.[M+H]+"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue5" label="5.[M+Na]+"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field v-model="formData.msData.parentValue6" label="6.[M+NH4]+"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.fragmentsValues2" label="MS Fragment Ions(Positive)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.dataSource2" label="MS Fragmentation Data from Reference Standards(Positive)"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12>
                          <v-text-field v-model="formData.msData.referenceCodes2" label="Reference Sources of Saponins(Positive)"></v-text-field>
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
              <v-btn :loading="postLoading" :disabled="postLoading" @click="confirm()"
                     color="success" class="hidden-xs-only">
                <v-icon>done</v-icon>Confirm
              </v-btn>
              <v-btn :loading="postLoading" :disabled="postLoading" @click="confirm()"
                     color="success" class="hidden-sm-and-up" icon>
                <v-icon>done</v-icon>
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
  import { CREATECOMPOUND } from '../utils/apolloString';
  export default {
    name: 'add-metabolite',
    data: () => ({
      formData: {
        uniqueID: null,
        commonName: null,
        chemicalFormula: null,
        casCode: null,
        chemSpiderID: null,
        pubChemCID: null,
        smiles: null,
        literatureSource: {
          sourceCodes: null,
        },
        msData: {
          parentValue1: null,
          parentValue2: null,
          parentValue3: null,
          fragmentsValues1: null,
          dataSource1: null,
          referenceCodes1: null,
          parentValue4: null,
          parentValue5: null,
          parentValue6: null,
          fragmentsValues2: null,
          dataSource2: null,
          referenceCodes2: null,
          spectrumPicAddArray1: [],
          spectrumPicAddArray2: [],
        },
        structurePicAdd: null,
      },
      selectedImagesArray: [],
      postLoading: false,
      snackbarShowed: false,
      snackbarColor: null,
      snackbarMessage: null,
    }),
    computed: {

    },
    methods: {
      processRaw: function (str) {
        if (str) {
          return str.split(',')
        } else {
          return [];
        }
      },
      processImages: function (identifier) {
        if (this.selectedImagesArray.includes(identifier)) {
          return this.formData.uniqueID;
        } else {
          return 'empty';
        }
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
            create: {
              sourceCodes: {
                set: this.processRaw(this.formData.literatureSource.sourceCodes),
              }
            }
          },
          msData: {
            create: {
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
      confirm: async function () {
        let self = this;
        self.postLoading = true;
        const postDataObject = self.processPostData();
        try {
          const result = await self.$apollo.mutate({
            mutation: CREATECOMPOUND,
            variables: {
              data: postDataObject,
            },
          });
          // console.log(result.data);
          self.snackbarShowed = true;
          self.snackbarColor = 'success';
          self.snackbarMessage = 'Create metabolite successfully!';
          self.postLoading = false;
        } catch (error) {
          console.error('Error occurred when creating metabolite: ', error);
          self.snackbarShowed = true;
          self.snackbarColor = 'error';
          self.snackbarMessage = error.message;
          self.postLoading = false;
        }
      },
      toManagePage: function () {
        this.$router.push({ name: 'manage-metabolite' })
      },
      resetForm: function () {
        this.$refs.metaboliteInfoForm1.reset();
        this.$refs.metaboliteInfoForm2.reset();
        this.$refs.metaboliteInfoForm3.reset();
        this.$refs.metaboliteInfoForm4.reset();
      },
    },
  }
</script>