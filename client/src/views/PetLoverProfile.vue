<template>
<div id="profile-background">
  <div id="header?">
    <h1>Hi {{petLover.userinfo.userName}}!</h1>
  </div>
  <div id="userInfo">
    <p>Username: {{petLover.userinfo.userName}}</p>
    <p>Password: {{petLover.userinfo.password}}</p>
    <p>Contact Information:</p>
    <p>Email: {{petLover.userinfo.contactInfo.email}}</p>
    <p>Phone Number: {{petLover.userinfo.contactInfo.phoneNumber}}</p>
    <p>Address: </p>
    <p>City: {{petLover.userinfo.contactInfo.address.city}}</p>
    <p>Street Name: {{petLover.userinfo.contactInfo.address.streetName}}</p>
    <p>Street Number: {{petLover.userinfo.contactInfo.address.streetNum}}</p>

  </div>
  <div id="hours"></div>
  <div id="acceptable pets"></div>
  <div id="delete-user">
    <button type="button" class="btn btn-danger">Delete Account</button>
  </div>
</div>
</template>

// JAVASCRIPT
<script>
import { Api } from '@/Api'

export default {
  name: 'petlover',
  mounted() { // Happens when page is loaded
    console.log('Hi!')
    Api.get('/v1/petlovers/6151c0feafbbdcd69f37e85b')
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
