<template>
  <div class="services">
    <div class="collapse_container" fluid="sm">
      <!-- Element to collapse -->
      <!-- Via multiple directive modifiers -->
      <b-button class="all-services" variant="success">All Services</b-button>
      <b-button class="walking" variant="success">Walking</b-button>
      <b-button class="beauty" variant="success">Beauty</b-button>
      <b-button class="veterinary" variant="success">Veterinary</b-button>
      <b-button class="hostel" variant="success">Hostel</b-button>
    </div>

    <b-container class="bv-example-row">
      <b-row class="pet_lover_container">
        <b-col class="left-side">
          <div class="Person1">
            <b-img-lazy
              v-bind="Person1"
              src="../assets/Person1.png"
              alt="A person with a dog"
            ></b-img-lazy>
            <!-- <b-img
              type="image/png"
              src="../assets/Person1.png"
              alt="A person with a dog"
              display:
              style="
                display: ;
                margin-left: auto;
                margin-right: auto;
                width: 5%;
              "
            ></b-img> -->
          </div>
        </b-col>
        <b-col class="middle">
          <p class="aboutMe">
            I am energetic, responsible, clean and love animals! I have a
            flexible schedule too and I am open for suggestions of a preferred
            park for the dog as well as distance needed 🙂 I can offer some
            energy burning training day for energetic dogs to play around in
            bigger spaces in addition to a calm, cuddling slow walk for calmer
            dogs or older ones, also longer time for the walk if needed.
          </p>
          <b-row class="button_group">
            <b-button
              class="profile"
              variant="primary"
              @click="$router.push('profile')"
              >Profile</b-button
            >

            <b-dropdown
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
            </b-dropdown>
          </b-row>
        </b-col>

        <b-col class="right-side">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68391.29304160277!2d11.853376600415995!3d57.61060663610402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fed6e967e63fd%3A0x7cdfe3785b255e0c!2sAskim%2C%20Gothenburg!5e0!3m2!1sen!2sse!4v1632870578904!5m2!1sen!2sse"
            width="300"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <!-- <service-item v-bind:services="services" />
    </div>
  </div> -->
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'services',
  // components: { ServiceItem: ServiceItem },
  mounted() {
    console.log('Page is loaded')
    Api.getServicesByPetLoverd('/v1/:petLoverId/services')
      .then((response) => {
        console.log(response)
        this.services = response.data.services
      })
      .catch((error) => {
        this.services = []
        console.log(error)
      })
      .then(() => {
        console.log('This runs every time after success or error.')
      })
  },
  data() {
    return {
      services: {},
      msgbox: ''
    }
  },
  methods: {
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
        .then((value) => {
          this.msgbox = value
        })
        .catch((err) => {
          this.msgbox = []
          console.log(err)
        })
    }
  }
}
</script>

<style>
.services {
  background-color: aliceblue;
  position: absolute;
  margin-bottom: 50px;
  height: 500%;
  width: 100%;
  border-style: groove;
  border-radius: 5px;
}

.collapse_container {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 1500px;
  margin: auto;
  border-style: groove;
  border-radius: 5px;
}

.pet_lover_container {
  width: 110%;
  margin-top: 700px;
  padding: 2%;
  background-color: white;
  border-style: groove;
  border-radius: 5px;
}

.dropdown-form-message {
  margin: 0%;
  width: 10;
  border-width: 5px;

}

.iframe {
  /* width: 100%;
  height: 300px;
  margin: auto;
  padding: auto; */
  z-index: 5;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 10px;
  border-width: 5px;
  margin: 1px;
  left: 1px;
  top: 1px;
  touch-action: pan-x pan-y;
}

.left-side {
  background-color: white;
  border-style: groove;
  border-radius: 5px;
  text-align: center;
  margin: 0px;
  padding: 1em;
}

.middle {
  background-color: white;
  border-style: groove;
  border-radius: 5px;
  text-align: center;
  margin: 0px;
  padding: 1em;
}

.right-side {
  background-color: white;
  border-style: groove;
  border-radius: 5px;
  text-align: center;
  margin: 0px;
  padding: 1em;
}

.aboutMe {
  font-family: Arial;
  font-style: italic;
  text-align: center;
  margin: 0em 0em 6em 0em;
  padding: 0% 0% 0% 0%;
  font-size: 80%;
  text-align: left;
}

.button_group {
  margin: 0% 0% 0% 0%;
  padding: 0%;
}
.all-services {
  margin-right: 0.5em;
}
.walking {
  margin-right: 0.5em;
}

.beauty {
  margin-right: 0.5em;
}
.veterinary {
  margin-right: 0.5em;
}
.hostel {
  margin-right: 0.5em;
}
.person1 {
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
  display: block;
}
.profile {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.contact {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.person1 {
  margin: 0.5em 0.5em 0.5em 0.5em;
}
.pet_lover_section {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
