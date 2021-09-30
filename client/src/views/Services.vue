<template>
  <div class="services">
    <div class="collapse_container">
      <!-- Element to collapse -->
        <!-- Via multiple directive modifiers -->
        <b-button class="all-services" variant="success"
          >All</b-button
        >
        <b-button class="walking" variant="success"
          >Walking</b-button
        >
        <b-button class="beauty" variant="success"
          >Beauty</b-button
        >
        <b-button class="veterinary" variant="success"
          >Veterinary</b-button
        >
        <b-button class="hostel" variant="success"
          >Hostel</b-button
        >
    </div>

    <b-container class="bv-example-row">
      <b-row class="pet_lover_container">
        <b-col class="left-side">
          <b-img
            type="image/jpg"
            src="assets\Person1.jpg"
            alt="A person with a dog"
          ></b-img>
          <p class="sub-head">
            I am energetic, responsible, clean and love animals! I have a
            flexible schedule too and I am open for suggestions of a preferred
            park for the dog as well as distance needed 🙂 I can offer some
            energy burning training day for energetic dogs to play around in
            bigger spaces in addition to a calm, cuddling slow walk for calmer
            dogs or older ones, also longer time for the walk if needed.
          </p>
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
            <b-dropdown-form>
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

              <b-form-group label="Name" label-for="dropdown-form-name">
                <b-form-input
                  id="dropdown-form-name"
                  type="name"
                  size="sm"
                  placeholder="Name"
                ></b-form-input>
              </b-form-group>
              <b-button variant="primary" size="sm" @click="onClick"
                >Send</b-button
              >
            </b-dropdown-form>
          </b-dropdown>
        </b-col>

        <b-col class="pet_lover_container">
          <div class="right-side">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68391.29304160277!2d11.853376600415995!3d57.61060663610402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fed6e967e63fd%3A0x7cdfe3785b255e0c!2sAskim%2C%20Gothenburg!5e0!3m2!1sen!2sse!4v1632870578904!5m2!1sen!2sse"
              width="350"
              height="100"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
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
      services: {}
    }
  }
}
</script>

<style>
.services {
  background-color: aliceblue;
  position: absolute;
  margin-bottom: 50px;
  height: 100%;
  width: 100%;
  border-style: groove;
  border-radius: 5px;
}

.collapse_container {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 1250px;
  margin: auto;
  border-style: groove;
  border-radius: 5px;
}

.pet_lover_container {
  margin-top: 50px;
  margin-bottom: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
  border-style: groove;
  border-radius: 5px;
}

.iframe {
  width: 100%;
  height: 300px;
  margin: auto;
  padding: auto;
}

.left-side {
  background-color: white;
  border-style: groove;
  border-radius: 5px;
  text-align: center;
}

.right-side {
  background-color: white;
  border-style: groove;
  border-radius: 5px;
}

.sub-head {
  font-family: Arial;
  font-style: italic;
  text-align: center;
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
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.pet_lover_section {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
