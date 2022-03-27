// Aquino, Neo F. 
// App.vue

<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <profile></profile>
    <education></education>
    <skills></skills>
  </div>
</template>

<script>
import profile from './components/Profile'
import education from './components/Education'
import skills from './components/Skills'

export default {
  name: 'app',
  components: {
    profile,
    education,
    skills
  },
  data () {
    return {
      msg: 'RESUME'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: url("./assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  margin-top: -3px;
  margin-bottom: -15px;
}

h1, h2 {
  font-weight: normal;
}

h1 {
  margin-bottom: 15px;
}
</style>
