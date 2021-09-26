<template>
  <div id="main-div">
    <b-jumbotron id="register_background">
      <template #header>Log-in</template>

      <!-- <template #lead>
        <ul>
          <li><strong>Pet owner</strong>: You are looking for a caretaker</li>
          <li><strong>Pet lover</strong>: You want to earn some cash</li>
        </ul>
      </template> -->

      <hr class="my-4" />

      <b-form id="login_form" @submit="onSubmit" @reset="onReset">
        <b-form-group id="username" label="Username" label-for="i-1">
          <b-form-input
            id="i-1"
            v-model="form.username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="password" label="Password" label-for="i-2">
          <b-form-input
            id="i-1"
            v-model="form.username"
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
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: 'temp',
        password: 'temp'
      }
    }
  },
  methods: {
    // TODO Add working method to login user
    onSubmit(event) {
      event.preventDefault()
      // alert(JSON.stringify(this.form))
      alert(this.form.email)
    }
  }
}
</script>

<style>
#main-div {
  padding-top: 100px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
  text-align: left;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  max-width: 750px;
  margin: auto;
}

#login_form {
  margin-top: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
  border-radius: 5px;
}

#submit_btn {
  font-size: x-large;
  margin-top: 20px;
  margin-bottom: 100px;
}
</style>
