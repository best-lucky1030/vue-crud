<template>
  <nav class="navbar" role="navigation" aria-label="main navigation"></nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['links'],
  methods: {

  }
}
</script>

<style scoped>
a.navbar-item {
  text-transform: capitalize;
}
</style>