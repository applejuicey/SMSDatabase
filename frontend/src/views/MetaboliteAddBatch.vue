<template>
  <div class="fill-height">
    <v-container fluid fill-height>
      <v-layout align-center row fill-height wrap>
        <v-flex offset-lg2 lg8 xs12>

          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Add New Metabolite(Batch)</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <v-img :src="modalImageAddress" contain></v-img>
              <input type="text" v-model="uniqueID">
              <input type="text" v-model="layer1">
              <input type="text" v-model="layer2">
              <input type="file" accept=".csv" id="CSVFileInput">
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :loading="parseLoading" :disabled="parseLoading" @click="parseCSVFile()"
                     color="success" class="hidden-xs-only">
                <v-icon>find_in_page</v-icon>Parse CSV
              </v-btn>
              <v-btn :loading="parseLoading" :disabled="parseLoading" @click="parseCSVFile()"
                     color="success" class="hidden-sm-and-up" icon>
                <v-icon>find_in_page</v-icon>
              </v-btn>
              <v-btn :loading="postLoading" :disabled="postLoading" @click="upload()"
                     color="success" class="hidden-xs-only">
                <v-icon>arrow_upward</v-icon>Upload
              </v-btn>
              <v-btn :loading="postLoading" :disabled="postLoading" @click="upload()"
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
    name: 'add-metabolite-batch',
    data: () => ({
      uniqueID: 'SMSD1',
      layer1: 'negative',
      layer2: '10',
      path: '',
      // modalImageAddress: '/images/ms/positive/200/SMSD1_200.png',
      postDataArray: [],
      parseLoading: false,
      postLoading: false,
      snackbarShowed: false,
      snackbarColor: null,
      snackbarMessage: null,
    }),
    computed: {
      modalImageAddress: function () {
        const id = this.uniqueID;
        const layer1 = this.layer1;
        const layer2 = this.layer2;
        const path = `/images/ms/${layer1}/${layer2}/${id}_${layer2}.png`;
        return path;
      },
    },
    methods: {
      getEmptyMetabolite: function () {
        return {
          uniqueID: null,
          commonName: null,
          chemicalFormula: null,
          casCode: null,
          chemSpiderID: null,
          pubChemCID: null,
          smiles: null,
          literatureSource: {
            sourceCodes: [],
          },
          msData: {
            parentValue1: null,
            parentValue2: null,
            parentValue3: null,
            fragmentsValues1: [],
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
        }
      },
      parseCSVFile: function () {
        const self = this;
        const CSVFile = document.getElementById("CSVFileInput").files[0];
        const reader = new FileReader();
        reader.readAsText(CSVFile);
        reader.onload = function(event){
          const dataString = event.target.result;
          // 每一行为一个元素
          const dataArray = dataString.split('\n');
          // 再在每一行内细分：每一列为一个元素
          for (let i = 0; i < dataArray.length; i++) {
            dataArray[i] = dataArray[i].split(',')
          }
          console.log(dataArray)
          // 填充值
          let singleMetabolite = self.getEmptyMetabolite();
          singleMetabolite.uniqueID = dataArray[5][0];
          singleMetabolite.commonName = dataArray[5][1];
          singleMetabolite.chemicalFormula = dataArray[5][6];
          singleMetabolite.casCode = dataArray[5][2];
          singleMetabolite.chemSpiderID = dataArray[5][4];
          singleMetabolite.pubChemCID = dataArray[5][3];
          singleMetabolite.smiles = dataArray[5][5];
          singleMetabolite.msData.parentValue1 = parseFloat(dataArray[5][9]);
          singleMetabolite.msData.parentValue2 = parseFloat(dataArray[5][7]);
          singleMetabolite.msData.parentValue3 = parseFloat(dataArray[5][8]);
          // [10,150]是negative的碎片
          for (let k = 10; k < 151; k++) {
            singleMetabolite.msData.fragmentsValues1.push(parseFloat(dataArray[5][k]));
          }
          singleMetabolite.uniqueID = dataArray[5][0];
          singleMetabolite.uniqueID = dataArray[5][0];
          singleMetabolite.uniqueID = dataArray[5][0];
          singleMetabolite.uniqueID = dataArray[5][0];
          singleMetabolite.uniqueID = dataArray[5][0];
          singleMetabolite.uniqueID = dataArray[5][0];
          singleMetabolite.uniqueID = dataArray[5][0];
          singleMetabolite.uniqueID = dataArray[5][0];
          singleMetabolite.uniqueID = dataArray[5][0];
        }
      },
      upload: async function () {
        // 一条一条上传，制作进度条
      },
      toManagePage: function () {
        this.$router.push({ name: 'manage-metabolite' })
      },

      processRaw: function (str) {
        if (str.split) {
          return str.split(',')
        } else {
          return str;
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
                set: this.formData.msData.spectrumPicAddArray1,
              },
              spectrumPicAddArray2: {
                set: this.formData.msData.spectrumPicAddArray2,
              },
            }
          },
          structurePicAdd: this.formData.structurePicAdd,
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
          console.log(result.data);
          self.snackbarShowed = true;
          self.snackbarColor = 'success';
          self.snackbarMessage = 'Create metabolite successfully!';
          self.postLoading = false;
        } catch (error) {
          console.log(error);
          self.snackbarShowed = true;
          self.snackbarColor = 'error';
          self.snackbarMessage = error.message;
          self.postLoading = false;
        }
      },


    },
  }
</script>