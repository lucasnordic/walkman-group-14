<template>
  <div v-if="petLover">
    <b-jumbotron id="header">
      <h1 class="display-4" id="greeting">
        Welcome {{ petLover.userinfo.username }}!
      </h1>
    </b-jumbotron>
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th scope="row">User Name</th>
          <td>{{ petLover.userinfo.username }}</td>
          <td>User Name is not changable!</td>
        </tr>
        <tr>
          <th scope="row">Password</th>
          <td>{{ petLover.userinfo.password }}</td>
          <td>
            <div class="d-flex">
              <input
                v-model="passUpdate"
                type="text"
                placeholder="Enter your edit value"
                class="form-control"
              />
              <button @click="editPass()" class="btn btn-warning rounded-10">
                <div class="text-center">
                  <span class="fa fa-pen"></span>
                </div>
                Edit
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Full Name</th>
          <td>{{ petLover.userinfo.fullName }}</td>
          <td>
            <div class="d-flex">
              <input
                v-model="fullNameUpdate"
                type="text"
                placeholder="Enter your edit value"
                class="form-control"
              />
              <button
                @click="editFullName()"
                class="btn btn-warning rounded-10"
              >
                <div class="text-center">
                  <span class="fa fa-pen"></span>
                </div>
                Edit
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>{{ petLover.userinfo.contactInfo.email }}</td>
          <td>
            <div class="d-flex">
              <input
                v-model="emailUpdate"
                type="text"
                placeholder="Enter your edit value"
                class="form-control"
              />
              <button @click="editEmail()" class="btn btn-warning rounded-10">
                <div class="text-center">
                  <span class="fa fa-pen"></span>
                </div>
                Edit
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Phone Number</th>
          <td>{{ petLover.userinfo.contactInfo.phoneNumber }}</td>
          <td>
            <div class="d-flex">
              <input
                v-model="phoneUpdate"
                type="text"
                placeholder="Enter your edit value"
                class="form-control"
              />
              <button @click="editPhone()" class="btn btn-warning rounded-10">
                <div class="text-center">
                  <span class="fa fa-pen"></span>
                </div>
                Edit
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">City</th>
          <td>{{ petLover.userinfo.contactInfo.address.city }}</td>
          <td>
            <div class="d-flex">
              <input
                v-model="cityUpdate"
                type="text"
                placeholder="Enter your edit value"
                class="form-control"
              />
              <button @click="editCity()" class="btn btn-warning rounded-10">
                <div class="text-center">
                  <span class="fa fa-pen"></span>
                </div>
                Edit
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Street Name</th>
          <td>{{ petLover.userinfo.contactInfo.address.streetName }}</td>
          <td>
            <div class="d-flex">
              <input
                v-model="sNameUpdate"
                type="text"
                placeholder="Enter your edit value"
                class="form-control"
              />
              <button @click="editSName()" class="btn btn-warning rounded-10">
                <div class="text-center">
                  <span class="fa fa-pen"></span>
                </div>
                Edit
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Street Number</th>
          <td>{{ petLover.userinfo.contactInfo.address.streetNum }}</td>
          <td>
            <div class="d-flex">
              <input
                v-model="sNumUpdate"
                type="text"
                placeholder="Enter your edit value"
                class="form-control"
              />
              <button @click="editSNum()" class="btn btn-warning rounded-10">
                <div class="text-center">
                  <span class="fa fa-pen"></span>
                </div>
                Edit
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div id="bottom-btns">
      <b-button @click="servicePage()" id="pet-btn" variant="primary"
        >Your Services</b-button
      >
      <b-button @click="delAcc()" variant="danger">Delete Account</b-button>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'petlover',
  mounted() {
    // Happens when page is loaded
    console.log('Yoyo!')
    Api.get('/petlovers/' + this.$route.params.id).then((res) => {
      console.log(res)
      this.petLover = res.data
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
      petLover: null
    }
  },
  methods: {
    editPass() {
      /* this.petLover.userinfo.password = this.passUpdate */
      Api.patch('/petlovers/' + this.$route.params.id, this.passUpdate).then(
        (res) => this.petLover
      )
      this.passUpdate = null
    },
    editFullName() {
      this.petLover.userinfo.fullName = this.fullNameUpdate
      Api.put('/petlovers/' + this.$route.params.id, this.petLover).then(
        (res) => this.petLover
      )
      this.fullNameUpdate = null
    },
    editEmail() {
      this.petLover.userinfo.contactInfo.email = this.emailUpdate
      Api.put('/petlovers/' + this.$route.params.id, this.petLover).then(
        (res) => this.petLover
      )
      this.emailUpdate = null
    },
    editPhone() {
      this.petLover.userinfo.contactInfo.phoneNumber = this.phoneUpdate
      Api.put('/petlovers/' + this.$route.params.id, this.petLover).then(
        (res) => this.petLover
      )
      this.phoneUpdate = null
    },
    editCity() {
      this.petLover.userinfo.contactInfo.address.city = this.cityUpdate
      Api.put('/petlovers/' + this.$route.params.id, this.petLover).then(
        (res) => this.petLover
      )
      this.cityUpdate = null
    },
    editSName() {
      this.petLover.userinfo.contactInfo.address.streetName = this.sNameUpdate
      Api.put('/petlovers/' + this.$route.params.id, this.petLover).then(
        (res) => this.petLover
      )
      this.sNameUpdate = null
    },
    editSNum() {
      this.petLover.userinfo.contactInfo.address.streetNum = this.sNumUpdate
      Api.put('/petlovers/' + this.$route.params.id, this.petLover).then(
        (res) => this.petLover
      )
      this.sNumUpdate = null
    },
    delAcc() {
      Api.delete('/petlovers/' + this.$route.params.id)
    },
    servicePage() {
      this.$router.push(
        '/profile/petLovers/' + this.$route.params.id + '/services'
      )
    }
  }
}
</script>

<style>
@import '../assets/styles/profiles.css';
</style>
