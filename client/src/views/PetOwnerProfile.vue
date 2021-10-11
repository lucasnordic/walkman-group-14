<template>
  <b-container>
    <b-row>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'petOwner',
  mounted() {
    // Happens when page is loaded
    console.log('Yoyo!')
    Api.get('/petowners/' + this.$route.params.id).then((res) => {
      console.log(res)
      this.petOwner = res.data
    })
  },
  data() {
    return {
      petOwner: null
    }
  },
  methods: {
    editSNum() {
      this.petOwner.userinfo.contactInfo.address.streetNum = this.sNumUpdate
      Api.put('/petowners/' + this.$route.params.id, this.petOwner).then(
        (res) => this.petLover
      )
      this.sNumUpdate = null
    },
    deleteAcc() {
      Api.delete('/petowners/' + this.$route.params.id)
    },
    petPage() {
      this.$router.push('/profile/petowners/' + this.$route.params.id + '/pets')
    }
  }
}
</script>

<style>
@import '../assets/styles/petownerProfile.css';
</style>
