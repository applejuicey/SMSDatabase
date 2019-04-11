<template>
  <div>
    <v-container class="pa-2">
      <v-layout row wrap>
        <v-flex>
          <v-card>
            <v-card-text>
              <slot name="fields"></slot>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <slot name="buttons"></slot>
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
  }
</script>