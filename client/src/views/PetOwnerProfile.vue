<template>
  <b-container v-if="petOwner" fluid>
    <b-row v-model="petOwner">
      <b-col md="12">
        <b-card class="greeting-user">
        <b-card-text>
          Hello {{petOwner.userinfo.username}}!
        </b-card-text>
        </b-card>
        <b-card class="user-info">
          <b-card-text>
            <p id="header">Profile information:
            <p class="key"> Username:
              <span class="value"> {{petOwner.userinfo.username}}</span>
            </p>
            <p class="key"> Password:
              <span class="value"> {{petOwner.userinfo.password}}</span>
            </p>
            <p class="key"> Full Name:
              <span class="value"> {{petOwner.userinfo.fullname}}</span>
            </p>
            <p class="key"> Email:
              <span class="value"> {{petOwner.userinfo.contactInfo.email}}</span>
            </p>
            <p class="key"> Phone Number:
              <span class="value"> {{petOwner.userinfo.contactInfo.phoneNumber}}</span>
            </p>
            <p class="key"> City:
              <span class="value"> {{petOwner.userinfo.contactInfo.address.city}}</span>
            </p>
            <p class="key"> Street Name:
              <span class="value"> {{petOwner.userinfo.contactInfo.address.streetName}}</span>
            </p>
            <p class="key"> Street Number:
              <span class="value"> {{petOwner.userinfo.contactInfo.address.streetNumber}}</span>
            </p>
            <p class="key"> Description:
              <p class="value"> {{petOwner.aboutMe}}
            </p>
            <b-button variant="danger" id="delete-button" @click="delAcc()">Delete Account</b-button>
            <b-button variant="primary" id="edit-button" v-b-modal.edit-user>Edit Information</b-button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row id="service-row">
      <b-col md="12">
        <b-button  variant="success" @click="petPage()" id="service-btn">Your Pets</b-button>
      </b-col>
    </b-row>
    <b-modal id="edit-user" title="Edit Information" ref="editModal">
      <b-container>
        <b-row>
          <b-col md="3">
            <label>Username:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petOwner.userinfo.username"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Password:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petOwner.userinfo.password"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>fullname:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petOwner.userinfo.fullname"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Email:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petOwner.userinfo.contactInfo.email"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Phone Number:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petOwner.userinfo.contactInfo.phoneNumber"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>City:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petOwner.userinfo.contactInfo.address.city"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Street Name:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petOwner.userinfo.contactInfo.address.streetName"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Street Number:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petOwner.userinfo.contactInfo.address.streetNumber"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Description:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petOwner.aboutMe"></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <template #modal-footer>
      <b-button size="lg" variant="success" @click="edit()">
        Save
      </b-button>
      <b-button size="lg" variant="outline-secondary" @click="close()">
        Cancel
      </b-button>
    </template>
    </b-modal>
  </b-container>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'petOwner',
  mounted() {
    Api.get('/petowners/' + this.$route.params.id).then((res) => {
      console.log(res)
      this.petOwner = res.data
    })
  },
  data() {
    return {
      petOwner: {
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
        _pets: null
      }
    }
  },
  methods: {
    edit() {
      Api.put('/petowners/' + this.$route.params.id, this.petOwner).then(
        (res) => this.petLover
      )
      this.close()
    },
    delAcc() {
      Api.delete('/petowners/' + this.$route.params.id)
    },
    petPage() {
      this.$router.push('/profile/petowners/' + this.$route.params.id + '/pets')
    },
    close() {
      this.$refs.editModal.hide()
      // reload()
    }
  }
}
</script>

<style>
@import '../assets/styles/profile.css';
</style>
