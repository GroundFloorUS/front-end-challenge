<template>
  <div id="app">
  
  <md-table md-card>
    
    <md-table-toolbar>
      <h1 class="md-title">Businesses</h1>
        <div class="autocomplete">
        <input type="text" />
        <ul class="autocomplete-results">
          <li class="autocomplete-result">

          </li>
        </ul>
      </div>
    </md-table-toolbar>
    <md-table-row>
      <md-table-head>ID</md-table-head>
      <md-table-head>Business Name</md-table-head>
      <md-table-head>City</md-table-head>
      <md-table-head>State</md-table-head>
    </md-table-row>
    <md-table-row v-for="business of businesses "
    :key="business.id">
      <md-table-head>{{ business.id }}</md-table-head>
      <md-table-head>{{ business.attributes.business_name }}</md-table-head>
      <md-table-head>{{ business.attributes.city }}</md-table-head>
      <md-table-head>{{ business.attributes.state }}</md-table-head>
    </md-table-row>
  </md-table>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      selectedBusiness: null,
      msg: 'Welcome to Your Vue.js App',
      businesses: []
    }
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      axios.get('http://localhost:8080/api')
      .then(response => {
          this.businesses = response.data.data
          console.log(response.data.data);
      })
    }
  }
}
</script>

<style lang="scss">
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4AAE9B;
  color: white;
}
</style>
