<template>
  <div id="guests-view">
    <div id= "left-side">
    <h2>Our Current Guests</h2>
         
    <div id="guest-cards">
      <guest-card
        v-for="(guest, index) in guests"
        v-bind:key="index"
        v-bind:guest="guest"
        v-on:click="goToGuestDetails(guest.id)"
      />
      </div>
      <guest-filter v-on:filterValueChange="filterList"/>

    </div>
  </div>
</template>

<script>
import GuestFilter from "../components/GuestFilter.vue"
import GuestCard from "../components/GuestCard.vue";
import guestService from '../services/GuestService';

export default {
  components: {
    GuestCard,
    GuestFilter
  },
  data() {
    return {
      guests: []
    }
  },
  created() {
    this.guests = guestService.getGuests();
  },
  methods: {
      goToGuestDetails (id) {
          this.$router.push({name: "guest-details", params: {id: id}});
      }
  }
};
</script>




<style>
#guest-view {
  display: flex;
}
#guest-cards{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>