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
              <div class="mb-4">
                <span>Please select a proper CSV file: </span>
                <input type="file" id="CSVFileInput" accept=".csv">
              </div>
              <div class="mb-4">
                <v-data-table :headers="headers" :items="rawDataArray" class="elevation-1" :loading="tableLoading">
                  <template v-slot:items="props">
                    <td>{{ props.item.uniqueID }}</td>
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
              <div class="mb-4" v-if="canUpload">
                Remaining: {{ remainingNumber }}. Please press the upload button!
                <v-progress-linear v-model="progressValue"></v-progress-linear>
              </div>
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
      rawDataArray: [],
      headers: [
        { text: 'SMSD ID', value: 'uniqueID', align: 'center' },
        { text: 'Common Name', value: 'commonName', align: 'center' },
        { text: 'Chemical Formula', value: 'chemicalFormula', align: 'center' },
        { text: '[M-H]-', value: 'msData.parentValue1', align: 'center' },
        { text: '[M+CL]-', value: 'msData.parentValue2', align: 'center' },
        { text: '[M-H+FA]-', value: 'msData.parentValue3', align: 'center' },
        { text: '[M+H]+', value: 'msData.parentValue4', align: 'center' },
        { text: '[M+Na]+', value: 'msData.parentValue5', align: 'center' },
        { text: '[M+NH4]+', value: 'msData.parentValue6', align: 'center' },
      ],
      tableLoading: false,
      postDataArray: [],
      parseLoading: false,
      postLoading: false,
      canUpload: false,
      progressValue: 0,
      remainingNumber: 0,
      snackbarShowed: false,
      snackbarColor: null,
      snackbarMessage: null,
    }),
    computed: {

    },
    methods: {
      processRawString: function (str, identifier) {
        if (identifier === 'string') {
          if (str.trim() === "") {
            return null;
          } else {
            return str;
          }
        } else if (identifier === 'float') {
          if (str.trim() === "") {
            return null;
          } else {
            return parseFloat(str);
          }
        } else {
          // error
        }
      },
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
            dataSource1: [],
            referenceCodes1: [],
            parentValue4: null,
            parentValue5: null,
            parentValue6: null,
            fragmentsValues2: [],
            dataSource2: [],
            referenceCodes2: [],
            spectrumPicAddArray1: [],
            spectrumPicAddArray2: [],
          },
          structurePicAdd: null,
        }
      },
      processPostData: function (rawData) {
        return {
          uniqueID: rawData.uniqueID,
          commonName: rawData.commonName,
          chemicalFormula: rawData.chemicalFormula,
          casCode: rawData.casCode,
          chemSpiderID: rawData.chemSpiderID,
          pubChemCID: rawData.pubChemCID,
          smiles: rawData.smiles,
          literatureSource: {
            create: {
              sourceCodes: {
                set: rawData.literatureSource.sourceCodes,
              }
            }
          },
          msData: {
            create: {
              parentValue1: rawData.msData.parentValue1,
              parentValue2: rawData.msData.parentValue2,
              parentValue3: rawData.msData.parentValue3,
              fragmentsValues1: {
                set: rawData.msData.fragmentsValues1,
              },
              dataSource1:  {
                set: rawData.msData.dataSource1,
              },
              referenceCodes1: {
                set: rawData.msData.referenceCodes1,
              },
              parentValue4: rawData.msData.parentValue4,
              parentValue5: rawData.msData.parentValue5,
              parentValue6: rawData.msData.parentValue6,
              fragmentsValues2: {
                set: rawData.msData.fragmentsValues2,
              },
              dataSource2: {
                set: rawData.msData.dataSource2,
              },
              referenceCodes2:  {
                set: rawData.msData.referenceCodes2,
              },
              spectrumPicAddArray1:  {
                set: rawData.msData.spectrumPicAddArray1,
              },
              spectrumPicAddArray2: {
                set: rawData.msData.spectrumPicAddArray2,
              },
            }
          },
          structurePicAdd: rawData.structurePicAdd,
        };
      },
      parseCSVFile: function () {
        const self = this;
        self.parseLoading = true;
        self.tableLoading = true;
        const CSVFile = document.getElementById("CSVFileInput").files[0];
        const reader = new FileReader();
        try {
          reader.readAsText(CSVFile);
          reader.onload = function (event) {
            const dataString = event.target.result;
            // 每一行为一个元素
            const dataArray = dataString.split('\n');
            // 再在每一行内细分：每一列为一个元素
            for (let i = 0; i < dataArray.length; i++) {
              dataArray[i] = dataArray[i].split(',')
            }
            // console.log(dataArray)
            // 循环填充值
            for (let j = 1; j < dataArray.length; j++) {
              let singleMetabolite = self.getEmptyMetabolite();
              singleMetabolite.uniqueID = self.processRawString(dataArray[j][0], 'string');
              singleMetabolite.commonName = self.processRawString(dataArray[j][1], 'string');
              singleMetabolite.chemicalFormula = self.processRawString(dataArray[j][6], 'string');
              singleMetabolite.casCode = self.processRawString(dataArray[j][2], 'string');
              singleMetabolite.chemSpiderID = self.processRawString(dataArray[j][4], 'string');
              singleMetabolite.pubChemCID = self.processRawString(dataArray[j][3], 'string');
              singleMetabolite.smiles = self.processRawString(dataArray[j][5], 'string');
              singleMetabolite.msData.parentValue1 = self.processRawString(dataArray[j][9], 'float');
              singleMetabolite.msData.parentValue2 = self.processRawString(dataArray[j][7], 'float');
              singleMetabolite.msData.parentValue3 = self.processRawString(dataArray[j][8], 'float');
              // [10,150]是fragmentsValues1
              for (let k = 10; k < 151; k++) {
                if (dataArray[j][k].trim() === '') {
                  break;
                }
                singleMetabolite.msData.fragmentsValues1.push(self.processRawString(dataArray[j][k], 'float'));
              }
              singleMetabolite.msData.dataSource1[0] = self.processRawString(dataArray[j][151], 'string');
              // [152,179]是referenceCodes1
              for (let k = 152; k < 180; k++) {
                if (dataArray[j][k].trim() === '') {
                  break;
                }
                singleMetabolite.msData.referenceCodes1.push(self.processRawString(dataArray[j][k], 'string'));
              }
              // [180,279]是literatureSource.sourceCodes
              for (let k = 180; k < 280; k++) {
                if (dataArray[j][k].trim() === '') {
                  break;
                }
                singleMetabolite.literatureSource.sourceCodes.push(self.processRawString(dataArray[j][k], 'string'));
              }
              singleMetabolite.msData.dataSource2[0] = self.processRawString(dataArray[j][280], 'string');
              // [281,282]是referenceCodes2
              for (let k = 281; k < 283; k++) {
                if (dataArray[j][k].trim() === '') {
                  break;
                }
                singleMetabolite.msData.referenceCodes2.push(self.processRawString(dataArray[j][k], 'string'));
              }
              singleMetabolite.msData.parentValue4 = self.processRawString(dataArray[j][285], 'float');
              singleMetabolite.msData.parentValue5 = self.processRawString(dataArray[j][283], 'float');
              singleMetabolite.msData.parentValue6 = self.processRawString(dataArray[j][284], 'float');
              // [286,328]是fragmentsValues2
              for (let k = 286; k < 329; k++) {
                if (dataArray[j][k].trim() === '') {
                  break;
                }
                singleMetabolite.msData.fragmentsValues2.push(self.processRawString(dataArray[j][k], 'float'));
              }
              // console.log(singleMetabolite)
              self.rawDataArray.push(singleMetabolite);
            }
            // console.log(self.rawDataArray);
            for (let i = 0; i < self.rawDataArray.length; i++) {
              self.postDataArray[i] = self.processPostData(self.rawDataArray[i]);
            }
            // console.log(self.postDataArray);
            self.snackbarShowed = true;
            self.snackbarColor = 'success';
            self.snackbarMessage = 'Parsing complete!';
            self.canUpload = true;
            console.log(self.postDataArray);
          };
        } catch (error) {
          console.error(error);
          self.snackbarShowed = true;
          self.snackbarColor = 'error';
          self.snackbarMessage = 'An error occurred: ' + error;
        }
        self.parseLoading = false;
        self.tableLoading = false;
      },
      upload: async function () {
        // 一条一条上传，制作进度条
        const self = this;
        self.postLoading = true;
        let successNumber = 0;
        let failureNumber = 0;
        for (let i = 0; i < self.postDataArray.length; i++) {
          // 上传一个
          try {
            const result = await self.$apollo.mutate({
              mutation: CREATECOMPOUND,
              variables: {
                data: self.postDataArray[i],
              },
            });
            // console.log(`Upload metabolite ${self.postDataArray[i].uniqueID} complete! Result:`);
            // console.log(result.data);
            successNumber = successNumber + 1;
          } catch (error) {
            console.error(`Upload metabolite ${self.postDataArray[i].uniqueID} failed! Error: ` + error);
            failureNumber = failureNumber + 1;
          }
          self.remainingNumber = self.postDataArray.length - (successNumber + failureNumber);
          self.progressValue = (successNumber + failureNumber) / (self.postDataArray.length) * 100;
        }
        self.snackbarShowed = true;
        self.snackbarColor = 'success';
        self.snackbarMessage = `Uploading complete! Total: ${self.postDataArray.length}; Success: ${successNumber}; Failure: ${failureNumber}`;
        self.postLoading = false;
      },
      toManagePage: function () {
        this.$router.push({ name: 'manage-metabolite' })
      },
    },
  }
</script>