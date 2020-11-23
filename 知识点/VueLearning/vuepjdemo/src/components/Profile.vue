<!--  -->
<template>
  <div>
    <li>{{ $route.query.name }}</li>
    <li>{{ $route.query.age }}</li>
    <li>{{ $route.query.gender }}</li>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style scoped>
</style>