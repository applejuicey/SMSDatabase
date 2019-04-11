<template>
  <div>
    <v-container class="pa-2">
      <v-layout row wrap>
        <v-flex>
          <v-data-table :headers="headers" :items="results" :pagination.sync="pagination" :loading="true"
                        class="elevation-1" >
            <v-progress-linear v-slot:progress
                               color="primary" indeterminate></v-progress-linear>
            <template v-slot:items="props">
              <td>
                <span @click="toCompoundDetails(props.item.commonName)"
                      class="cursor-pointer">
                  {{ props.item.commonName }}
                </span>
              </td>
              <td>{{ props.item.casCode }}</td>
              <td>{{ props.item.chemicalFormula }}</td>
              <td>{{ props.item.parentValue }}</td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'searchResultTable',
    data: () => ({
      headers: [
        { text: 'CommonName', align: 'center', sortable: false, value: 'commonName'},
        { text: 'CASCode', align: 'center', sortable: false, value: 'casCode' },
        { text: 'ChemicalFormula', align: 'center', sortable: false, value: 'chemicalFormula' },
        { text: 'ParentValue', align: 'center', value: 'parentValue' },
      ],
      results: [
        {
          commonName: 'Ginsenoside Rb1',
          casCode: '41753-43-9',
          chemicalFormula: 'C54H92O23',
          parentValue: 1107.5957,
        },
        {
          commonName: 'Ginsenoside Rb2',
          casCode: '11021-13-9',
          chemicalFormula: 'C53H90O22',
          parentValue: 1077.5851,
        },
      ],
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
    }),
    methods: {
      toCompoundDetails: function (id) {
        this.$router.push({ name: 'compound', params: { id: id} })
      }
    },
  }
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>