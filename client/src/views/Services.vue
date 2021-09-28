<template>
  <body>

      <div>
        <!-- Element to collapse -->
        <b-collapse id="collapse-2">
          <!-- Via multiple directive modifiers -->
          <b-button
            class="walking"
            v-b-toggle.collapse-a.collapse-b
            variant="success"
            margin="em"
            >Walking</b-button
          >
          <b-button
            class="Beauty"
            v-b-toggle.collapse-a.collapse-b
            variant="success"
            >Beauty</b-button
          >
          <b-button
            class="Veterinary"
            v-b-toggle.collapse-a.collapse-b
            variant="success"
            >Veterinary</b-button
          >
          <b-button
            class="Hostel"
            v-b-toggle.collapse-a.collapse-b
            variant="success"
            >Hostel</b-button
          >
        </b-collapse>
      </div>

    <section class="Services">
      <div class="container">
        <div class="left-side">
          <p class="sub-head">
            I am energetic, responsible, clean and love animals! I have a
            flexible schedule too and I am open for suggestions of a preferred
            park for the dog as well as distance needed 🙂 I can offer some
            energy burning training day for energetic dogs to play around in
            bigger spaces in addition to a calm, cuddling slow walk for calmer
            dogs or older ones, also longer time for the walk if needed.
          </p>
          <div class="Profile">
            <!-- <a href="views/Profile" class="primary-cta">Profile</a> -->
            <b-img
              type="image"
              left
              src="Person1.jpg"
              alt="A person with a dog"
            ></b-img>

            <b-button variant="success" @click="$router.push('profile')"
              >Profile</b-button
            >
            <b-button variant="success" @click="$router.push('profile')"
              >Contact</b-button
            >
          </div>
        </div>
        <div class="right-side">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68391.29304160277!2d11.853376600415995!3d57.61060663610402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fed6e967e63fd%3A0x7cdfe3785b255e0c!2sAskim%2C%20Gothenburg!5e0!3m2!1sen!2sse!4v1632870578904!5m2!1sen!2sse"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </body>

  <!-- <service-item v-bind:services="services" />
    </div>
  </div> -->
</template>

<script>
// import ServiceItem from '../components/ServiceItem.vue'
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
