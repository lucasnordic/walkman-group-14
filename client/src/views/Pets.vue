<template>
  <container>
    <container class="pet_view" v-for="pet in pets" :key="pet._id">
      <b-card-group>
        <b-card title="pet.name">
          <b-card-text>
            <b-list-group>
              <b-list-group-item>Type: {{pet.type}}</b-list-group-item>
              <b-list-group-item>Gender: {{pet.gender}}</b-list-group-item>
              <b-list-group-item>
                Allergies:
                <ul v-for="(allergy, index) in pet.allergies" :key="index">
                  <li>{{allergy}}</li>
                </ul>
              </b-list-group-item>
              <b-list-group-item>
                Food Preferences:
                <ul v-for="(food, index) in pet.foodPreferences" :key="index">
                  <li>{{food}}</li>
                </ul>
              </b-list-group-item>
              <b-list-group-item>
                Items:
                <ul v-for="(item, index) in pet.petItems" :key="index">
                  <li>{{item}}</li>
                </ul>
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
      </b-card-group>
    </container>
    <container class="registration">
    </container>
  </container>
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
      pets: {},
      pet: {
        name: null,
        type: null,
        gender: null,
        allergies: null,
        foodPreferences: null,
        petItems: null
      }
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
    /* editPet(petId) {
      Api.put('/petowners/pets/' + petId, this.editedPet)
    }, */
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
