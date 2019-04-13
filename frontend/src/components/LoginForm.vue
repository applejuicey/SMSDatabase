<template>
  <div>
    <v-form ref="loginForm" v-model="loginFormValid">
      <v-container fluid fill-height class="suitable-height">
        <v-layout align-center justify-center>
          <v-flex xs12 md8 lg4 xl4>
            <v-card class="elevation-6">
              <v-toolbar color="primary" dark>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-text-field label="Email" type="text"
                              v-model="email" :rules="emailRules"
                              prepend-icon="email"></v-text-field>
                <v-text-field label="Password" type="password"
                              v-model="password" :rules="passwordRules"
                              prepend-icon="lock"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" :loading="loginLoading"
                       @click="login()" :disabled="loginButtonDisabled || loginLoading">Login</v-btn>
                <v-btn color="error"
                       @click="resetLoginForm()">Reset</v-btn>
              </v-card-actions>
              <v-snackbar v-model="snackbarShowed"
                          :color="snackbarColor" :timeout="5000"
                          top multi-line auto-height>
                {{ snackbarMessage }}
                <v-btn flat
                       @click="snackbarShowed = false">
                  Close
                </v-btn>
              </v-snackbar>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
  import { LOGIN } from '../utils/apolloString';
  export default {
    name: 'loginForm',
    data: () => ({
      loginFormValid: false,
      email: null,
      password: null,
      emailRules: [
        v => !!v || 'Email is required!',
        v => /\w+@\w+\.\w+/.test(v) || 'E-mail should contain {@} and {.}!'
      ],
      passwordRules: [
        v => !!v || 'Password is required!',
        v => /\w{8,}/.test(v) || 'Password should have more than 8 digits!'
      ],
      loginLoading: false,
      snackbarShowed: false,
      snackbarColor: null,
      snackbarMessage: null,
    }),
    computed: {
      loginButtonDisabled: function () {
        return !this.loginFormValid;
      }
    },
    methods:{
      login: async function () {
        this.loginLoading = true;
        try {
          const result = await this.$apollo.mutate({
            mutation: LOGIN,
            variables: {
              email: this.email,
              password: this.password,
            },
          });
          // console.log(result.data.login);
          const userInfoJSON = JSON.stringify(result.data.login);
          localStorage.setItem('userInfo', userInfoJSON);
          this.$emit('loginSucceeded');
          this.loginLoading = false;
        } catch (error) {
          console.log(error);
          this.snackbarShowed = true;
          this.snackbarColor = 'error';
          this.snackbarMessage = error.message;
          this.loginLoading = false;
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