<template>
  <div>
    <div v-if="alreadyLoggedIn">
      alreadyLoggedIn: {{alreadyLoggedIn}}
      <button @click="logout()">logout</button>
    </div>
    <div v-else>
      alreadyLoggedIn: {{alreadyLoggedIn}}
      <login-form @loginSucceeded="processLoginSucceeded()"></login-form>
    </div>
  </div>
</template>

<script>
  import LoginForm from '@/components/LoginForm.vue';
  export default {
    name: 'user',
    data: () => ({
      alreadyLoggedIn: false,
    }),
    components: {
      LoginForm,
    },
    methods: {
      processLoginSucceeded: function () {
        this.alreadyLoggedIn = true;
      },
      logout: function () {
        localStorage.removeItem('userInfo');
        this.alreadyLoggedIn = false;
      }
    },
    mounted () {
      // 挂载时检查LocalStorage中是否有用户登录信息，以控制是否显示LoginForm
      this.alreadyLoggedIn = !!localStorage.getItem('userInfo');
    },
  }
</script>