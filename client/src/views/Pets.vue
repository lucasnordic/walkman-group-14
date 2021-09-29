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
            <b-button id="pet-btn" variant="primary">Edit</b-button></td>
        <td>
            <b-button id="pet-btn" variant="danger">Delete</b-button>
        </td>
    </tr>
  </tbody>
</table>

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
      pets: null
    }
  }
}
</script>
