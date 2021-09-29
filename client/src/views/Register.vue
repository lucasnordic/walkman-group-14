<template>
  <div>
    <!-- <div class="header"></div> -->
    <!-- TODO: implement -->
    <div id="page_background">
      <div id="page_content">
        <b-jumbotron id="form_content">
          <!-- Title -->
          <template #header>
            <b-form id="form_title">
              <p class="animate__animated animate__pulse">Register</p>
            </b-form>
          </template>

          <!-- For displaying typed Username under "Register" title -->
          <div id="list-username">
            <transition-group name="list" tag="p">
              <!-- TODO fix this usertype bind to display to left of username -->
              <!-- <div v-bind:key="form2.user">{{ form2.user }}</div> -->
              <div
                v-for="item in form.userinfo.userName"
                v-bind:key="item"
                class="list-item"
              >
                {{ item }}
              </div>
            </transition-group>
          </div>

          <!-- form = Where a user inputs data -->
          <b-form id="form_inputs" @submit="onSubmit">
            <hr class="my-4" />

            <!-- Select User Type. PetOwner/PetLover -->
            <b-form-group id="usertype" label="I want to be a," label-for="i-9">
              <b-form-select
                id="i-9"
                v-model="form2.user"
                :options="userTypeSelected"
                required
                autofocus
              ></b-form-select>

              <!-- Text displayed under User type selection -->
              <div
                v-if="
                  !(form2.user === 'Pet owner') && !(form2.user === 'Pet lover')
                "
              >
                <b-form-text
                  id="usertype-help-block"
                  style="margin-left: -15px"
                >
                  <ul>
                    <li>
                      Select <strong>Pet owner</strong> if you are looking for a
                      caretaker for your pet
                    </li>
                    <li>
                      Select <strong>Pet lover</strong> if you would like to
                      take care of pets
                    </li>
                  </ul>
                </b-form-text>
              </div>
            </b-form-group>

            <!-- input field -->
            <b-form-group id="userName" label="Username" label-for="i-1">
              <b-form-input
                id="i-1"
                v-model="form.userinfo.userName"
                :state="userName_validation"
                required
              ></b-form-input>
              <b-form-invalid-feedback
                :state="userName_validation"
                style="color: gray"
              >
                Your username must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="userName_validation">
                Your username is mighty.
              </b-form-valid-feedback>
            </b-form-group>

            <!-- input field -->
            <b-form-group id="password" label="Password" label-for="i-2">
              <b-form-input
                id="i-2"
                v-model="form.userinfo.password"
                :state="password_validation"
                required
                type="password"
              ></b-form-input>
              <b-form-invalid-feedback
                :state="password_validation"
                style="color: gray"
              >
                Your password must be 6-20 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="password_validation">
                Your password is mighty.
              </b-form-valid-feedback>
            </b-form-group>

            <!-- input field -->
            <b-form-group id="fullname" label="Full name" label-for="i-3">
              <b-form-input
                id="i-3"
                v-model="form.userinfo.fullname"
                required
              ></b-form-input>

              <transition name="slide-fade">
                <div v-if="form.userinfo.fullname.length > 10">
                  <b-form-text
                    id="usertype-help-block"
                    style="margin-left: 0px"
                  >
                    All hail the mighty {{ form.userinfo.fullname }}.
                  </b-form-text>
                </div>
              </transition>
            </b-form-group>

            <!-- input fields for Contact Info -->
            <div class="accordion" role="tablist">
              <!-- TODO Add options for adding a pet or a service when registering -->
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
                    <!-- input field -->
                    <b-form-group id="email" label="Email" label-for="i-4">
                      <b-form-input
                        id="i-4"
                        v-model="form.userinfo.contactInfo.email"
                      ></b-form-input>
                    </b-form-group>

                    <!-- input field -->
                    <b-form-group
                      id="phoneNumber"
                      label="Phone number"
                      label-for="i-5"
                    >
                      <b-form-input
                        id="i-5"
                        v-model="form.userinfo.contactInfo.phoneNumber"
                      >
                      </b-form-input>
                    </b-form-group>

                    <!-- input field -->
                    <b-form-group id="city" label="City" label-for="i-6">
                      <b-form-input
                        id="i-6"
                        v-model="form.userinfo.contactInfo.address.city"
                      ></b-form-input>
                    </b-form-group>

                    <!-- input field -->
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

                    <!-- input field -->
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

            <!-- Submit form -->
            <b-button
              id="submit_btn"
              block
              type="submit"
              variant="success"
              style="text-align: center"
              @click="
                registeringDone.animateTestImage =
                  'animate__animated animate__bounceOutRight'
              "
              >Register Account</b-button
            >

            <hr class="my-4" />

            <!-- Bottom text and image -->
            <p style="text-align: center">
              Do you already have an account?
              <router-link to="/login">Login here</router-link>
            </p>

            <div id="test_image" :class="registeringDone.animateTestImage">
              <img
                src="../assets/images/sammy-delivery.png"
                alt="..."
                style="
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                  width: 100%;
                "
              />
            </div>
          </b-form>
        </b-jumbotron>
      </div>
    </div>
    <!-- TODO: implement -->
    <!-- <div class="footer"></div> -->
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
            phoneNumber: '',
            address: {
              city: '',
              streetName: '',
              streetNumber: ''
            }
          }
        }
      },
      form2: {
        user: null
      },
      userTypeSelected: [
        { text: 'Select One', value: null },
        'Pet owner',
        'Pet lover'
      ],
      image: '@/assets/images/sammy-delivery.png',
      registeringDone: {
        animateTestImage: ''
      },
      index: 0
    }
  },
  mounted() {
    // Happens when page is loaded
    console.log('Page has loaded!') // debugging
  },
  methods: {
    // Method that handles form submission
    onSubmit(event) {
      event.preventDefault()
      console.log(this.form2.user) // debugging
      if (this.form2.user === 'Pet owner') {
        this.postUser('petowners')
      } else if (this.form2.user === 'Pet lover') {
        this.postUser('petlovers')
      }
    },
    // Method that handles posting a user to a specific route
    postUser(route = 'route') {
      Api.post('/v1/' + route, this.form)
        .then((response) => this.form)
        .catch((error) => {
          console.log(error) // debugging
          // TODO throw error to user
        })
        .then(() => {
          console.log('This always runs')
        })
    }
  },
  computed: {
    // Validate inputs:
    userName_validation(event) {
      return (
        this.form.userinfo.userName.length > 4 &&
        this.form.userinfo.userName.length < 13
      )
    },
    password_validation(event) {
      return (
        this.form.userinfo.password.length > 5 &&
        this.form.userinfo.password.length < 21
      )
    }
  }
}
</script>

<style>
@import '../assets/styles/login-register_light.css';

/* Bottom image */
#test_image {
  margin-top: -25px;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  display: block;
}

/**
Animation Related below:
*/
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.animate__animated.animate__bounceOutRight {
  --animate-duration: 1.25s;
}

#list-username {
  margin-top: -32px;
  color: gray;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
