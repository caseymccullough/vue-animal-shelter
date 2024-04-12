<template>
  <h2>Welcome to the Good Times</h2>
  <img v-bind:src = "getImageSrc" class="img-main">
  <p> </p>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  computed: {
    getImageSrc() {
      return new URL ('../assets/Aussie.png', import.meta.url).href;

      
    }
  }

}
</script>

<style>

</style>