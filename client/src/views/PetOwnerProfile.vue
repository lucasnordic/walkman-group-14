<template>
    <div>
        <p>{{petOwner}}</p>
    </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'petowner',
  mounted() {
    console.log('Im a happy petowner')
    Api.get('/v1/petowners/6151b8bdc29eb5c29769e0e1')
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
