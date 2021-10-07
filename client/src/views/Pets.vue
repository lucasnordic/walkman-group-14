<template>
  <b-container>
    <b-row v-for="pet in pets" :key="pet._id">
      <b-col md="12">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left>
        <b-card-text >
          <p>Name:
          <p class="attributes">{{pet.name}}
          <p>Type:
          <p class="attributes">{{pet.type}}
          <p>Gender:
          <p class="attributes">{{pet.gender}}
          <p v-if="pet.allergies">Allergies:
          </p>
        </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { Api } from '@/Api'

export default {
  name: 'pets',
  mounted() {
    Api.get('/petowners/' + this.$route.params.id + '/pets')
      .then(res => {
        console.log(res)
        this.pets = res.data
      })
  },
  data() {
    return {
      pets: {}
    }
  },
  methods: {
    deletePet(id) {
      Api.delete('/petowners/' + this.$route.params.id + '/pets/' + id)
    },
    addPet() {
      Api.post('/petowners/' + this.$route.params.id + '/pets', this.pet)
        .then(res => this.pets)
    },
    openForm() {
      document.getElementById('popupForm').style.display = 'block'
    },
    closeForm() {
      document.getElementById('popupForm').style.display = 'none'
    }
  }
}
</script>

<style>
@import '../assets/styles/petsPage.css';
</style>
