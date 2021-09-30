<template>
    <div>
        <b-jumbotron>
            <h1 class="display-4" id="greeting">Your Precious Pets!</h1>
        </b-jumbotron>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Gender</th>
      <th scope="col">Allergies</th>
      <th scope="col">Food</th>
      <th scope="col">Items</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="pet in pets" :key="pet._id">
        <td>{{pet.name}}</td>
        <td>{{pet.type}}</td>
        <td>{{pet.gender}}</td>
        <td>{{pet.allergies}}</td>
        <td>{{pet.foodPreferences}}</td>
        <td>{{pet.petItems}}</td>
        <td>
            <b-button id="pet-btn" variant="primary">Edit(ej work)</b-button></td>
        <td>
            <b-button @click="deletePet(pet._id)" id="pet-btn" variant="danger">Delete</b-button>
        </td>
    </tr>
  </tbody>
</table>
<div id="newPet">
  <b-jumbotron>
    <h2>Sign Up Your Pet:</h2>
    <form>
    <label>Name:</label>
    <input v-model="pet.name" type="text" class="form-control">

    <label>Type:</label>
    <input v-model="pet.type" type="text" class="form-control">

    <label>Gender:</label>
    <input v-model="pet.gender" type="text" class="form-control">

    <b-button id="registeration" variant="success" @click="addPet()" >Submit</b-button>
  </form>
  </b-jumbotron>
</div>

    </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'pets',
  mounted() {
    Api.get('/v1/petowners/' + this.$route.params.id + '/pets')
      .then(res => {
        console.log(res)
        this.pets = res.data
      })
  },
  data() {
    return {
      petName: null,
      petType: null,
      petGender: null,
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
      Api.delete('/v1/petowners/' + this.$route.params.id + '/pets/' + id)
    },
    addPet() {
      Api.post('/v1/petowners/' + this.$route.params.id + '/pets', this.pet)
        .then(res => this.pets)
      this.pet.name = null
      this.pet.type = null
      this.pet.gender = null
    }
  }
}
</script>
