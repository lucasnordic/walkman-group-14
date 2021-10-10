<template>
  <b-container>
    <b-row v-for="pet in pets" :key="pet._id">
      <b-col md="12">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left>
        <b-card-text >
          <p class="title">Name:
          <p class="attributes">{{pet.name}}
            <p>
          <p class="title">Type:
          <p class="attributes">{{pet.type}}
            <p>
          <p class="title">Gender:
          <p class="attributes">{{pet.gender}}
            <p>
          <p class="title" v-if="pet.allergies">Allergies:
            <p class="attributes">
              <ul v-for="(allergy, index) in pet.allergies" :key="index">
              <li >{{allergy}},</li>
              </ul>
            <p>
          <p class="title" v-if="pet.foodPreferences">Food Preferences:
            <p class="attributes">
              <ul v-for="(food, index) in pet.foodPreferences" :key="index">
              <li >{{food}},</li>
              </ul>
            <p>
          <p class="title" v-if="pet.petItems">Pet Items:
            <p class="attributes">
              <ul v-for="(food, index) in pet.petItems" :key="index">
              <li >{{food}},</li>
              </ul>
          </p>
        </b-card-text>
        <b-button variant="danger" @click="deletePet(pet._id)">Delete</b-button>
        <b-button v-b-modal.edit-info variant="primary" class="edit-btn" @click="editHandler(pet)">Edit</b-button>
        </b-card>
      </b-col>
    </b-row>
    <b-modal v-bind="editPet" id="edit-info">
      <template #modal-title>Edit {{editPet.name}}'s information</template>
      <><>
    </b-modal>
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
      pets: {},
      editPet: {}
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
    editHandler(pet) {
      this.editPet = pet
    }
  }
}
</script>

<style>
@import '../assets/styles/petsPage.css';
</style>
