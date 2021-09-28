<template>
  <div>
    <h1>Here come a list of our Services:</h1>
    <div v-for="services in services" v-bind:key="services._id">
      <!-- <p>
        The {{ services.color }} service is at position {{ services.position }}
      </p> -->
      <service-item v-bind:services="services" />
    </div>
  </div>
</template>

<script>
import ServiceItem from '../components/ServiceItem.vue'
import { Api } from '@/Api'

export default {
  name: 'services',
  components: { ServiceItem: ServiceItem },
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
