<template>
  <div class="search-bar">
    <input type="text"
           placeholder="Search"
           v-model="query"
           @input="search"
    />
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  data() {
    return {
      query: '',
      results: [],
    };
  },
  methods: {
    search() {
      fetch(`http://localhost:8081/search?query=${this.query}`)
        .then(response => response.json())
        .then(results => {
          this.results = results;
        })
        .catch(error => console.error(error));
    },
  },
};
</script>

<style lang="scss">
  .search-bar {
    input {
      height: 32px;
      padding: 8px 16px;
      border-radius: 32px;
      border: 1px solid #dadbdc;
      outline: none;
      font-size: 22px;
      width: 400px;
    }
  }
</style>
