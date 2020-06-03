<template>
  <div id="app">
    <ReceiveBeerData/>
  </div>
</template>
<script>
import { ReceiveBeerData } from './components'

export default {
  name: 'App',
  components: {
    ReceiveBeerData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
