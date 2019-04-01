<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex lg6 xs12 order-xs2 order-lg1>
          <v-select outline label="Ion Mode" name="ion-mode-select" :items="ionModeItems" v-model="ionMode"></v-select>
          <v-select outline label="Adduct Type" name="adduct-type-select" :items="adductTypeItems" ></v-select>
          <v-text-field outline clearable prefix="±" label="Tolerance" placeholder="Please enter a molecular weight tolerance here."
            v-model="tolerance"></v-text-field>
        </v-flex>
        <v-flex lg6 xs12 order-xs1 order-lg2>
          <v-textarea outline hint="把这个换为Input，每次按回车后自动增加一个" persistent-hint
            name="query-mass-textarea" label="Query Masses"
            v-model="queryMasses"
            @change="test"
          ></v-textarea>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'searchPageForm',
    data: () => ({
      ionMode: null,
      ionModeItems: ['Positive', 'Negative'],
      tolerance: null,
      queryMasses: null,
    }),
    components: {

    },
    computed: {
      adductTypeItems: function () {
        const adductTypeMap = new Map()
            .set('Positive', ['M+H', 'M+Na', 'M+NH4'])
            .set('Negative', ['M-H', 'M-Cl', 'M+FA-H']);
        return adductTypeMap.get(this.ionMode) || [];
      }
    },
    methods: {
      test: function () {
        console.log(this.queryMasses.toString())
      }
    },
  }
</script>