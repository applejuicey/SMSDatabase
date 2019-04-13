<template>
  <div>
    <v-container fluid fill-height class="suitable-height">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 lg4>
          <v-card class="elevation-6">
            <v-toolbar color="primary" dark>
              <v-toolbar-title>User Profile</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn flat icon
                     @click="loadUserInfo()">
                <v-icon>refresh</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-subheader>Your profile is listed as follows:</v-subheader>
              <v-data-table :items="userProfileArray"
                  class="elevation-1"
                  hide-actions hide-headers>
                <template v-slot:items="props">
                  <td >{{ props.item.leftCellText }}</td>
                  <td class="text-xs-left">{{ props.item.rightCellText }}</td>
                </template>
              </v-data-table>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary"
                     @click.stop="updateUserProfileDialogShowed = true">
                <v-icon>arrow_upward</v-icon>
                Update User Profile
              </v-btn>
              <v-btn color="error"
                     @click="logout()">
                <v-icon>logout</v-icon>
                Logout
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-dialog v-model="updateUserProfileDialogShowed" persistent max-width="600px">
            <v-form ref="updateUserProfileForm" v-model="updateUserProfileFormValid">
              <v-card>
                <v-toolbar color="primary" dark>
                  <v-toolbar-title>Update User Profile</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <div class="subheading">* indicates required field.</div>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field label="Name*" required
                                      v-model="userProfileObjectNew.name"
                                      browser-autocomplete="new-password"
                                      hint="Valid name can't be empty."
                                      prepend-icon="font_download" persistent-hint clearable></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field label="Email*" required
                                      v-model="userProfileObjectNew.email" :rules="emailRules"
                                      browser-autocomplete="new-password"
                                      hint="Valid Email address should contain {@} and {.}."
                                      prepend-icon="email" persistent-hint clearable></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field label="Password" type="password" required
                                      v-model="userProfileObjectNew.password" :rules="passwordRules"
                                      browser-autocomplete="new-password"
                                      hint="Keep empty if you don't want to change. Valid password should have more than 8 digits."
                                      prepend-icon="lock" persistent-hint clearable></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-select label="Role*" required disabled
                                  :items="['USER', 'ADMIN']"
                                  v-model="userProfileObjectNew.role"
                                  prepend-icon="person"></v-select>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="success" :loading="updateLoading"
                         :disabled="updateButtonDisabled || updateLoading"
                         @click="updateUserProfile()">
                    <v-icon>check</v-icon>
                    Update
                  </v-btn>
                  <v-btn color="primary" @click="updateUserProfileDialogShowed = false">
                    <v-icon>close</v-icon>
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-dialog>
          <v-snackbar v-model="snackbarShowed"
                      :color="snackbarColor" :timeout="5000"
                      top multi-line auto-height>
            {{ snackbarMessage }}
            <v-btn flat
                   @click="snackbarShowed = false">
              Close
            </v-btn>
          </v-snackbar>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import {ME, UPDATEUSER } from '../utils/apolloString';
  export default {
    name: 'userCard',
    data: () => ({
      userProfileObjectOld: null,
      userProfileArray: [],
      updateUserProfileDialogShowed: false,
      updateUserProfileFormValid: false,
      userProfileObjectNew: {
        name: null,
        email: null,
        password: null,
        role: null,
      },
      emailRules: [
        v => !!v || 'Email is required!',
        v => /\w+@\w+\.\w+/.test(v) || 'E-mail should contain {@} and {.}!'
      ],
      passwordRules: [
        v => {
          if (v) {
            return /\w{8,}/.test(v) || 'Password should have more than 8 digits!';
          } else {
            return true;
          }
        },
      ],
      updateLoading: false,
      snackbarShowed: false,
      snackbarColor: null,
      snackbarMessage: null,
    }),
    computed: {
      updateButtonDisabled: function () {
        return !this.updateUserProfileFormValid;
      }
    },
    watch: {
      userProfileObjectOld: function (newVal, oldVAL) {
        this.userProfileObjectNew = {
          name: this.userProfileObjectOld.name,
          email: this.userProfileObjectOld.email,
          password: null,
          role: this.userProfileObjectOld.role,
        };
        this.userProfileArray = [
          {
            leftCellText: 'ID',
            rightCellText: this.userProfileObjectOld.id
          },
          {
            leftCellText: 'Name',
            rightCellText: this.userProfileObjectOld.name
          },
          {
            leftCellText: 'Email',
            rightCellText: this.userProfileObjectOld.email
          },
          {
            leftCellText: 'Role',
            rightCellText: this.userProfileObjectOld.role
          },
        ];
      }
    },
    mounted () {
      this.loadUserInfo();
    },
    methods:{
      logout: function () {
        localStorage.removeItem('userInfo');
        this.$emit('logoutSucceeded');
      },
      loadUserInfo: async function () {
        try {
          const result = await this.$apollo.query({
            query: ME,
            fetchPolicy: 'no-cache',
          });
          // console.log(result.data);
          this.userProfileObjectOld = result.data.me;
        } catch (error) {
          console.log(error);
          this.snackbarShowed = true;
          this.snackbarColor = 'error';
          this.snackbarMessage = error.message;
        }
      },
      updateUserProfile: async function () {
        this.updateLoading = true;
        try {
          const result = await this.$apollo.mutate({
            mutation: UPDATEUSER,
            variables: {
              data: this.userProfileObjectNew,
              where: {
                id: this.userProfileObjectOld.id,
              },
            },
          });
          // console.log(result.data);
          this.snackbarShowed = true;
          this.snackbarColor = 'success';
          this.snackbarMessage = 'Update successfully!';
          this.updateLoading = false;
        } catch (error) {
          console.log(error);
          this.snackbarShowed = true;
          this.snackbarColor = 'error';
          this.snackbarMessage = error.message;
          this.updateLoading = false;
        }
        this.updateUserProfileDialogShowed = false;
      },
    },
  }
</script>

<style scoped>
  .suitable-height {
    min-height: 80vh;
  }
</style>