<template>
  <div>

    <v-data-table :items="metaboliteFieldsInside" hide-actions hide-headers>
      <template v-slot:items="props">
        <td class="text-xs-left left-column">{{ props.item.key }}:</td>
        <td class="text-xs-left right-column justify-center px-0" v-if="isButtonMode">
          <v-icon small color="success" class="mr-2 cursor-pointer" @click="showImageModal(props.item.key, props.item.value)">
            search
          </v-icon>
        </td>
        <td class="text-xs-left right-column" v-else="isButtonMode">
          <span>
            {{ props.item.value }}
          </span>
        </td>
      </template>
    </v-data-table>

    <v-dialog v-model="modal" persistent max-width="600px">
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>{{ modalHeader }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="text-xs-center">
          <v-img :src="modalImageAddress" contain v-if="modalImageProvided"></v-img>
          <span v-else class="subheading">
            {{modalImageMessage}}
          </span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="closeImageModal()">
            <v-icon>close</v-icon>
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
  export default {
    name: 'MetaboliteTableView',
    components: {

    },
    props: {
      metaboliteFields: {
        type: Array,
        required: true,
      },
      buttons: {
        type: Object,
        required: false,
      },
    },
    data: () => ({
      modal: false,
      modalHeader: '',
      modalImageProvided: false,
      modalImageMessage: '',
      modalImageAddress: '',
    }),
    computed: {
      metaboliteFieldsInside: function () {
        return this.metaboliteFields;
      },
      isButtonMode: function () {
        if (this.buttons) {
          return this.buttons.view
        } else {
          return false;
        }
      },
    },
    methods: {
      showImageModal: function (imgType, imgAddress) {
        const imageMap = new Map()
            .set('Structure Picture', ['/images/structure/', '.jpg'])
            .set('LC-MS/MS Spectrum - 10V, Negative', ['/images/ms/negative/10/', '_10.png'])
            .set('LC-MS/MS Spectrum - 40V, Negative', ['/images/ms/negative/40/', '_40.png'])
            .set('LC-MS/MS Spectrum - 70V, Negative', ['/images/ms/negative/70/', '_70.png'])
            .set('LC-MS/MS Spectrum - 200V, Positive', ['/images/ms/positive/200/', '_200.png']);
        const imageAddressFragmentsArray = imageMap.get(imgType);
        if (imgAddress !== 'empty') {
          this.modalImageProvided = true;
          this.modalImageAddress = imageAddressFragmentsArray[0] + imgAddress +imageAddressFragmentsArray[1];
          // console.log(this.modalImageAddress);
        } else {
          this.modalImageProvided = false;
          this.modalImageMessage = 'No image provided!';
        }
        this.modalHeader = imgType;
        this.modal = true;
      },
      closeImageModal: function () {
        this.modal = false;
      },
    },
  }
</script>

<style scoped>
  .left-column {
    width: 40%;
  }
  .right-column {
    width: 60%;
  }
</style>