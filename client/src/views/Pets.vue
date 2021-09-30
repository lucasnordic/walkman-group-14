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
            <b-button id="pet-btn" variant="primary" @click="openForm()">Edit Not Working</b-button></td>
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
    <div class="loginPopup">
      <div class="formPopup" id="popupForm">
        <form action="/action_page.php" class="formContainer">
          <h2>Please enter edit values</h2>
          <label for="name">
            <strong>Name</strong>
          </label>
          <input type="text" id="name" placeholder="Pet's Name" name="name" v-model="editedPet.name">
          <label for="type">
            <strong>Type</strong>
          </label>
          <input type="text" id="type" placeholder="Pet's Type" name="type" v-model="editedPet.type">
          <label for="gender">
            <strong>Gender</strong>
          </label>
          <input type="text" id="gender" placeholder="Pet's Gender" name="gender" v-model="editedPet.gender">
          <button type="submit" class="btn">Edit</button>
          <button type="button" class="btn cancel" @click="closeForm()">Cancel</button>
        </form>
      </div>
    </div>
</div>
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
      },
      editedPet: {
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
      * {
        box-sizing: border-box;
      }
      .openBtn {
        display: flex;
        justify-content: left;
      }
      .openButton {
        border: none;
        border-radius: 5px;
        background-color: #1c87c9;
        color: white;
        padding: 14px 20px;
        cursor: pointer;
        position: fixed;
      }
      .loginPopup {
        position: relative;
        text-align: center;
        width: 100%;
      }
      .formPopup {
        display: none;
        position: fixed;
        left: 45%;
        top: 5%;
        transform: translate(-50%, 5%);
        border: 3px solid #999999;
        z-index: 9;
      }
      .formContainer {
        max-width: 300px;
        padding: 20px;
        background-color: #fff;
      }
      .formContainer input[type=text],
      .formContainer input[type=password] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 20px 0;
        border: none;
        background: #eee;
      }
      .formContainer input[type=text]:focus,
      .formContainer input[type=password]:focus {
        background-color: #ddd;
        outline: none;
      }
      .formContainer .btn {
        padding: 12px 20px;
        border: none;
        background-color: #8ebf42;
        color: #fff;
        cursor: pointer;
        width: 100%;
        margin-bottom: 15px;
        opacity: 0.8;
      }
      .formContainer .cancel {
        background-color: #cc0000;
      }
      .formContainer .btn:hover,
      .openButton:hover {
        opacity: 1;
      }
    </style>
