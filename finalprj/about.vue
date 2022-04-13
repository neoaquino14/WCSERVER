<!-- Author: Aquino, Neo
     File: about.vue
     Description: Add another component named "About" and input the below code. -->

<template>
  <div class="about">
    <h1>ABOUT US</h1>
    <div class="container">
      <div class="header">
        <p>THE PHILIPINE MARINE LIFE CENTER ADVANCES GLOBAL OCEAN CONSERVATION THROUGH RESCUE AND REHABILITATION, SCIENTIFIC RESEARCH, AND EDUCATION.</p>
        <hr>
      </div>
    </div>

    <div class="about-section">      
    <div class="inner-container">
      <div class="au-box">
        <h1>PHILIPPINE MARINE LIFE CENTER</h1>
        <br>

        <p>The Philippine Marine Life Center is the world's biggest marine wildlife hospital, rescuing more marine species than any other organization in the world and covers a 1000-mile rescue radius throughout the Philippines.

           The Center's state-of-the-art veterinary facilities, where we can care for up to 300 seals, sea lions, and other marine species at once, provide the greatest level of care to sick and injured animals.</p>
        <br>

        <p>The Philippine Marine Life Center's four decades of experience and competence in responding to distressed marine creatures is being used on a worldwide scale to assist meet a rising need for marine animal rescue and response. Our ultimate objective is to support a global response network that can assist any marine animal in need.

           Each year, the need for the Center's assistance and training of organizations and individuals throughout the world in efficient rescue and entanglement response grows. We're also committed to offering our voice and knowledge to the growing coalition of devoted individuals and organizations trying to tackle problems before they have an impact on marine species.</p>
        <br>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        title: 'About'
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-family: 'Poppins';
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
  }

  .about-section {
    background: url(../assets/bg.png) no-repeat;
    background-size: cover;
    background-color: #b41a1a;
    overflow: hidden;
    padding: 80px 0;
  }

  .inner-container {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width:100%;
  }

  .au-box {
    width: 60%;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
    background-color: #ffffff;
    padding: 30px;
    margin: -15px 30px;
    margin-left: 300px;
    cursor: pointer;
    border-radius: 5px;
  }

  .au-box h1 {
    color: rgb(232, 130, 22);
    text-align: center;
  }

  .au-box p {
    color: #4b4b4b;
    text-align: center;
  }

  .header {
    font-family: 'Poppins', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 1000;
    width: 115.1%;
    background-color: #6881c6;
    padding: 25px;
    margin-top: 15px;
    border-radius: none;
    text-align: center;
    color: white;
  }

  hr {
    border-top: 3px solid rgb(255, 255, 255);
  }
</style>
