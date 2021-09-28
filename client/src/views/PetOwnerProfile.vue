<template>
    <div id="background">
        <div class="jumbotron" >
            <h1 class="display-4" id="greeting">Welcome {{petOwner.userinfo.userName}}!</h1>
            <p class="lead">Here you can see and edit all your information</p>
        </div>
        <div id="info_table">
          <table class="table table-hover table-dark">
            <tbody>
              <tr>
                <th scope="row">Username</th>
                <td>
                  {{petOwner.userinfo.userName}}
                  <button type="button" class="btn btn-light">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Password</th>
                <td>{{petOwner.userinfo.password}}
                  <button type="button" class="btn btn-light">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Full Name</th>
                <td>{{petOwner.userinfo.fullName}}
                  <button type="button" class="btn btn-light">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{{petOwner.userinfo.contactInfo.email}}
                  <button type="button" class="btn btn-light">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Phone Number</th>
                <td>{{petOwner.userinfo.contactInfo.phoneNumber}}
                  <button type="button" class="btn btn-light">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">City</th>
                <td>{{petOwner.userinfo.contactInfo.address.city}}
                  <button type="button" class="btn btn-light">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Street Name</th>
                <td>{{petOwner.userinfo.contactInfo.address.streetName}}
                  <button type="button" class="btn btn-light">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Street Number</th>
                <td>{{petOwner.userinfo.contactInfo.address.streetNum}}
                  <button type="button" class="btn btn-light">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="petsList"></div>
        <div id="delete-user">
          <button type="button" class="btn btn-danger">Delete Account</button>
        </div>
    </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'petowner',
  mounted() {
    console.log('Im a happy petowner')
    Api.get('/v1/petowners/' + this.$route.params.id)
      .then(res => {
        console.log(res)
        this.petOwner = res.data
      })
  },
  data() {
    return {
      petOwner: {}
    }
  },
  methods: {
    sth() {
      console.log('Im doing sthhh')
    }
  },
  actions: {
    sth() {

    }
  }
}
</script>

<style>
@import '../assets/styles/profiles.css';
</style>
