<template>
  <b-container v-if="petLover" fluid>
    <b-row v-model="petLover">
      <b-col md="12">
        <b-card class="greeting-user">
        <b-card-text>
          Hello {{petLover.userinfo.username}}!
        </b-card-text>
        </b-card>
        <b-card class="user-info">
          <b-card-text>
            <p id="header">Profile information:
            <p class="key"> Username:
              <span class="value"> {{petLover.userinfo.username}}</span>
            </p>
            <p class="key"> Password:
              <span class="value"> {{petLover.userinfo.password}}</span>
            </p>
            <p class="key"> Full Name:
              <span class="value"> {{petLover.userinfo.fullname}}</span>
            </p>
            <p class="key"> Email:
              <span class="value"> {{petLover.userinfo.contactInfo.email}}</span>
            </p>
            <p class="key"> Phone Number:
              <span class="value"> {{petLover.userinfo.contactInfo.phoneNumber}}</span>
            </p>
            <p class="key"> City:
              <span class="value"> {{petLover.userinfo.contactInfo.address.city}}</span>
            </p>
            <p class="key"> Street Name:
              <span class="value"> {{petLover.userinfo.contactInfo.address.streetName}}</span>
            </p>
            <p class="key"> Street Number:
              <span class="value"> {{petLover.userinfo.contactInfo.address.streetNumber}}</span>
            </p>
            <p class="key"> Acceptable Pets:
              <span class="value"> {{petLover.acceptablePets.join(', ')}}</span>
            </p>
            <p class="key"> Description:
              <p class="value"> {{petLover.aboutMe}}
            </p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>>
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
      petLover: {
        userinfo: {
          username: null,
          password: null,
          fullname: null,
          contactInfo: {
            email: null,
            phoneNumber: null,
            address: {
              city: null,
              streetName: null,
              streetNumber: null
            }
          }
        },
        aboutMe: null,
        acceptablePets: null
      }
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
@import '../assets/styles/petloverProfile.css';
</style>
