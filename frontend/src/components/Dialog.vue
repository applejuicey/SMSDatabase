<template>
  <div>

    <v-dialog v-model="modal" persistent max-width="600px">
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>{{ headerInside }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <slot name="content"></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <slot name="buttons">
            <v-btn color="primary" @click="closeModal()">
              <v-icon>close</v-icon>
              Close
            </v-btn>
          </slot>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
  export default {
    name: 'dialog',
    props: {
      header: {
        type: String,
        required: true,
      },
    },
    data: function () {
      return {
        modal: false,
      }
    },
    computed: {
      headerInside: function () {
        return this.header;
      },
    },
    methods: {
      closeModal: function () {
        this.modal = false;
      }
    },
  }
</script>

<style scoped>

</style>