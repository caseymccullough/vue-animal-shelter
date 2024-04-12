<script setup>

</script>

<template>
    <nav>
      <router-link class = "link" v-bind:to="{name: 'home'}">Home</router-link>
      <router-link  class = "link" v-bind:to="{name: 'guests'}">Current Guests</router-link>
    </nav>
  <header>
    <h1>Good Times Pet Shelter</h1>

  </header>

  <main>
    
    <router-view />
  </main>
</template>

<style scoped>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

header {
  display: flex;
  justify-content: space-around;
  align-content: center;
}

nav {
  text-align: right;
  padding-right: 10%;
  padding-top: 10px;
  padding-bottom: 30px;
}

.link {
  margin: 0 15px;
  text-decoration: none;
  padding: 10px;
  background-color: lightblue;
  margin-top: 20px;
}

</style>
