<template>
  <div>
    <v-container class="pa-2">
      <v-layout row wrap>
        <v-flex>
          <v-data-table :headers="headersInside" :items="resultsInside" :pagination.sync="paginationInside" :loading="tableLoadingInside"
                        class="elevation-1" >
            <v-progress-linear v-slot:progress
                               color="primary" indeterminate></v-progress-linear>
            <template v-slot:items="props">
              <td>{{ props.item.uniqueID }}</td>
              <td>{{ props.item.commonName }}</td>
              <td>{{ props.item.casCode }}</td>
              <td>{{ props.item.chemicalFormula }}</td>
              <td class="justify-center layout px-0">
                <v-icon small color="success" class="mr-2 cursor-pointer" @click="viewItem(props.item.uniqueID)" v-if="showViewButton">
                  search
                </v-icon>
                <v-icon small color="primary" class="mr-2 cursor-pointer" @click="editItem(props.item.uniqueID)" v-if="showEditButton">
                  edit
                </v-icon>
                <v-icon small color="error" class="mr-2 cursor-pointer" @click="deleteItem(props.item.uniqueID)" v-if="showDeleteButton">
                  delete
                </v-icon>
              </td>
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
    props: {
      headers: {
        type: Array,
        required: true,
      },
      results: {
        type: Array,
        required: true,
      },
      pagination: {
        type: Object,
        required: false,
      },
      tableLoading: {
        type: Boolean,
        required: false,
      },
      buttons: {
        type: Object,
        required: true,
      },
    },
    data: function () {
      return {

      }
    },
    computed: {
      headersInside: function () {
        return this.headers;
      },
      resultsInside: function () {
        return this.results;
      },
      paginationInside: {
        get: function () {
          return this.pagination || {
            descending: false,
            page: 1,
            rowsPerPage: 10,
          };
        },
        set: function () {

        }
      },
      tableLoadingInside: function () {
        return this.tableLoading || false;
      },
      showViewButton: function () {
        return this.buttons.view || true;
      },
      showEditButton: function () {
        return this.buttons.edit || false;
      },
      showDeleteButton: function () {
        return this.buttons.delete || false;
      },
    },
    methods: {
      viewItem: function (id) {
        this.$router.push({ name: 'view-metabolite', params: { uniqueID: id} })
      },
      editItem: function (id) {
        this.$router.push({ name: 'edit-metabolite', params: { uniqueID: id} })
      },
      deleteItem: function (id) {
        this.$router.push({ name: 'delete-metabolite', params: { uniqueID: id} })
      },
    },
  }
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>