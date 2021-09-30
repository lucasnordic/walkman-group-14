<template>
  <div style="max-width: 500px; margin: auto; padding-top: 25px">
    <b-card bg-variant="dark" text-variant="white" title="Replaceme">
      <b-card-text> Replaceme </b-card-text>
      <b-button href="#" variant="primary">Mr Blue</b-button>
    </b-card>
  </div>
</template>
<script>
// Import axios HTML methods; get, post, etc..
import { getPublicProfiles, getPrivateProfile } from '../utils/AxiosRequests'

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
    getProfiles() {
      getPublicProfiles().then((profiles) => {
        console.log(profiles) // debugging
        this.publicProfiles = profiles
      })
    },
    getProfile() {
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
    // TODO Make a toast like this for displaying every possible success and error
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
    // for parsing the profiles to JSON, to display
    parseJSON() {
      // TODO Implement
      return JSON.parse(this.publicProfiles)
    }
  },
  mounted() {
    // When page is loaded
    this.getPublicProfiles()
  }
}
</script>
<style scoped>
.profiles-container {
  padding: 1rem;
}
</style>
