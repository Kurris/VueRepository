<template>
  <div class="hello">
    <h2>这是用户</h2>
    <li>{{$route.params.UserId}}</li>
  </div>
</template>

<script>
export default {
name:'User',
data() {
  return {
    uid:this.$route.params.UserId
  }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
