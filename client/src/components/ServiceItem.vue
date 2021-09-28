<template>
  <p>The {{ services.color }} service is at position {{ services.position }}</p>
</template>

<script>

export default {
  name: 'service-item',
  props: ['service']
}
</script>
