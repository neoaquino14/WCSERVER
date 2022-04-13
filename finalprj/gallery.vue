<!-- Author: Aquino, Neo
     File: gallery.vue
     Description: Add another component named "Gallery" and input the below code. -->

<template>
  <div id="gallery">
    <h1>GALLERY</h1>
    <div class="img-gallery">
      <img src="../assets/image1.png"><router-view/>
      <img src="../assets/image2.png"><router-view/>
      <img src="../assets/image3.png"><router-view/>
      <img src="../assets/image4.png"><router-view/>
      <img src="../assets/image5.png"><router-view/>
      <img src="../assets/image6.png"><router-view/>
      <img src="../assets/image7.png"><router-view/>
      <img src="../assets/image8.png"><router-view/>
      <img src="../assets/image9.png"><router-view/>
      <img src="../assets/image10.png"><router-view/>
      <img src="../assets/image11.png"><router-view/>
      <img src="../assets/image12.png"><router-view/>
      <img src="../assets/image13.png"><router-view/>
      <img src="../assets/image14.png"><router-view/>
      <img src="../assets/image15.png"><router-view/>
      <img src="../assets/image16.png"><router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavbarComponent',
    data: function() {
      return {
        Image1: require('../assets/image1.png'),
        Image2: require('../assets/image2.png'),
        Image3: require('../assets/image3.png'),
        Image4: require('../assets/image4.png'),
        Image5: require('../assets/image5.png'),
        Image6: require('../assets/image6.png'),
        Image7: require('../assets/image7.png'),
        Image8: require('../assets/image8.png'),
        Image9: require('../assets/image9.png'),
        Image10: require('../assets/image10.png'),
        Image11: require('../assets/image11.png'),
        Image12: require('../assets/image12.png'),
        Image13: require('../assets/image13.png'),
        Image14: require('../assets/image14.png'),
        Image15: require('../assets/image15.png'),
        Image16: require('../assets/image16.png')
      }
    }
  }
</script>

<style scoped>
  .img-gallery {
    width: 80%;
    margin: 20px auto 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 50px;
  }

  .img-gallery img {
    margin: 0px 10px;
    width: 100%;
    cursor: pointer;
    transition: 1s;
  }

  h1 {
    font-family: 'Poppins';
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
  }
</style>

