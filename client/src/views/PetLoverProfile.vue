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
            <b-button variant="danger" id="delete-button" @click="delAcc()">Delete Account</b-button>
            <b-button variant="primary" id="edit-button" v-b-modal.edit-user>Edit Information</b-button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button></b-button>
      </b-col>
    </b-row>
    <b-modal id="edit-user" title="Edit Information" ref="editModal">
      <b-container>
        <b-row>
          <b-col md="3">
            <label>Username:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.userinfo.username"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Password:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.userinfo.password"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>fullname:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.userinfo.fullname"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Email:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.userinfo.contactInfo.email"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Phone Number:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.userinfo.contactInfo.phoneNumber"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>City:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.userinfo.contactInfo.address.city"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Street Name:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.userinfo.contactInfo.address.streetName"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Street Number:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.userinfo.contactInfo.address.streetNumber"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Description:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.aboutMe"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label>Acceptable Pets:</label>
          </b-col>
          <b-col md="9">
            <b-form-input v-model="petLover.acceptablePets"></b-form-input>
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
    edit() {
      Api.put('/petlovers/' + this.$route.params.id, this.petLover).then(
        (res) => this.petLover
      )
      this.close()
    },
    delAcc() {
      Api.delete('/petlovers/' + this.$route.params.id)
    },
    servicePage() {
      this.$router.push(
        '/profile/petLovers/' + this.$route.params.id + '/services'
      )
    },
    reload() {
      return this.$route.push('/profile/petLovers/' + this.$route.params.id)
    },
    close() {
      this.$refs.editModal.hide()
    }
  }
}
</script>

<style>
@import '../assets/styles/petloverProfile.css';
</style>
