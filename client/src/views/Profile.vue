<template>
  <div class="profiles-container">
    <b-container>
      <b-card-group deck>
        <b-card
          bg-variant="dark"
          text-variant="white"
          header="Public Profile"
          class="text-center"
          v-for="profile in publicProfiles"
          :key="profile.id"
        >
          <b-card-text>
            <p>Username: {{ profile.userinfo.userName }}</p>
            <p>Fullname: {{ profile.userinfo.fullname }}</p>
            <p>Password: {{ profile.userinfo.password }}</p>
          </b-card-text>
        </b-card>
      </b-card-group>

      <hr />

      <b-button variant="light" @click="getPrivateProfile">
        Request Private Profiles
      </b-button>

      <hr />

      <!-- b-spinner shows loading -->
      <b-spinner v-if="isLoading" type="grow" variant="info" label="Loading...">
      </b-spinner>

      <b-card-group deck>
        <b-card
          bg-variant="success"
          text-variant="white"
          header="Private Profile"
          class="text-center"
          v-for="profile in privateProfiles"
          :key="profile.id"
        >
          <b-card-text>
            {{ profile.profile }}
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
import { getPublicProfiles, getPrivateProfile } from '../utils/profiles-service'

export default {
  name: 'profiles',
  components: {},
  data() {
    return {
      publicProfiles: '',
      privateProfiles: ''
    }
  },
  methods: {
    isLoggedIn() {
      // TODO Implement
    },
    getPublicProfiles() {
      getPublicProfiles().then((profiles) => {
        console.log(profiles) // debugging
        this.publicProfiles = profiles
      })
    },
    getPrivateProfile() {
      getPrivateProfile()
        .then((profiles) => {
          console.log(profiles) // debugging
          this.privateProfiles = profiles
        })
        .catch((err) => {
          this.makeToast(err)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    makeToast() {
      // https://bootstrap-vue.org/docs/components/toast
      this.$bvToast.toast('You cannot view profile "insert Gandalf"', {
        title: 'No Access',
        variant: 'warning',
        solid: true
      })
    }
  },
  computed: {
    parseJSON() {
      // TODO Implement
      return JSON.parse(this.publicProfiles)
    }
  },
  mounted() {
    this.getPublicProfiles()
  }
}
</script>
<style scoped>
.profiles-container {
  padding: 1rem;
}
</style>
