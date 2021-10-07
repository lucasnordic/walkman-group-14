<template>
  <b-container>
    <b-row class="pet_cards" >
      <b-col class="card_column" v-for="pet in pets" :key="pet._id" cols="12" sm="6" md="4">
        <b-card img-src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg"
        img-alt="Image"
        img-top>
          <template #header>
            <h5>{{pet.name}}</h5>
          </template>
          <b-card-body class="card-body">
            <b-card-text v-if="pet.type">Type: {{pet.type}}</b-card-text>
            <b-card-text v-if="gender">Gender: {{pet.gender}}</b-card-text>
            <b-card-text v-if="pet.allergies">
              Allergies:
              <ul v-for="(allergy, index) in pet.allergies" :key="index">
                <li>{{allergy}}</li>
              </ul>
            </b-card-text>
            <b-card-text v-if="pet.foodPreferences">
              Food Preference:
              <ul v-for="(food, index) in pet.foodPreferences" :key="index">
                <li>{{food}}</li>
              </ul>
            </b-card-text>
            <b-card-text v-if="pet.petItems">
              Items:
              <ul v-for="(item, index) in pet.petItems" :key="index">
                <li>{{item}}</li>
              </ul>
            </b-card-text>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>>

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
