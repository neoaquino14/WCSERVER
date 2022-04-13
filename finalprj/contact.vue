<!-- Author: Aquino, Neo
     File: contact.vue
     Description: Add another component named "Contact" and input the below code. -->

<template>
  <div class="contact">
    <h1>HOW TO SUPPORT US</h1>
    <div class="container">
      <div class="header">
        <p>KEEP IN TOUCH, LET US ASSIST YOU!</p>
        <hr>
      </div>
    </div>

    <div class="contact-section">      
      <div class="inner-container">
        <div class="au-box">
          <br>
          <p>Philippine Marine Life Center is a non-profit, non- government, conservation organization that aims for a better appreciation of Philippine marine biodiversity. Your donations will help us achieve this goal through our conservation work.</p>
          <hr>
          <h3>TO DONATE VIA A LOCAL BANK ACCOUNT</h3>
          
          <p>Maybank Account name: Philippine Marine Life Center</p>
          <p>Philippine Peso: 00-057-50-0442-9</p>
          <p>US Dollar: 1-202-55-5015-9</p>
          <hr><hr>

          <h3>TO DONATE VIA PAYPAL</h3>
          <p>Please know that giving monetary donations is not the only way to help. If you have the time and skills to share, you may volunteer. If you have none of what is mentioned, you may take part in our advocacy by spreading the word. Like us on Facebook, read, be informed, and share. Let us all work together for a marine wildlife-friendly lifestyle</p>
        </div>
      </div>
    </div> 

    <div class="contact-section2">      
      <div class="inner-container">
        <div class="au-box">
          <br>
          <p>Please call only if absolutely necessary, and only if your concern needs immediate answer.</p>

          <h3>TELEPHONE</h3>
          <p>(02) 7577-7178</p>
          <hr><hr>

          <h3>ADDRESS</h3>
          <p>Aurora Blvd. Katipunan Valley, Loyola Heights, Quezon City, Philippines 1108</p>
          <hr><hr>

          <h3>REACH US VIA EMAIL</h3>
          <p>Visiting options and tours: <a href=""> volunteer@pmlc.org  </a></p>
          <p>Media or filming requests: <a href=""> media@pmlc.org</a></p>
          <p>Gift store: <a href=""> sales@pmlc.org</a></p>
          <p>Corporate and foundation giving: <a href=""> institutionalgiving@pmlc.org </a></p>
          <p>School programs in Philippines: <a href=""> eduPh@pmlc.org</a></p>
          <p>General inquiries: <a href=""> info@pmlc.org</a></p>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
        title: 'Contact'
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

  .contact-section {
    background: url(../assets/bg3.png) no-repeat;
    background-size: cover;
    background-color: #b41a1a;
    overflow: hidden;
    padding: 80px 0;
  }

  .contact-section2 {
    background: url(../assets/bg2.png) no-repeat;
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

  .au-box h3 {
    color: rgb(232, 130, 22);
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .au-box p, .au-box a {
    color: #4b4b4b;
    text-align: center;
    margin-bottom: 10px;
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
