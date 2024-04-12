<template>
  <div class="guest-card">
      <h2>{{ guest.name }}</h2>
      <img class="guest-image" v-bind:src="'src/assets/' + guest.name + '.jpg'"/>
      <p> {{ guest.gender }} {{ guest.type }}</p>
  </div>
</template>

<script>
export default {
    props: ['guest'],

}
</script>

<style>
.guest-card {
    background-color: darkgray;
    width: 300px;
    height: 400px;
    margin: 10px;
    border-radius: 10px;
    text-align: center;
    border: 1px solid black;
}

.guest-image{
    width: 200px;
}

</style>