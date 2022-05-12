<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left">TRIP NOW</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link" pr-3 to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gallery">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/About">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/book">Book</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Scheduled Trips</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="form">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
