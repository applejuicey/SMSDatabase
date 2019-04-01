<template>
  <div class="home">

    <v-parallax height="600"
                src="https://images.unsplash.com/photo-1548614416-2a3cb67cdbba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
      <v-layout column align-center justify-center>
        <v-card class="transparent elevation-12 mb-2 hidden-md-and-up">
          <v-card-text class="display-1 font-weight-light white--text">
            Saponins Mass Spectrometry Database
          </v-card-text>
        </v-card>
        <v-card class="transparent elevation-12 mb-2 hidden-sm-and-down">
          <v-card-text class="display-3 font-weight-light  white--text">
            Saponins Mass Spectrometry Database
          </v-card-text>
        </v-card>
        <div class="subheading font-weight-regular hidden-md-and-up white--text mb-3">Provide assistance to your research!</div>
        <div class="display-1 font-weight-regular hidden-sm-and-down white--text mb-5">Provide assistance to your research!</div>
        <v-btn class="primary white--text" large @click="toSearchPage()">
          Search Now!
        </v-btn>
      </v-layout>
    </v-parallax>

    <v-container fluid grid-list-md>
      <v-layout row wrap justify-center>
        <v-flex>
          <div class="text-xs-center">
            <div class="headline">Cras facilisis mi vitae nunc</div>
            <div class="subheading">Cras facilisis mi vitae nunc</div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex>
          <v-layout row wrap justify-center>
            <v-flex xs12 md4>
              <main-page-card :cardInfo="mainPageCardInfoArray[0]"></main-page-card>
            </v-flex>
            <v-flex xs12 md4>
              <main-page-card :cardInfo="mainPageCardInfoArray[1]"></main-page-card>
            </v-flex>
            <v-flex xs12 md4>
              <main-page-card :cardInfo="mainPageCardInfoArray[2]"></main-page-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax height="300"
                src="https://images.unsplash.com/photo-1536316754104-90daa92e4eb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
      <v-layout column align-center justify-center>
        <div class="display-1 font-weight-light">World's Best Saponins Mass Spectrometry Database</div>
      </v-layout>
    </v-parallax>

    <v-container fluid grid-list-md>
      <v-layout row wrap justify-center>
        <v-flex xs12 md6>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="justify-center">
              <div class="headline text-xs-center">
                <v-icon class="primary--text">info</v-icon>
                Cras facilisis
              </div>
            </v-card-title>
            <v-card-text>
              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="justify-center">
              <div class="headline text-xs-center">
                <v-icon class="primary--text">perm_contact_calendar</v-icon>
                Contact us
              </div>
            </v-card-title>
            <v-card-text>
              <v-list class="transparent">
                <v-list-tile class="justify-center">
                  <v-list-tile-action>
                    <v-icon class="primary--text">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Cras facilisis</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Cras facilisis</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Cras facilisis</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
import MainPageCard from '@/components/MainPageCard.vue'

export default {
  name: 'home',
  data: () => ({
    mainPageCardInfoArray: [
      {
        iconName: 'color_lens',
        cardTitle: 'Cras facilisis',
        cardText: `Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.`
      },
      {
        iconName: 'flash_on',
        cardTitle: 'Cras facilisis',
        cardText: `Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.`
      },
      {
        iconName: 'build',
        cardTitle: 'Cras facilisis',
        cardText: `Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.`
      },
    ],
  }),
  components: {
    MainPageCard,
  },
  methods: {
    toSearchPage: function () {
      this.$router.push({ name: 'search' })
    },
  },
}
</script>
