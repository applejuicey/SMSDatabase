<template>
  <div>
    <v-form ref="loginForm">
      <v-container fluid fill-height class="suitable-height">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-text-field label="Login" type="text"
                              v-model="email" :rules="emailRules"
                              prepend-icon="email"></v-text-field>
                <v-text-field label="Password" type="password"
                              v-model="password" :rules="passwordRules"
                              prepend-icon="lock"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"
                       @click="login()">Login</v-btn>
                <v-btn color="warning"
                       @click="resetLoginForm()">Reset</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
  import gql from 'graphql-tag';
  export default {
    name: 'loginForm',
    data: () => ({
      email: null,
      password: null,
      emailRules:[
        v => !!v || 'E-mail is required!',
        v => /\w+@\w+.\w+/.test(v) || 'E-mail must be valid!'
      ],
      passwordRules:[
        v => !!v || 'Password is required!',
        v => /\w{8,}/.test(v) || 'Password must be valid!'
      ],
    }),
    computed: {

    },
    methods:{
      login: async function () {
        // const result = await this.$apollo.query({
        //   query: gql`query{
        //           compounds{
        //             commonName
        //             casCode
        //           }
        //         }`,
        // });
        try {
          const result = await this.$apollo.mutate({
            mutation: gql`mutation ($email: String!, $password: String!) {
                          login(email: $email, password: $password){
                            currentUser{
                              id
                              name
                              role
                            }
                            token
                          }
                        }`,
            variables: {
              email: this.email,
              password: this.password,
            },
          });
          // console.log(result.data.login);
          const userInfoJSON = JSON.stringify(result.data.login);
          localStorage.setItem('userInfo', userInfoJSON);
          this.$emit('loginSucceeded');
        } catch (error) {
          console.log(error);
        }
      },
      resetLoginForm: function () {
        this.$refs.loginForm.reset();
      },
    },
  }
</script>

<style scoped>
  .suitable-height {
    min-height: 80vh;
  }
</style>