// Aquino, Neo F. 
// Education.vue

<template>
  <div id="education">
    <div class="container">
      <div class="alert alert-warning" role="alert">
        <h2 class="alert-heading">{{ msg3 }}</h2>
        <hr>
        <p><b>Elementary:</b> 
          <br/><em>Salapungan Elementary School</em></p>
        <p><b>Junor High School:</b> 
          <br/><em>Holy Angel University</em></p>
        <p><b>Senior High School:</b> 
          <br/><em>Holy Angel University</em></p>
        <p><b>College:</b> 
          <br/><em>Holy Angel University</em></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'education',
    data () {
      return {
        msg3: 'EDUCATION'
      }
    }
  }
</script>
