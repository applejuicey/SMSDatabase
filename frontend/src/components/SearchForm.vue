<template>
  <div>
    <v-container class="pa-2">
      <v-layout row wrap>
        <v-flex>
          <v-card>
            <v-card-text>
              <v-form ref="searchForm">
                <slot name="fields"></slot>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <slot name="buttons"></slot>
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
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'SearchForm',
    data: () => ({

    }),
    methods: {
      resetForm: function () {
        this.$refs.searchForm.reset();
      }
    },
  }
</script>