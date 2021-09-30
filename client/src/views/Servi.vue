<template>
  <div class="allServices">
    <div class="collapse_container">
      <!-- Element to collapse -->
      <b-card>
        <b-collapse id="collapse" class="mt-2">
          <!-- Via multiple directive modifiers -->
          <b-button
            class="walking"
            v-b-toggle.collapse-inner
            size="sm"
            variant="success"
            >Walking</b-button
          >
          <b-button
            class="beauty"
            v-b-toggle.collapse-inner
            size="sm"
            variant="success"
            >Beauty</b-button
          >
          <b-button
            class="veterinary"
            v-b-toggle.collapse-inner
            size="sm"
            variant="success"
            >Veterinary</b-button
          >
          <b-button
            class="hostel"
            v-b-toggle.collapse-inner
            size="sm"
            variant="success"
            >Hostel</b-button
          >
        </b-collapse>
      </b-card>
    </div>

    <b-card class="pet_lover_container">
      <div class="left-side-container">
        <p class="aboutMe">
          I am energetic, responsible, clean and love animals! I have a flexible
          schedule too and I am open for suggestions of a preferred park for the
          dog as well as distance needed 🙂 I can offer some energy burning
          training day for energetic dogs to play around in bigger spaces in
          addition to a calm, cuddling slow walk for calmer dogs or older ones,
          also longer time for the walk if needed.
        </p>
        <b-img
          type="image/jpg"
          src="assets\Person1.jpg"
          alt="A person with a dog"
        ></b-img>
        <b-button
          class="profile"
          variant="primary"
          @click="$router.push('profile')"
          >Profile</b-button
        >
        <b-button
          class="Contact"
          variant="success"
          @click="$router.push('profile')"
          >Contact</b-button
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
            ></b-dropdown-form
          >
        </b-dropdown>
      </div>

      <div class="right-side-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68391.29304160277!2d11.853376600415995!3d57.61060663610402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fed6e967e63fd%3A0x7cdfe3785b255e0c!2sAskim%2C%20Gothenburg!5e0!3m2!1sen!2sse!4v1632870578904!5m2!1sen!2sse"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </b-card>
  </div>
</template>

<script>
import { Api } from '@/Api'
// import About from './About.vue'

export default {
  // components: { About },
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
.collapse_container {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.left-side-container {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: left;
}
.walking {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.beauty {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.veterinary {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.hostel {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
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
.pet_lover_container {
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
.sub-head {
  font-family: Arial;
  font-style: italic;
  text-align: right;
}
</style>
