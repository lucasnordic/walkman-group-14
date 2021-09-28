<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4" id="greeting">Welcome {{petLover.userinfo.userName}}!</h1>
    </div>
    <table class="table table-bordered">
  <tbody>
    <tr>
      <th scope="row">User Name</th>
      <td>{{petLover.userinfo.userName}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Password</th>
      <td>{{petLover.userinfo.password}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Full Name</th>
      <td>{{petLover.userinfo.fullName}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td>{{petLover.userinfo.contactInfo.email}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Phone Number</th>
      <td>{{petLover.userinfo.contactInfo.phoneNumber}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">City</th>
      <td>{{petLover.userinfo.contactInfo.address.city}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Street Name</th>
      <td>{{petLover.userinfo.contactInfo.address.streetName}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Street Name</th>
      <td>{{petLover.userinfo.contactInfo.address.streetNum}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>
import { Api } from '@/Api'

export default {
  name: 'petlover',
  mounted() { // Happens when page is loaded
    console.log('Yoyo!')
    Api.get('/v1/petlovers/' + this.$route.params.id)
      .then(res => {
        console.log(res)
        this.petLover = res.data
      })
  },
  data() {
    return {
      petLover: {}
    }
  },
  methods: {
    userInfo() {
      return this.petLover.userinfo
    }
  }
}
</script>
