// Aquino, Neo F. 
// Skills.vue

<template>
  <div id="skills">
    <div class="container">
      <div class="alert alert-success" role="alert">
        <h2 class="alert-heading">{{ msg4 }}</h2>
        <hr>
        <p><b>Training:</b> 
          <br/><em>None</em></p>
        <p><b>Seminars:</b> 
          <br/><em>Web Responsiveness: Building a Responsive Layout using HTML and CSS</em>
          <br/><em>Building Blocks of the Web - Introduction to HTML and CSS</em>
          <br/><em>The Basics of Visual - A Guide to getting started iN UI</em></p>
        <p><b>Technologies:</b> 
          <br/><em>Collaborative Tech</em></p>
        <p><b>Programming Languages:</b> 
          <br/><em>HTML and CSS, Python, Java, JavaScript, PHP, and SQL</em></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skills',
    data () {
      return {
        msg4: 'SKILLS'
      }
    }
  }
</script>
