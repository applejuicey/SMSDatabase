<template>
  <div class="fill-height">
    <v-container fluid fill-height>
      <v-layout align-center row fill-height wrap>
        <v-flex offset-lg2 lg8 xs12>

          <v-card>
            <v-card-title class="justify-center primary-title">
              <div class="headline">Metabolite Classification</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <div class="mb-4">
                <span>Please select a proper CSV file: </span>
                <input type="file" id="CSVFileInput" accept=".csv">
              </div>
              <div class="mb-4">
                <v-data-table :headers="headers" :items="rawDataArray" class="elevation-1" :loading="tableLoading">
                  <template v-slot:items="props">
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.original }}</td>
                    <td>{{ props.item.classification }}</td>
                    <td>{{ props.item.integer }}</td>
                    <td>{{ props.item.fraction }}</td>
                  </template>
                </v-data-table>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :loading="parseLoading" :disabled="parseLoading" @click="parseCSVFile()"
                     color="success" class="hidden-xs-only">
                <v-icon>view_module</v-icon>Parse&Classify
              </v-btn>
              <v-btn :loading="parseLoading" :disabled="parseLoading" @click="parseCSVFile()"
                     color="success" class="hidden-sm-and-up" icon>
                <v-icon>view_module</v-icon>
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
  export default {
    name: 'classify',
    data: () => ({
      rawDataArray: [],
      headers: [
        { text: 'ID', value: 'id', align: 'center' },
        { text: 'Original Value', value: 'original', align: 'center' },
        { text: 'Classification', value: 'classification', align: 'center' },
        { text: 'Integer Part', value: 'integer', align: 'center' },
        { text: 'Fraction Part', value: 'fraction', align: 'center' },
      ],
      tableLoading: false,
      parseLoading: false,
      classifyLoading: false,
      snackbarShowed: false,
      snackbarColor: null,
      snackbarMessage: null,
    }),
    computed: {

    },
    methods: {
      classifier: function (integer, fraction) {
        const z = 0.0056383 * integer + 7.7111838 * fraction;
        if (z >= 6.491815) {
          return 'saponin';
        } else {
          return 'nonsaponin';
        }
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
            for (let i = 0; i < dataArray.length; i++) {
              if (dataArray[i][0].trim() === '') {
                break;
              }
              let singleDataObject = {};
              singleDataObject.id = dataArray[i][0];
              singleDataObject.original = dataArray[i][1];
              singleDataObject.integer = parseFloat(singleDataObject.original.split('.')[0]);
              singleDataObject.fraction = parseFloat('0.' + singleDataObject.original.split('.')[1]);
              self.rawDataArray.push(singleDataObject);
            }
            // console.log(self.rawDataArray);
            for (let item of self.rawDataArray) {
              const result = self.classifier(item.integer, item.fraction);
              if (result === 'saponin') {
                item.classification = 'Saponin';
              } else if (result === 'nonsaponin') {
                item.classification = 'Non-saponin';
              }
            }
            self.snackbarShowed = true;
            self.snackbarColor = 'success';
            self.snackbarMessage = 'Parsing complete!';
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
    },
  }
</script>

<style scoped>

</style>