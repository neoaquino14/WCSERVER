// Aquino, Neo F. 
// Profile.vue

<template>
  <div id="profile">
    <div class="container">
      <div class="alert alert-success" role="alert">
        <h2 class="alert-heading">{{ msg2 }}</h2>
        <hr>
        <p><b>Objective: </b> <em>
          <br/>To be equip with ICT knowledge and skills necessary for active participation in the production and utilization of innovative systems and applications that adhere to ethical standards;</em></p>
        <p><b>Name:</b> 
          <br/><em>Neo Fernandez Aquino</em></p>
        <p><b>Course:</b> 
          <br/><em>Bachelor of Science in Information Technology</em></p>
        <p><b>Specialization:</b> 
          <br/><em>Web Development</em></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    data () {
      return {
        msg2: 'PROFILE'
      }
    }
  }
</script>
