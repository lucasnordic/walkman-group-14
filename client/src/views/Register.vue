<template>
  <div>
    <!-- TODO: implement -->
    <!-- <div class="header"></div> -->
    <div id="page_background">
      <div id="page_content">
        <b-container fluid="xl">
          <b-row>
            <b-col style="border: 5px"> </b-col>

            <b-col cols="13">
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
                      v-for="item in form.userinfo.username"
                      v-bind:key="item"
                      class="list-item"
                    >
                      {{ item }}
                    </div>
                  </transition-group>
                </div>

                <!-- form = Where a user inputs data -->
                <b-form id="form_inputs" @submit.prevent="onSubmit">
                  <hr class="my-4" />

                  <!-- Select User Type. PetOwner/PetLover -->
                  <b-form-group
                    id="usertype"
                    label="Account role*"
                    label-for="i-9"
                  >
                    <b-form-select
                      id="i-9"
                      v-model="form2.user"
                      :options="userTypeSelected"
                      required
                      autofocus
                    ></b-form-select>

                    <!--title="Info"-->
                    <!-- Selected user type info box -->
                    <div
                      id="user_type_info_box"
                      v-if="form2.user === 'Pet Owner'"
                      class="animate__animated animate__zoomIn"
                    >
                      <div>
                        <h1>Info</h1>
                        <p>
                          Become a <em>Pet Owner</em> if you are looking for
                          someone that can take care of your pet!
                        </p>
                        <!-- TODO: Implement more info page -->
                        <!-- <a href="#" class="card-link">More Info</a> -->
                      </div>
                      <div
                        id="animated_image"
                        :class="registeringDone.animateTestImage"
                      >
                        <img
                          src="../assets/images/sammy-remote-work.png"
                          alt="..."
                          style="
                            display: block;
                            margin-left: auto;
                            margin-right: auto;
                            width: 100%;
                          "
                        />
                      </div>
                    </div>

                    <!-- Selected user type info box -->
                    <div
                      id="user_type_info_box"
                      v-if="form2.user === 'Pet Lover'"
                      class="animate__animated animate__zoomIn"
                    >
                      <div title="PetLover Info">
                        <h1>Info</h1>
                        <p>
                          Become a <em>Pet Lover</em> if you want to offer pet
                          care services to <em>Pet Owners</em>. Create an
                          account, start offering a service, and get ready to
                          make some cash! ..and meet some lovely pets of course
                          ;)
                        </p>
                        <!-- TODO: Implement more info page -->
                        <!-- <b-link href="#" class="card-link">More Info</b-link> -->
                      </div>
                      <div
                        id="animated_image"
                        :class="registeringDone.animateTestImage"
                      >
                        <img
                          src="../assets/images/sammy-message-sent.png"
                          alt="..."
                          style="
                            display: block;
                            margin-left: auto;
                            margin-right: auto;
                            width: 88.7%;
                          "
                        />
                      </div>
                    </div>
                  </b-form-group>

                  <!-- input field -->
                  <!-- TODO: Add :state to input, and implement input validation -->
                  <b-form-group id="username" label="Username*" label-for="i-1">
                    <b-form-input
                      id="i-1"
                      v-model="form.userinfo.username"
                      required
                    ></b-form-input>
                    <!-- <b-form-invalid-feedback
                :state="userName_validation"
                style="color: gray"
              >
                Your username must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="userName_validation">
                Your username is mighty.
              </b-form-valid-feedback> -->
                  </b-form-group>

                  <!-- input field -->
                  <b-form-group id="password" label="Password*" label-for="i-2">
                    <b-form-input
                      id="i-2"
                      v-model="form.userinfo.password"
                      required
                      type="password"
                    ></b-form-input>
                    <!-- <b-form-invalid-feedback
                :state="password_validation"
                style="color: gray"
              >
                Your password must be 6-20 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="password_validation">
                Your password is mighty.
              </b-form-valid-feedback> -->
                  </b-form-group>

                  <!-- input field -->
                  <b-form-group
                    id="fullname"
                    label="Full name*"
                    label-for="i-3"
                  >
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
                  <div style="margin-bottom: -17px"><p>Contact Info</p></div>
                  <div
                    class="accordion"
                    role="tablist"
                    style="margin-top: 25px"
                  >
                    <!-- TODO Add options for adding a pet or a service when registering -->
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button
                          block
                          v-b-toggle.accordion-1
                          variant="light"
                          size="sm"
                          >Click
                        </b-button></b-card-header
                      >
                      <b-collapse
                        id="accordion-1"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <!-- input field -->
                          <b-form-group
                            id="email"
                            type="email"
                            label="Email"
                            label-for="i-4"
                          >
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
                              v-model="
                                form.userinfo.contactInfo.address.streetName
                              "
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
                              v-model="
                                form.userinfo.contactInfo.address.streetNumber
                              "
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
                  <div
                    id="test_image"
                    :class="registeringDone.animateTestImage"
                  >
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
            </b-col>

            <b-col> </b-col>
          </b-row>
        </b-container>
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
  components: {},
  data() {
    return {
      // TODO Make something better
      form: {
        userinfo: {
          username: '',
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
        },
        aboutMe: '...'
      },
      form2: {
        user: null
      },
      userTypeSelected: [
        { text: 'Select One', value: null },
        'Pet Owner',
        'Pet Lover'
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
      console.log(this.form) // debugging
      if (this.form2.user === 'Pet Owner') {
        this.postUser('petowners')
      } else if (this.form2.user === 'Pet Lover') {
        this.form.availableHours = []
        this.postUser('petlovers')
      }
    },
    // Method that handles posting a user to a specific route
    postUser(route = 'route') {
      Api.post('/' + route, this.form)
        .then((response) => {
          this.$router.push('/login')
          return this.form
        })
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
    username_validation(event) {
      return (
        this.form.userinfo.username.length > 4 &&
        this.form.userinfo.username.length < 13
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

/* Overrides imported .css */
#page_background {
  height: 100%;
}

#page_content {
  height: 100%;
}
/* Overrides imported .css */

#user_type_info_box {
  margin-top: 12.5px;
  text-align: center;
}

#animated_image {
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  display: block;
  overflow: hidden;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}
/* Animate image above */
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}

/* Bottom image */
#test_image {
  margin-top: -25px;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  display: block;
  overflow: hidden;
}

/* Side image */
#side_image {
  margin-left: auto;
}

@media screen and (max-width: 1200px) {
  #side_image {
    display: none;
  }
}

/**
Only Animation Related below:
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
  margin-right: 2.5px;
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
