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
<!--      <v-layout row wrap justify-center>-->
<!--        <v-flex>-->
<!--          <div class="text-xs-center">-->
<!--            <div class="headline">Cras facilisis mi vitae nunc</div>-->
<!--            <div class="subheading">Cras facilisis mi vitae nunc</div>-->
<!--          </div>-->
<!--        </v-flex>-->
<!--      </v-layout>-->
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
                About our database
              </div>
            </v-card-title>
            <v-card-text>
              Entering into “Saponins Mass Spectrometry Database” website, we provide three searching functions, including “CLASSIFY”, “SEARCH” and “METABOLITE”.
              The “CLASSIFY” function tells you which components are likely to be saponins.
              User can identify saponins through parent and daughter ions data from high-resolution mass spectrometry in the “SEARCH” function.
              One can also search their desired saponins by inputting full or partial name into the “METABOLITE” function.
              It is suggested that the “SEARCH” function should be run after the execution of the “CLASSIFY” function when you are analyzing herbal mixtures.
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
<!--                <v-list-tile>-->
<!--                  <v-list-tile-action>-->
<!--                    <v-icon class="primary&#45;&#45;text">phone</v-icon>-->
<!--                  </v-list-tile-action>-->
<!--                  <v-list-tile-content>-->
<!--                    <v-list-tile-title>Cras facilisis</v-list-tile-title>-->
<!--                  </v-list-tile-content>-->
<!--                </v-list-tile>-->
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>No. 639, Longmian Avenue, Jiangning District, Nanjing, Jiangsu Province, China</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>zhouwei19860506@163.com</v-list-tile-title>
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
        iconName: 'view_module',
        cardTitle: 'the “CLASSIFY” Function',
        cardText: `Saponins are screened with high predictive accuracies when their mass data from high-resolution
         mass spectrometry is input into CSV file, where one column is compound ID and the other column is mass.
         (Noting: The “CLASSIFY” function only tells users whether or not your mass of components belongs to saponins.)`
      },
      {
        iconName: 'search',
        cardTitle: 'the “SEARCH” Function',
        cardText: `In the “MS Ion Search”, saponins are found by parent ions with certain mass tolerance under
        positive or negative ion mode. After MS1 search, daughter ions with certain mass tolerance under positive
         or negative ion mode are used to further confirm the saponins in the “MS/MS Ion Search”.
         (Warning: “MS/MS Ion Search” function can not work if no saponins are found in “MS Ion Search”)`
      },
      {
        iconName: 'list',
        cardTitle: 'the “METABOLITE” Function',
        cardText: `Saponins are found through common name input. Full or partial name search are both permitted.`
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
