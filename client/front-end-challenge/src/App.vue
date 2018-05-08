<template>
  <div id="app">
  
  <md-table v-model="searched" md-card md-fixed-header>
    
    <md-table-toolbar>
      <div class="md-toolbar-section-start">
        <h1 class="md-title">Businesses</h1>
      </div>
      <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
      </md-field>
    </md-table-toolbar>
          <md-table-empty-state
        md-label="No businesses found"
        :md-description="`No business found for this '${search}'`">
        
      </md-table-empty-state>

    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
      <md-table-cell md-label="Name" md-sort-by="business_name">{{ item.attributes.business_name }}</md-table-cell>
      <md-table-cell md-label="City" md-sort-by="city">{{ item.attributes.city }}</md-table-cell>
      <md-table-cell md-label="State" md-sort-by="state">{{ item.attributes.state }}</md-table-cell>
    </md-table-row>
  </md-table>

  </div>
</template>

<script>
import axios from 'axios';

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.attributes.business_name).includes(toLower(term)))
    }

    return items
  }

export default {
  name: 'app',
  data () {
    return {
      search: null,
      searched: [],
      businesses: []
    }
  },
  created: function () {
    this.fetchData();
    this.searched = this.businesses
  },
  methods: {
    searchOnTable () {
      this.searched = searchByName(this.businesses, this.search)
    },

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
