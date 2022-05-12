<template>
  <div class="Gallery">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div id="gallery" class="carousel-item active">
          <img src="../assets/banaue.png" class="d-block w-100" alt="banaue rice terraces">
          <div class="carousel-caption d-none d-md-block">
            <h3>The Banaue Rice Terraces</h3>
             <hr/>
            <p>Situated in the province of Ifugao, the Banaue Rice Terraces were carved by ancestors of the Igorot people. Rice and vegetables are planted on these terraces with an ancient irrigation system running through it from the rainforests above the stunning terraces.</p>
          </div>
        </div>
        <div id="gallery" class="carousel-item">
          <img src="../assets/boracay.png" class="d-block w-100" alt="boracay">
          <div class="carousel-caption d-none d-md-block">
            <h3>Boracay Beach</h3>
             <hr/>
            <p>Widely known as White Beach, the Boracay islands houses the cherished beach in Aklan. Not only can you swim, but there are also other fun activities administered: from island hopping to snorkeling to simply lounging!</p>
          </div>
        </div>
        <div id="gallery"  class="carousel-item">
          <img src="../assets/chocohills.png" class="d-block w-100" alt="chocolate hills">
          <div class="carousel-caption d-none d-md-block">
            <h3>Chocolate Hills</h3>
             <hr/>
            <p>Situated in the province of Bohol, the Chocolate Hills is a geological formation that, depending on the season, bears semblance to that of chocolate; hence the name. In any other case, it's green. Regardless, the hills boast such rich greenery!</p>
          </div>
        </div>
        <div id="gallery"  class="carousel-item">
          <img src="../assets/palawan.png" class="d-block w-100" alt="el nido">
          <div class="carousel-caption d-none d-md-block">
            <h3>El Nido Islands</h3>
             <hr/>
            <p>The El Nido Islands is situated on the nature-like island of Palawan. Not only will there activities such as island-hopping, but there will also be resorts and accommodations that provide lounging and snorkeling to see coral reefs and such!</p>
          </div>
        </div>
        <div id="gallery"  class="carousel-item">
          <img src="../assets/fort.png" class="d-block w-100" alt="fort santiago">
          <div class="carousel-caption d-none d-md-block">
            <b><h3>Fort Santiago</h3></b>
             <hr/>
            <p>Built in the 1571 and lead by the Spanish navigator and governor Miguel Lopez de Legazpi, Fort Santiago is a citadel that houses such knowledge regarding Philippine history. It's located in Intramuros, wherein, Jose Rizal--the national hero of the Philippines--was imprisoned.</p>
          </div>
        </div>
        <div id="gallery"  class="carousel-item">
          <img src="../assets/siargao.png" class="d-block w-100" alt="siargao">
          <div class="carousel-caption d-none d-md-block">
            <h3>The Siargao Island</h3>
             <hr/>
            <p>The Siargao Island is an island situated southeast of Tacloban, wherein the island's shape bears semblance to that of a tear-drop. With the coastlines filled with reefs and white sand, you'll surely enjoy immersing yourself with nature while exploring the island!</p>
          </div>
        </div>
        <div id="gallery"  class="carousel-item">
          <img src="../assets/vigan.png" class="d-block w-100" alt="vigan city">
          <div class="carousel-caption d-none d-md-block">
            <h3>Vigan City</h3>
             <hr/>
            <p>Located west coast of the Luzon, Vigan city is known for the houses and buildings--architecture in general--that is akin to that of Spanish colonial and Asian times. Cobblestones streets, horse-drawn carriages, and rustic mansion; you'll surely explore the past!</p>
          </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <br/>
</div>
</template>

<script>
export default {
    data() {
      return {
        title5 : "Gallery"
        
        }
    }
}
</script>

<style scoped>
  * {
    text-align: center;
  }
  img {
    height: 600px;
    width: 400px;
  }
</style>