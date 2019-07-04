<template>
  <div class="fill-height">
    <v-container fluid fill-height>
      <v-layout align-center row wrap v-if="queryResult === 'exist'">
        <v-flex offset-lg3 lg6 xs12>
          <v-card class="text-xs-center">
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Confirm Delete Metabolite -- {{$route.params.uniqueID}}</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="text-xs-center">
              <p>Are you sure to delete metabolite with details:</p>
              <v-data-table :items="generalInformationArray" hide-actions hide-headers>
                <template v-slot:items="props">
                  <td class="text-xs-left left-column">{{ props.item.key }}:</td>
                  <td class="text-xs-left right-column">{{ props.item.value }}</td>
                </template>
              </v-data-table>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" @click="confirmDelete()" class="hidden-xs-only">
                <v-icon>close</v-icon>Delete
              </v-btn>
              <v-btn color="error" @click="confirmDelete()" class="hidden-sm-and-up" icon>
                <v-icon>close</v-icon>
              </v-btn>
              <v-btn color="primary" @click="toManagePage()" class="hidden-xs-only">
                <v-icon>build</v-icon>Manage
              </v-btn>
              <v-btn color="primary" @click="toManagePage()" class="hidden-sm-and-up" icon>
                <v-icon>build</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout align-center row wrap v-else-if="queryResult === 'null'">
        <v-flex offset-lg3 lg6 xs12>
          <v-alert :value="true" color="primary" class="text-xs-center">
            <v-progress-circular :size="30" :width="5" indeterminate></v-progress-circular>
            &nbsp;&nbsp;
            <span class="title">
              Please wait while we are querying metabolite information from the server...
            </span>
          </v-alert>
          <div class="text-xs-center">
            <v-btn color="primary" @click="toManagePage()" class="hidden-xs-only">
              <v-icon>build</v-icon>Manage
            </v-btn>
            <v-btn color="primary" @click="toManagePage()" class="hidden-sm-and-up" icon>
              <v-icon>build</v-icon>
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
            <v-btn color="primary" @click="toManagePage()" class="hidden-xs-only">
              <v-icon>build</v-icon>Manage
            </v-btn>
            <v-btn color="primary" @click="toManagePage()" class="hidden-sm-and-up" icon>
              <v-icon>build</v-icon>
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
            <v-btn color="primary" @click="toManagePage()" class="hidden-xs-only">
              <v-icon>build</v-icon>Manage
            </v-btn>
            <v-btn color="primary" @click="toManagePage()" class="hidden-sm-and-up" icon>
              <v-icon>build</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { COMPOUNDWHERE, DELETECOMPOUND } from '../utils/apolloString';
  export default {
    name: 'delete-metabolite',
    components: {

    },
    data: () => ({
      queryResult: 'null',
      queryError: '',
      compoundDetail: {},
      generalInformationArray: [],
    }),
    computed: {

    },
    methods: {
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
            self.generalInformationArray.push({ key: 'SMSD ID', value: this.compoundDetail.uniqueID });
            self.generalInformationArray.push({ key: 'Common Name', value: this.compoundDetail.commonName });
            self.generalInformationArray.push({ key: 'Chemical Formula', value: this.compoundDetail.chemicalFormula });
            self.generalInformationArray.push({ key: 'CAS Code', value: this.compoundDetail.casCode });
            self.generalInformationArray.push({ key: 'ChemSpider ID', value: this.compoundDetail.chemSpiderID });
            self.generalInformationArray.push({ key: 'PubChem CID', value: this.compoundDetail.pubChemCID });
            self.generalInformationArray.push({ key: 'SMILES', value: this.compoundDetail.smiles });
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
      confirmDelete: async function () {
        let self = this;
        try {
          await self.$apollo.mutate({
            mutation: DELETECOMPOUND,
            variables: {
              where: {
                uniqueID: self.$route.params.uniqueID,
              },
            },
          });
          location.reload();
        } catch (error) {
          console.error('Error occurred when deleting metabolite: ', error);
        }
      },
      toManagePage: function () {
        this.$router.push({ name: 'manage-metabolite' })
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