<template>
  <div v-if="petOwner">
    <b-jumbotron id="header">
      <h1 class="display-4" id="greeting">Welcome {{petOwner.userinfo.username}}!</h1>
    </b-jumbotron>
    <table class="table table-bordered">
  <tbody>
    <tr>
      <th scope="row">User Name</th>
      <td>{{petOwner.userinfo.username}}</td>
      <td>User Name is not changable!</td>
    </tr>
    <tr>
      <th scope="row">Password</th>
      <td>{{petOwner.userinfo.password}}</td>
      <td>
        <div class="d-flex">
          <input v-model="passUpdate" type="text" placeholder="Enter your edit value" class="form-control">
          <button @click="editPass()" class="btn btn-warning rounded-10">
            <div class="text-center">
              <span class="fa fa-pen"></span>
            </div> Edit
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Full Name</th>
      <td>{{petOwner.userinfo.fullName}}</td>
      <td>
        <div class="d-flex">
          <input v-model="fullNameUpdate" type="text" placeholder="Enter your edit value" class="form-control">
          <button @click="editFullName()" class="btn btn-warning rounded-10">
            <div class="text-center">
              <span class="fa fa-pen"></span>
            </div> Edit
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td>{{petOwner.userinfo.contactInfo.email}}</td>
      <td>
        <div class="d-flex">
          <input v-model="emailUpdate" type="text" placeholder="Enter your edit value" class="form-control">
          <button @click="editEmail()" class="btn btn-warning rounded-10">
            <div class="text-center">
              <span class="fa fa-pen"></span>
            </div> Edit
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Phone Number</th>
      <td>{{petOwner.userinfo.contactInfo.phoneNumber}}</td>
      <td>
        <div class="d-flex">
          <input v-model="phoneUpdate" type="text" placeholder="Enter your edit value" class="form-control">
          <button @click="editPhone()" class="btn btn-warning rounded-10">
            <div class="text-center">
              <span class="fa fa-pen"></span>
            </div> Edit
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">City</th>
      <td>{{petOwner.userinfo.contactInfo.address.city}}</td>
      <td>
        <div class="d-flex">
          <input v-model="cityUpdate" type="text" placeholder="Enter your edit value" class="form-control">
          <button @click="editCity()" class="btn btn-warning rounded-10">
            <div class="text-center">
              <span class="fa fa-pen"></span>
            </div> Edit
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Street Name</th>
      <td>{{petOwner.userinfo.contactInfo.address.streetName}}</td>
      <td>
        <div class="d-flex">
          <input v-model="sNameUpdate" type="text" placeholder="Enter your edit value" class="form-control">
          <button @click="editSName()" class="btn btn-warning rounded-10">
            <div class="text-center">
              <span class="fa fa-pen"></span>
            </div> Edit
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Street Number</th>
      <td>{{petOwner.userinfo.contactInfo.address.streetNum}}</td>
      <td>
        <div class="d-flex">
          <input v-model="sNumUpdate" type="text" placeholder="Enter your edit value" class="form-control">
          <button @click="editSNum()" class="btn btn-warning rounded-10">
            <div class="text-center">
              <span class="fa fa-pen"></span>
            </div> Edit
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<div id="bottom-btns">
  <b-button @click="petPage()" id="pet-btn" variant="primary">Your Pets</b-button>
    <b-button @click="deleteAcc()" variant="danger">Delete Account</b-button>
</div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'petOwner',
  mounted() { // Happens when page is loaded
    console.log('Yoyo!')
    Api.get('/petowners/' + this.$route.params.id)
      .then(res => {
        console.log(res)
        this.petOwner = res.data
      })
  },
  data() {
    return {
      passUpdate: null,
      fullNameUpdate: null,
      emailUpdate: null,
      phoneUpdate: null,
      cityUpdate: null,
      sNameUpdate: null,
      sNumUpdate: null,
      petOwner: null
    }
  },
  methods: {
    editPass() {
      this.petOwner.userinfo.password = this.passUpdate
      Api.put('/petowners/' + this.$route.params.id, this.petOwner)
        .then(res => this.petLover)
      this.passUpdate = null
    },
    editFullName() {
      this.petOwner.userinfo.fullName = this.fullNameUpdate
      Api.put('/petowners/' + this.$route.params.id, this.petOwner)
        .then(res => this.petLover)
      this.fullNameUpdate = null
    },
    editEmail() {
      this.petOwner.userinfo.contactInfo.email = this.emailUpdate
      Api.put('/petowners/' + this.$route.params.id, this.petOwner)
        .then(res => this.petLover)
      this.emailUpdate = null
    },
    editPhone() {
      this.petOwner.userinfo.contactInfo.phoneNumber = this.phoneUpdate
      Api.put('/petowners/' + this.$route.params.id, this.petOwner)
        .then(res => this.petLover)
      this.phoneUpdate = null
    },
    editCity() {
      this.petOwner.userinfo.contactInfo.address.city = this.cityUpdate
      Api.put('/petowners/' + this.$route.params.id, this.petOwner)
        .then(res => this.petLover)
      this.cityUpdate = null
    },
    editSName() {
      this.petOwner.userinfo.contactInfo.address.streetName = this.sNameUpdate
      Api.put('/petowners/' + this.$route.params.id, this.petOwner)
        .then(res => this.petLover)
      this.sNameUpdate = null
    },
    editSNum() {
      this.petOwner.userinfo.contactInfo.address.streetNum = this.sNumUpdate
      Api.put('/petowners/' + this.$route.params.id, this.petOwner)
        .then(res => this.petLover)
      this.sNumUpdate = null
    },
    deleteAcc() {
      Api.delete('/petowners/' + this.$route.params.id)
    },
    petPage() {
      this.$router.push('/profile/petowners/' + this.$route.params.id + '/pets')
    }
  }
}
</script>

<style>
@import '../assets/styles/profiles.css';

</style>
