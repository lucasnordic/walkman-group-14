<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'testComponent',
  props: {
    message: {
      type: String,
      required: true,
      default: 'Default message from test component'
    }
  },
  data() {
    return {
      hello: 'hello'
    }
  }
}
</script>
