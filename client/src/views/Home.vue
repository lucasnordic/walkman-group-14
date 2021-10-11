<template>
  <div class="main">
    <b-container class="services-page" fluid="sm">
      <b-container class="carousel-img" fluid="sm">
        <b-row>
          <b-col>
            <b-carousel
              id="carousel-1"
              class="carousel"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide fluid="sm">
                <template #img>
                  <img
                    class="dog-walking-img"
                    caption="First slide"
                    width="1120"
                    height="560"
                    src="../assets/images/dog-walking.png"
                    alt=""
                  />
                </template>
                <h1 class="get-pet-lover">FIND A PET LOVER”</h1>
                <h1 class="dog-walking-text">
                  “It is not where you walk, it's who walks with you.”
                </h1>
              </b-carousel-slide>

              <b-carousel-slide>
                <template #img>
                  <img
                    class="veterinary-img"
                    caption="Second slide"
                    width="1120"
                    height="520"
                    src="../assets/images/Veterinarian.png"
                    alt=""
                  />
                </template>
                <h1 class="veterinary-text">
                  “The best doctor in the world is the veterinarian. They can't
                  ask their patiens what is the matter - they've got to just
                  know”
                </h1>
              </b-carousel-slide>

              <b-carousel-slide>
                <template #img>
                  <img
                    class="retriever-img"
                    caption="Third slide"
                    width="1120"
                    height="520"
                    src="../assets/images/Golden.png"
                    alt="image slot"
                  />
                </template>
                <h1 class="retriever-text">
                  “Dogs do speak, but only to those who know how to listen.”
                </h1>
              </b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template #img>
                  <img
                    class="terier-img"
                    caption="Forth slide"
                    width="1120"
                    height="520"
                    src="../assets/images/beauty_service.png"
                    alt=""
                  />
                </template>
                <h1 class="terier-text">
                  “Give your pet the stylish service it deserves”
                </h1>
              </b-carousel-slide>

              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide>
                <template #img>
                  <img
                    class="a-sad-dog-img"
                    caption="Fifth slide"
                    width="1120"
                    height="520"
                    src="../assets/images/Dog-looking-up.png"
                    alt=""
                  />
                </template>
                <h1 class="a-sad-dog-text">“Let me out, please!”</h1>
              </b-carousel-slide>
            </b-carousel>
          </b-col>
        </b-row>
      </b-container>

      <b-container>
        <b-row class="collapse_container" fluid="sm">
          <b-col>
            <!-- Element to collapse -->
            <!-- Via multiple directive modifiers -->
            <b-button
              class="all-services"
              variant="success"
              v-on:click="onFilterClicked('')"
              >All Services</b-button
            >
            <b-button
              class="walking"
              variant="success"
              v-on:click="onFilterClicked('Walking')"
              >Walking</b-button
            >
            <b-button
              class="beauty"
              variant="success"
              v-on:click="onFilterClicked('Beauty')"
              >Beauty</b-button
            >
            <b-button
              class="veterinary"
              variant="success"
              v-on:click="onFilterClicked('Veterinary')"
              >Veterinary</b-button
            >
            <b-button
              class="hostel"
              variant="success"
              v-on:click="onFilterClicked('Hostel')"
              >Hostel</b-button
            >
          </b-col>
        </b-row>
        <ActivityCardList
          :activityType="'Services'"
          :subservicetype="this.subservicetype"
        />
      </b-container>

      <b-container
        class="pet-lover-container"
        fluid="sm"
        id="entire-container"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      >
        <b-row class="pet_lover_row">
          <b-col class="leftside">
            <img
              class="profile-picture"
              src="../assets/images/profile-picture.png"
              alt=""
              width="120"
              height="120"
            />
            <div>
              <b-form-rating v-model="value"></b-form-rating>
              <p class="rating_mt-2" border-variant="transparent" align="right">
                Value: {{ value }}
              </p>
            </div>

            <b-button
              class="profile"
              variant="primary"
              @click="$router.push('profile')"
              >Profile</b-button
            >

            <!-- <b-dropdown
                id="dropdown-form"
                variant="primary"
                text="Send a message"
                ref="dropdown"
                class="m-2"
              >
                <b-dropdown-form class="dropdown-form-message">
                  <b-form-group
                    label="Name"
                    label-for="dropdown-form-name"
                    @submit.stop.prevent
                  >
                    <b-form-input
                      id="dropdown-form-name"
                      type="name"
                      size="sm"
                      placeholder="Name"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Phone Number"
                    label-for="dropdown-form-name"
                    @submit.stop.prevent
                  >
                    <b-form-input
                      id="dropdown-form-name"
                      type="name"
                      size="sm"
                      placeholder="Phone Number"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Email"
                    label-for="dropdown-form-email"
                    @submit.stop.prevent
                  >
                    <b-form-input
                      id="dropdown-form-email"
                      size="sm"
                      placeholder="email@example.com"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-textarea
                    id="textarea"
                    label="Message"
                    v-model="text"
                    placeholder="Type your message..."
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>

                  <div class="msg_confirmation">
                    <b-button @click="showMsgBox" variant="primary" size="sm"
                      >Send</b-button
                    >
                  </div>
                </b-dropdown-form>
              </b-dropdown> -->
          </b-col>

          <b-col class="middle" cols="8">
            <p class="Pet-Lover-Name">Clara Denver</p>
            <hr class="rounded" />
            <p class="aboutMe">
              I am energetic, responsible, clean and love animals! I have a
              flexible schedule too and I am open for suggestions of a preferred
              park for the dog as well as distance needed 🙂 I can offer some
              energy burning training day for energetic dogs to play around in
              bigger spaces in addition to a calm, cuddling slow walk for calmer
              dogs or older ones, also longer time for the walk if needed.
            </p>
            <ul class="contact-phone" align="left">
              Phone:
            </ul>
            <ul class="contact-email" align="left">
              E-mail:
            </ul>
            <ul class="contact-price" align="left">
              Price per hour:
            </ul>
            <ul class="contact-services" align="left">
              Services:
            </ul>
          </b-col>

          <b-col class="right-side">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68391.29304160277!2d11.853376600415995!3d57.61060663610402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fed6e967e63fd%3A0x7cdfe3785b255e0c!2sAskim%2C%20Gothenburg!5e0!3m2!1sen!2sse!4v1632870578904!5m2!1sen!2sse"
              width="200"
              height="200"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="entire-container"
        align="center"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
  </div>
  <!-- <service-item v-bind:services="services" />
    </div>
  </div> -->
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
  // components: { ServiceItem: ServiceItem },
  mounted() {
    console.log('Page is loaded')
    Api.getServicesByPetLoverd('/v1/:petLoverId/services')
      .then(response => {
        console.log(response)
        this.services = response.data.services
      })
      .catch(error => {
        this.services = []
        console.log(error)
      })
      .then(() => {
        console.log('This runs every time after success or error.')
      })
  },
  data() {
    return {
      servicesShown: 'Services',
      subServiceType: '',
      services: [],
      msgbox: '',
      value: null,
      slide: 0,
      sliding: null,
      perPage: 3,
      currentPage: 1,
      items: [{ id: 1 }, {}, {}, {}, {}]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    showMsgBox() {
      this.msgbox = ''
      this.$bvModal
        .msgBoxOk('Message submitted successfully', {
          title: 'Confirmation',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
        .then(value => {
          this.msgbox = value
        })
        .catch(err => {
          this.msgbox = []
          console.log(err)
        })
    },
    getServices() {
      Api.get(
        '/petLovers/:petLoverId/services' + this.$route.params.id + '/services',
        this.pet
      )
        .then(response => {
          this.services = response.data.services
        })
        .catch(error => {
          this.services = []
          console.log(error)
          console.log({ message: 'Services could not found!.' })
          //   TODO: display some error message instead of logging to console
        })
    },
    onFilterClicked(subServiceType) {
      this.servicesShown = subServiceType + ' Services'
      this.subServiceType = subServiceType
    }
  }
}
</script>

<style>
.services-page {
  background-color: aliceblue;
  width: 100%;
  min-width: 100%;
  height: auto;
  min-height: 100%;
  padding-left: 1em;
  margin-left: 1em;
}

.services {
  background-color: aliceblue;
  position: absolute;
  border-style: groove;
  height: 100%;
  min-height: 100%;
  will-change: auto;
  border-style: groove;
  border-radius: 5px;
  margin-left: 2em;
  margin-right: 2em;
  padding: 2em 2em;
}

.carousel {
  margin-top: 1em;
}

.collapse_container {
  padding-top: 20px;
  padding-bottom: 0px;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1500px;
  margin: auto;
  border-radius: 5px;
  margin: 0.5em 0.5em 0.5em 0.5em;
}

.pet-lover-container {
  border-style: groove;
  background: rgb(220, 246, 255);
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  border-radius: 10px;
}

.pet_lover_row {
  background: aliceblue;
  border-radius: 10px;
  border-style: groove;
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.leftside {
  border-radius: 10px;
  /* width: auto;
  height: auto;
  align-self:center; */
}

.profile-picture {
  border-radius: 10px;
  margin: 0.5em 0.5em;
}

.middle {
  border-radius: 10px;
  text-align: center;
  /* width: auto;
  height: auto;
  align-self:center; */
}

.right-side {
  border-radius: 10px;
  padding: 1.5em 1.5em 1.5em 1.5em;
  /* width: auto;
  height: auto;
  align-self:center; */
}

.b-dropdown-form {
  margin: 0%;
  width: 10;
  border-width: 5px;
  scale: 10;
}

.aboutMe {
  font-family: Arial;
  font-style: italic;
  text-align: left;
  font-size: 100%;
}

.contact-phone {
  margin: 0em;
  padding: 0em;
}
.contact-email {
  margin: 0em;
  padding: 0em;
}
.contact-price {
  margin: 0em;
  padding: 0em;
}
.contact-services {
  margin: 0em;
  padding: 0em;
}

.Pet-Lover-Name {
  font-size: 1.5em;
  align-self: center;
}

.dropdown {
  margin-bottom: 1em;
}

.all-services {
  margin: 0.5em 0.5em 0.5em 0.5em;
}

.walking {
  margin: 0.5em 0.5em 0.5em 0.5em;
}

.beauty {
  margin: 0.5em 0.5em 0.5em 0.5em;
}

.veterinary {
  margin: 0.5em 0.5em 0.5em 0.5em;
}

.hostel {
  margin: 0.5em 0.5em 0.5em 0.5em;
}

.profile {
  margin: 0.5em;
  align-self: center;
}

.get-pet-lover {
  text-align: left;
  color: black;
}

.dog-walking-text {
  font-size: 1.5em;
  text-align: left;
  color: black;
  text-shadow: 2px 2px 4px #ffffff;
  font-family: cursive;
  text-decoration: overline;
}

.veterinary-text {
  color: black;
  font-size: 20px;
  text-align: right;
  font-variant: small-caps;
  font-synthesis: weight;
  width: 330px;
  outline-style: ridge;
  float: right;
  margin-left: 0%;
  padding-right: 0%;
}

.a-sad-dog-text {
  font-size: 30px;
  text-align: left;
}

.terier-text {
  font-size: 30px;
  text-align: right;
  color: black;
  width: 350px;
  font-style: italic;
}

.retriever-text {
  text-align: left;
  color: black;
  width: 1100px;
  font-size: 30px;
  font-style: italic;
}
.overflow-auto {
  background: aliceblue;
  padding: 1em;
}
.b-rating {
  margin: 0em;
  padding: 0em;
}

@media screen and (max-width: 768px) {
  .dog-walking-img {
    max-width: 100%;
    height: auto;
  }
  .dog-walking-text {
    font-size: 1em;
    text-align: left;
    color: black;
    text-shadow: 2px 2px 4px #ffffff;
    font-family: cursive;
    text-decoration: overline;
  }

  .get-pet-lover {
    text-align: left;
    color: black;
    font-size: 100%;
  }
  .veterinary-img {
    max-width: 100%;
    height: auto;
  }
  .veterinary-text {
    color: black;
    font-size: 80%;
  }

  .terier-img {
    max-width: 100%;
    height: auto;
  }
  .terier-text {
    font-size: 100%;
    text-align: right;
    color: black;
    width: 350px;
    font-style: italic;
  }
  .retriever-img {
    max-width: 100%;
    height: auto;
  }
  .retriever-text {
    text-align: left;
    color: black;
    width: 1100px;
    font-size: 80%;
    font-style: italic;
  }
  .a-sad-dog-img {
    max-width: 100%;
    height: auto;
  }
  .a-sad-dog-text {
    font-size: 80%;
    text-align: left;
  }
  .pet_lover_row {
    background: aliceblue;
    border-radius: 10px;
    border-style: groove;
    max-width: 100%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 70%;
  }

  .profile-picture {
    border-radius: 10px;
    margin: 0.5em 0.5em;
    max-width: 100%;
    height: auto;
  }
}
</style>
