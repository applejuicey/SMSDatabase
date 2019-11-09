<template>
  <div class="home">

    <v-parallax height="600"
                :src="homeImage1Address">
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
        <div class="subheading font-weight-regular hidden-md-and-up white--text mb-3">Provide assistance to your research</div>
        <div class="display-1 font-weight-regular hidden-sm-and-down white--text mb-5">Provide assistance to your research</div>
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
                :src="homeImage2Address">
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
            <v-card-text class="text-sm-justify">
              Through “Saponins Mass Spectrometry Database” website, we provide three search functions:
              “CLASSIFY”, “SEARCH” and “METABOLITE”. “CLASSIFY” tells users which components possibly belong
              to saponins. Users can identify saponins through parents and daughter ions data from
              high-resolution mass spectrometry in “SEARCH” function. Users can also search their desired
              saponins by inputting full or partial name into “METABOLITE”.
              For herbal mixtures analysis, we recommend “SEARCH” to be run after “CLASSIFY”.
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
                    <v-list-tile-title>#639 Longmian Avenue, Jiangning District, Nanjing, 211198, P.R. China.</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>wzhou@cpu.edu.cn</v-list-tile-title>
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
        cardTitle: 'The “CLASSIFY” Function',
        cardText: `Saponins are screened with high predictive accuracies according to their mass data
        from high-resolution mass spectrometry. The mass data must be input as a CSV file,
        where the first column is compound ID and the second column is mass.
        (Noting: The “CLASSIFY” function only tells users whether or not a given component
        with corresponding mass belongs to saponins.)`
      },
      {
        iconName: 'search',
        cardTitle: 'The “SEARCH” Function',
        cardText: `In the “MS Ion Search”, saponins are searched against parent ions with
         certain mass tolerance under positive or negative ion mode. After MS ion search,
         daughter ions with certain mass tolerance are used to further confirm the saponins
          in the “MS/MS Ion Search”. (Warning: “MS/MS Ion Search” function will be disabled
          if no saponins are found in “MS Ion Search”)`
      },
      {
        iconName: 'list',
        cardTitle: 'The “METABOLITE” Function',
        cardText: `Saponins can be searched with common name inputting.
        Both full and partial name searches are allowed.`
      },
    ],
    homeImage1Address: '/images/home_image1.jpg',
    homeImage2Address: '/images/home_image2.jpg',
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
