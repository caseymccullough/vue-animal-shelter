!<template>
  <div id="guest-filter">
    <h2>Filter</h2>
    <form v-on:submit.prevent="filter">
      <div class="form-group">
        <label for="search">Name:</label>
        <input
          type="text"
          placeholder="Search..."
          v-model="nameString"
          id="search"
        />
      </div>
      <div class="form-group" v-if="allTypes.length > 0">
        <label for="type-list">Type:</label>
        <select id="type-list" v-model="typeList" multiple>
          <option
            v-for="type of allTypes"
            v-bind:key="type"
          >
            {{ type }}
          </option>
        </select>
      </div>
      <div class="button-group">
        <button id="filter-btn" type="submit">Filter</button>
        <button v-on:click="clear">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
import guestService from "../services/GuestService";

export default {
  data() {
    return {
      allTypes: [],
      nameString: "",
      typeList: [],
    };
  },
  created() {
    this.getTypes();
  },
  methods: {
    getTypes() {

      this.allTypes = ['Dogs', 'Cats', 'Other'];
      // guestService
      //   .getTypes()
      //   .then((response) => {
      //     this.allTypes = response.data;
      //   })
      //   .catch((error) => {
      //     this.error = `Could not get the types list for the filter.`;
      //     console.log(this.error, error.response);
      //   });
    },

    filter() {
      this.$emit("filterValueChange", { // parent event can listen for this.
        titleString: this.titleString,
        genreList: this.genreList,
      });
    },
    clear() {
      this.nameString = "";
      this.typeList = [];
    },
  },
};
</script>

<style scoped>
#movie-filter {
  display: flex;
  flex-wrap: nowrap;
  align-items: top;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  width: fit-content;

  background-color: #c0b387;
  border: 1px solid #30362f;
}

form {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: top;
}

.form-group {
  display: flex;
  align-items: baseline;
}

label {
  margin-right: 0.5rem;
}

h2 {
  font-size: 1.2rem;
  font-weight: bold;
}

input {
  background-color: #f9f6f0;
  border: 1px solid #30362f;
  display: inline-block;
  height: fit-content;
  margin-bottom: 1rem;
  padding: 0.25rem 0.75rem;
}

button {
  background-color: #e9e7e3;
  border: 1px solid #30362f;
  border-radius: 0.25rem;
  display: inline-block;
  height: fit-content;
  padding: 0.25rem 0.75rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  width: 100px;
}

#filter-btn {
  background-color: #e69c60;
}

select {
  background-color: #f9f6f0;
  border: 1px solid #30362f;
  display: inline-block;
}

option {
  padding: 0.25rem 0.5rem;
}
</style>
