<template>
  <div>
    <div class="header"></div>
    <div id="page_background">
      <div id="page_content">
        <b-jumbotron id="form_content">
          <!-- Title -->
          <template #header>
            <div id="form_title">
              <b-form>
                <p class="animate__animated animate__pulse">Log-in</p>
              </b-form>
            </div>
          </template>

          <!-- form = Where a user inputs data -->
          <b-form id="form_inputs" @submit="onSubmit">
            <hr class="my-4" />

            <!-- Select User Type. PetOwner/PetLover -->
            <b-form-group id="usertype" label="Account type*" label-for="i-9">
              <b-form-select
                id="i-9"
                v-model="form.userType"
                :options="userTypeSelected"
                required
                autofocus
              ></b-form-select>
            </b-form-group>

            <!-- input field -->
            <b-form-group id="username" label="Username*" label-for="i-1">
              <b-form-input
                id="i-1"
                v-model="form.username"
                required
              ></b-form-input>
            </b-form-group>

            <!-- input field -->
            <b-form-group id="password" label="Password*" label-for="i-2">
              <b-form-input
                id="i-2"
                v-model="form.password"
                required
                type="password"
              ></b-form-input>
            </b-form-group>

            <!-- Submit form -->
            <b-button
              id="submit_btn"
              block
              type="submit"
              variant="success"
              style="text-align: center"
              >Login</b-button
            >

            <hr class="my-4" />

            <!-- Bottom text and image -->
            <p style="text-align: center">
              Don't have an account yet?
              <router-link to="/register">Register here</router-link>
            </p>
            <div id="test_image">
              <img
                src="../assets/images/sammy-searching.png"
                alt="..."
                style="
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                  width: 100%;
                "
              />
            </div>
            <div style="text-align: center; color: gray">
              Illustration by
              <a
                href="https://icons8.com/illustrations/author/6101992cfc3ba40007aa1554"
                >Fruzka</a
              >
              from <a href="https://icons8.com/illustrations">Ouch!</a>
            </div>
          </b-form>
        </b-jumbotron>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: '',
        error: '',
        userType: null
      },
      userTypeSelected: [
        { text: 'Select One', value: null },
        'Pet Owner',
        'Pet Lover'
      ]
    }
  },
  mounted() {
    // Happens when page is loaded
    console.log('Login page has loaded')
  },
  methods: {
    // TODO Add working method to login user
    onSubmit(event) {
      event.preventDefault()
      this.login()
    },
    login() {
      console.log(this.form) // debugging
      let route = ''
      if (this.form.userType === 'Pet Owner') {
        route = 'loginowner'
      } else {
        route = 'loginlover'
      }
      Api.post('/authenticate/' + route, this.form).then(
        (res) => {
          // login successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token)
            if (this.form.userType === 'Pet Owner') {
              this.$router.push('/profile/petowners/' + res.data.userId)
            } else {
              this.$router.push('/profile/petLovers/' + res.data.userId)
            }
          }
        },
        (err) => {
          localStorage.removeItem('token')
          console.log(err.response) // debugging
          this.error = err.response.data.error // save the error
        }
      )
    }
  }
}
</script>

<style>
@import '../assets/styles/login-register_light.css';

/* Overrides imported .css */
#page_background {
  height: 100%;
}

#page_content {
  height: 100%;
}
/* Overrides imported .css */

/* Bottom image */
#test_image {
  margin-top: -25px;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  display: block;
}
</style>
