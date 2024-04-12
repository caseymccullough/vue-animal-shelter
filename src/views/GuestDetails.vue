<template>
  <div id="guest-details">
    <h1>{{ guest.name }}</h1>
    <img id= 'large-image' v-bind:src="'../src/assets/' + guest.name + '.jpg'"/>
    <h2> Gender: {{ guest.gender }} </h2>
    <h2> Background: </h2>
    <p class= 'details'> {{ guest.background }} </p>
  </div>
</template>

<script>
import guestService from '../services/GuestService';
export default {
  data() {
    return {
      guest: {},
    };
  },

  created() {
    const routeId = this.$route.params.id;
    console.log ("route id: " +  routeId);
    // const id = this.$store.state.guests.findIndex((guest) => { guest.id == this.$route.params.id });
    // console.log ("found id: ", id);
    this.guest = guestService.getById(routeId);
    console.log ("this guest: " + this.guest);
  },
};
</script>

<style>

#guest-details {
    text-align: center;
    padding: 0 10%;
}
#large-image {
    width: 50%;
    border-radius: 10px;
    border: darkgray 2px solid;
}

.details {
    text-align: left;
}


</style>