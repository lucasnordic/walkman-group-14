<template>
  <div>
    <div id="bg_page">
      <div id="main_div">
        <b-jumbotron id="main_jumbo">
          <template #header>
            <div id="main_title">
              <b-form> Log-in</b-form>
              <hr class="my-4" />
            </div>
          </template>
          <div id="display_json">
            <pre>{{ petLover }}</pre>
          </div>

          <b-form id="main_form" @submit="onSubmit">
            <b-form-group id="username" label="Username" label-for="i-1">
              <b-form-input
                id="i-1"
                v-model="form.username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="password" label="Password" label-for="i-2">
              <b-form-input
                id="i-2"
                v-model="form.password"
                required
              ></b-form-input>
            </b-form-group>

            <b-button
              id="submit_btn"
              block
              type="submit"
              variant="success"
              style="text-align: center"
              >Login</b-button
            >
          </b-form>

          <!-- debugging -->
          <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">FORM DATA</pre>
    </b-card> -->
        </b-jumbotron>
      </div>
    </div>
    <div id="page_bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
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
    }
  }
}
</script>

<style>
@import '../assets/styles/login-register_light.css';
</style>
