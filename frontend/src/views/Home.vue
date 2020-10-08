<template>
  <div class="home">

    <v-parallax height="500"
                :src="homeImage1Address">
      <v-layout column align-center justify-center>
        <v-card class="transparent elevation-12 mb-2 hidden-md-and-up">
          <v-card-text class="display-1 font-weight-light black--text bg-blur font-sui px-4">
            Saponins Mass Spectrometry Database
          </v-card-text>
        </v-card>
        <v-card class="transparent elevation-12 mb-2 hidden-sm-and-down">
          <v-card-text class="display-3 font-weight-light black--text bg-blur font-sui">
            Saponins Mass Spectrometry Database
          </v-card-text>
        </v-card>
        <div class="subheading font-weight-light hidden-md-and-up black--text my-4 font-sui">Accelerate your research.</div>
        <div class="display-1 font-weight-light hidden-sm-and-down black--text my-4 font-sui">Accelerate your research.</div>
        <v-btn class="primary black--text" large @click="toSearchPage()">
          Search Now!
        </v-btn>
      </v-layout>
    </v-parallax>

    <v-container fluid grid-list-md>
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
        <div class="display-1 font-weight-light font-sui black--text px-4">BEST FREE Saponins Mass Spectrometry Database</div>
      </v-layout>
    </v-parallax>

    <v-container fluid grid-list-md>
      <v-layout row wrap justify-center>
        <v-flex xs12 md6>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="justify-center">
              <div class="headline text-xs-center font-sui font-weight-light">
                <v-icon class="primary--text">info</v-icon>
                About Our Database
              </div>
            </v-card-title>
            <v-card-text class="font-sui font-weight-light">
              In this webapp we provide three main modules, “CLASSIFY”, “SEARCH” and “METABOLITE”, to accelerate your research on saponins.
              Based on machine learning techniques, we developed the “CLASSIFY” function, which tells users the possibility of a compound belongs to saponins.
              With the help of <a href="https://graphql.org/">GraphQL</a> we built the two-step ion search, the so-called “SEARCH” function, to help you target a saponin according to its mass spectrometry data. For analysis of herbal mixtures, we recommend the “SEARCH” function to be run after employing the “CLASSIFY” function.
              Also, we offer you a common way of querying a saponin through full name search or part name search in the “METABOLITE” function.
              The database was developed based on <a href="https://vuejs.org/index.html">Vue.js</a> and <a href="https://www.prisma.io/">Prisma</a>.
              For more technical information and bug report, please find the author <a title="WeChatID: fanyangsb123">here</a>.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md3>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="justify-center">
              <div class="headline text-xs-center font-sui font-weight-light">
                <v-icon class="primary--text">create</v-icon>
                Cite the SMSD
              </div>
            </v-card-title>
            <v-card-text class="font-sui font-weight-light">
              [1] Huang FQ, Dong X, Yin X, Fan Y, Fan Y, Mao C, Zhou W*, A mass spectrometry database for identification of saponins in plants. J. Chromatogr. A 1625 (2020) 461296.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md3>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="justify-center">
              <div class="headline text-xs-center font-sui font-weight-light">
                <v-icon class="primary--text">perm_contact_calendar</v-icon>
                Contact Us
              </div>
            </v-card-title>
            <v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title class="font-sui font-weight-light">
                      <a href="https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD%E8%8D%AF%E7%A7%91%E5%A4%A7%E5%AD%A6%E6%B1%9F%E5%AE%81%E6%A0%A1%E5%8C%BA/@31.9005175,118.9139593,17z/data=!4m5!3m4!1s0x35b590f23c98375d:0x35604d2ff711e7e8!8m2!3d31.900513!4d118.916148">
                        #639 Longmian Avenue, Jiangning District, Nanjing, 211198, P.R. China.
                      </a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <a href="mailto:wzhou@cpu.edu.cn">
                        wzhou@cpu.edu.cn
                      </a>
                    </v-list-tile-title>
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
        cardTitle: 'The [CLASSIFY] Function',
        cardText: `This function provides you with the ability to judge accurately whether a compound belongs to saponins. A classification model was trained based on the collected saponins data, and will be used to output the possibility of a particular compound being a saponin. You should record the high-resolution mass spectrometry data of this potential candidate in a CSV file and upload afterwards. The figure in the first column of the CSV file should be a compound ID, and the figure in the second column should be the corresponding mass.`
      },
      {
        iconName: 'search',
        cardTitle: 'The [SEARCH] Function',
        cardText: `This function provides you with our original two-step ms ion search feature. In the first crude search, which is termed the MS Ion Search, you should fill in the parent ion information. Queries are then processed by our database according to your specified tolerance interval. Further, a more precise search (the MS/MS Ion Search) can be implemented upon user-entered daughter ion information. Two matching algorithms will be called to sort the most hit targets. Note that the more precise MS/MS Ion Search step will not be triggered until saponins are found in the crude MS Ion Search step.`
      },
      {
        iconName: 'list',
        cardTitle: 'The [METABOLITE] Function',
        cardText: `This function provides you with the ability to search a specific saponin through its common name. Note that both full name and partial name are eligible.`
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

<style scoped>
  .bg-blur {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(15px);
  }
  .font-sui {
    font-family: Segoe UI, sans-serif !important;
  }
</style>