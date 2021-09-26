<template>
  <div id="main-div">
    <b-jumbotron id="register_background">
      <template #header>
        <b-form id="register_title"> Register</b-form></template
      >

      <template #lead>
        <b-form id="register_info">
          <ul>
            <li>
              Select <strong>Pet owner</strong> if you are looking for a
              caretaker for your pet
            </li>
            <li>
              Select <strong>Pet lover</strong> if you would like to take care
              of pets
            </li>
          </ul>
          <hr class="my-4"
        /></b-form>
      </template>

      <b-form id="register_form" @submit="onSubmit">
        <b-form-group id="usertype" label="I want to be a," label-for="i-9">
          <b-form-select
            id="i-9"
            v-model="form2.user"
            :options="userType"
            required
            autofocus
          ></b-form-select>
        </b-form-group>

        <b-form-group id="userName" label="Username" label-for="i-1">
          <b-form-input
            id="i-1"
            v-model="form.userinfo.userName"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="password" label="Password" label-for="i-2">
          <b-form-input
            id="i-2"
            v-model="form.userinfo.password"
            required
            selected
          ></b-form-input>
        </b-form-group>

        <b-form-group id="fullname" label="Full name" label-for="i-3">
          <b-form-input
            id="i-3"
            v-model="form.userinfo.fullname"
            required
          ></b-form-input>
        </b-form-group>

        <div class="accordion" role="tablist">
          <!-- TODO Add options for adding a pet or a service when registering -->
          <!--<b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="info"
                >Pet owner/lover Info</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
              visible
            >
              <b-card-body>
                <b-card-text>Petowner</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card> -->

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="primary"
                >Contact Info (optional)
              </b-button></b-card-header
            >
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-form-group id="email" label="Email" label-for="i-4">
                  <b-form-input
                    id="i-4"
                    v-model="form.userinfo.contactInfo.email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="phoneNumber"
                  label="Phone number"
                  label-for="i-5"
                >
                  <b-form-input
                    id="i-5"
                    v-model="form.userinfo.contactInfo.phoneNumber"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="city" label="City" label-for="i-6">
                  <b-form-input
                    id="i-6"
                    v-model="form.userinfo.contactInfo.address.city"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="streetName"
                  label="Street name"
                  label-for="i-7"
                >
                  <b-form-input
                    id="i-7"
                    v-model="form.userinfo.contactInfo.address.streetName"
                    placeholder=""
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="streetNumber"
                  label="Street Number"
                  label-for="i-8"
                >
                  <b-form-input
                    id="i-8"
                    v-model="form.userinfo.contactInfo.address.streetNumber"
                  ></b-form-input>
                </b-form-group>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>

        <b-button
          id="submit_btn"
          block
          type="submit"
          variant="success"
          style="text-align: center"
          >Register Account</b-button
        >
        <hr class="my-4" />
        <p>
          Do you already have an account?
          <router-link to="/login">Login here</router-link>
        </p>
      </b-form>
    </b-jumbotron>

    <!-- debugging -->
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">FORM DATA</pre>
    </b-card> -->
  </div>
</template>

<script>
import { Api } from '@/Api'

// TODO Input error handling
export default {
  name: 'register',
  data() {
    return {
      form: {
        userinfo: {
          userName: '',
          password: '',
          fullname: '',
          contactInfo: {
            email: '',
            phoneNumber: null,
            address: {
              city: '',
              streetName: '',
              streetNumber: null
            }
          }
        }
      },
      form2: {
        user: null
      },
      userType: [{ text: 'Select One', value: null }, 'Pet owner', 'Pet lover'],
      show: true
    }
  },
  mounted() {
    console.log('Page has loaded!') // debugging
  },
  methods: {
    onSubmit(event) {
      // TODO Add working method to POST PetLover and PetOwner
      event.preventDefault()
      // alert(JSON.stringify(this.form))
      // alert(this.form.email)
      // if (userType === 'Pet owner') {
      // }
      console.log(this.form2.user)
      if (this.form2.user === 'Pet owner') {
        Api.post('/v1/petowners', this.form)
          .then((response) => this.form)
          .catch((error) => {
            console.log(error)
            // TODO Display error message
          })
          .then(() => {
            console.log('This always runs')
          })
      } else if (this.form2.user === 'Pet lover') {
        Api.post('/v1/petlovers', this.form)
          .then((response) => this.form)
          .catch((error) => {
            console.log(error)
            // TODO Display error message
          })
          .then(() => {
            console.log('This always runs')
          })
      }
    }
  }
}
</script>

<style>
#main-div {
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  color: black;
  background-color: rgb(255, 255, 255);
  /* text-align: left; */
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  max-width: 750px;
  margin: auto;
}

#register_background {
  color: black;
  /* background-color: rgb(233, 232, 230); */
}

#register_form {
  margin-top: -25px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
  border-radius: 5px;
}

#register_info {
  margin-top: -25px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
  border-radius: 5px;
}

#register_title {
  margin-top: -25px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
  border-radius: 5px;
  text-align: center;
}

#user_type_select {
  margin-bottom: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: rgb(228, 228, 228);
  /* color: aliceblue; */
  border-radius: 5px;
}

#submit_btn {
  font-size: x-large;
  margin-top: 20px;
  margin-bottom: 25px;
}
</style>
