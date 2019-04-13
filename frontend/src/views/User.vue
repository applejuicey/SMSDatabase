<template>
  <div class="fill-height custom-bgi">
    <div v-if="alreadyLoggedIn">
      <user-card @logoutSucceeded="processLogoutSucceeded()"></user-card>
    </div>
    <div v-else>
      <login-form @loginSucceeded="processLoginSucceeded()"></login-form>
    </div>
    <v-snackbar v-model="snackbarShowed"
                :color="snackbarColor" :timeout="5000"
                top multi-line auto-height>
      {{ snackbarMessage }}
      <v-btn flat
             @click="snackbarShowed = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import LoginForm from '@/components/LoginForm.vue';
  import UserCard from '@/components/UserCard.vue';
  export default {
    name: 'user',
    data: () => ({
      alreadyLoggedIn: false,
      snackbarShowed: false,
      snackbarColor: null,
      snackbarMessage: null,
    }),
    components: {
      LoginForm,
      UserCard,
    },
    methods: {
      processLoginSucceeded: function () {
        this.alreadyLoggedIn = true;
        this.snackbarShowed = true;
        this.snackbarColor = 'success';
        this.snackbarMessage = 'Login successfully!';
      },
      processLogoutSucceeded: function () {
        this.alreadyLoggedIn = false;
        this.snackbarShowed = true;
        this.snackbarColor = 'success';
        this.snackbarMessage = 'Logout successfully!';
      }
    },
    mounted () {
      // 挂载时检查LocalStorage中是否有用户登录信息，以控制是否显示LoginForm
      this.alreadyLoggedIn = !!localStorage.getItem('userInfo');
    },
  }
</script>

<style scoped>
  .custom-bgi {
    background-image: url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>