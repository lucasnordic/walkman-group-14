<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <b-button v-b-modal.register-pet id="register-btn">
          Add a new Pet
      </b-button>
      </b-col>
    </b-row>
    <b-row v-for="pet in pets" :key="pet._id">
      <b-col md="12">
        <b-card class="pet-card" img-src="https://placekitten.com/300/300" img-alt="Card image" img-left>
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
              {{ pet.allergies.join(', ') }}
            <p>
          <p class="title" v-if="pet.foodPreferences">Food Preferences:
            <p class="attributes">
              {{ pet.foodPreferences.join(', ') }}
            <p>
          <p class="title" v-if="pet.petItems">Pet Items:
            <p class="attributes">
              {{ pet.petItems.join(', ') }}
          </p>
        </b-card-text>
        <b-button variant="danger" @click="deletePet(pet._id)">Delete</b-button>
        <b-button v-b-modal.edit-info variant="primary" class="edit-btn" @click="editHandler(pet)">Edit</b-button>
        </b-card>
      </b-col>
    </b-row>
    <b-modal id="register-pet" ref="registeration">
      <template #modal-title>Sign Up Your Pet!</template>
      <b-container fluid class="register-page">
        <b-row>
          <b-col md="3">
            <label>Name:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="editPet.name" placeholder="Enter pet's name"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Type:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="editPet.type" placeholder="Enter pet's type"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Gender:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="editPet.gender" placeholder="Enter pet's gender"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Allergies:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="editPet.allergies" placeholder="Add a new allergy"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Food Preferences:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="editPet.foodPreferences" placeholder="Add a food"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Pet Items:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="editPet.petItems" placeholder="Add an item"></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <template #modal-footer>
      <b-button size="lg" variant="outline-secondary" @click="closeReg()">
        Cancel
      </b-button>
      <b-button size="lg" variant="success" @click="petRegister()">
        Sign UP
      </b-button>
      </template>
    </b-modal>
    <b-modal v-bind="editPet" id="edit-info" ref="editModal">
      <template #modal-title>Edit {{editPet.name}}'s information</template>
      <b-container fluid class="edit-page">
        <b-row>
          <b-col md="3">
            <label>Name:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="editPet.name" placeholder="Enter new name here"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Type:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="editPet.type" placeholder="Enter new type here"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Gender:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="editPet.gender" placeholder="Enter pets gender here"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Allergies:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="allergy" @keyup.188="editAllergies"  placeholder="Add a new allergy"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Food Preferences:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="food" @keyup.188="editFoods" placeholder="Add a new food"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Pet Items:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="item" @keyup.188="editItem" placeholder="Add a new item"></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <template #modal-footer>
      <b-button size="lg" variant="success" @click="petEditor()">
        Save
      </b-button>
      <b-button size="lg" variant="outline-secondary" @click="closeEdit()">
        Cancel
      </b-button>
    </template>
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
      allergy: null,
      food: null,
      item: null,
      pets: {},
      editPet: {
        name: '',
        type: '',
        gender: '',
        allergies: [],
        foodPreferences: [],
        petItems: []
      }
    }
  },
  methods: {
    deletePet(id) {
      Api.delete('/petowners/' + this.$route.params.id + '/pets/' + id)
    },
    petRegister() {
      Api.post('/petowners/' + this.$route.params.id + '/pets', this.editPet)
        .then(res => this.pets)
      this.editPet = null
      this.closeReg()
    },
    editHandler(pet) {
      this.editPet = pet
    },
    petEditor() {
      Api.put('petowners/pets/' + this.editPet._id, this.editPet)
        .then(res => this.pets)
      this.editPeat = null
      this.closeEdit()
      // TODO find out why the pop-up window won't close!
      // TODO fix editing lists!
    },
    closeEdit() {
      this.$refs.editModal.hide()
    },
    closeReg() {
      this.$refs.registeration.hide()
    },
    reload() {},
    editAllergies() {
      this.editPet.allergies.push(this.allergy)
      this.allergy = null
    },
    editFoods() {
      this.editPet.foodPreferences.push(this.food)
      this.food = null
    },
    editItem() {
      this.editPet.petItems.push(this.item)
      this.item = null
    }
  }
}

</script>

<style>
@import '../assets/styles/petsPage.css';
</style>
