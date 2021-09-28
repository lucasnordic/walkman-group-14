<template>
    <div id="background">
        <div id="header">
            <h2 id="greeting">Welcome {{petOwner.userinfo.userName}}!</h2>
        </div>
        <div id="userInfo">
            <p>Username: {{petOwner.userinfo.userName}}</p>
            <p>Password: {{petOwner.userinfo.password}}</p>
            <p>Full Name: {{petOwner.userinfo.fullName}}</p>
            <p>Contact Information:</p>
            <p>Email: {{petOwner.userinfo.contactInfo.email}}</p>
            <p>Phone Number: {{petOwner.userinfo.contactInfo.phoneNumber}}</p>
            <p>Address: </p>
            <p>City: {{petOwner.userinfo.contactInfo.address.city}}</p>
            <p>Street Name: {{petOwner.userinfo.contactInfo.address.streetName}}</p>
            <p>Street Number: {{petOwner.userinfo.contactInfo.address.streetNum}}</p>
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
  }
}
</script>
