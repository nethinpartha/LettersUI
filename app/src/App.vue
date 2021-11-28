<template>
  <div>
    <div class='header'>
      <h2>Letters</h2>
    </div>
    <div class='content'>
      <List />
    </div>
    <div class='footer'>
        <h2>by Company</h2>
    </div>
  </div>
</template>

<script>

import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List,
  }
}
</script>

<style>
</style>
