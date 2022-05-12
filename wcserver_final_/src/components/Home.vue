<template>
    <body>
        <img src="../assets/trip now.png" alt="homepage" srcset="">
        <div id="features">
            <div class="wrapper">
                <ul>
                    <li class="feature-1">
                        <h4>Easy Scheduling</h4>
                        <p>Trip Now offers fast scheduling of travels, and let's you focus more vacation planning.</p>
                    </li>
                    <li class="feature-2">
                        <h4>Global Accessibility</h4>
                        <p>Trip Now can be used all around the globe to let you experience seamless transactions.</p>
                    </li>
                    <li class="feature-3">
                        <h4>24/7 Customer Service</h4>
                        <p>Worry Free and Convenient services with our 24/7 representatives ready to assist you at any time.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="message">

        </div>
    </body>
</template>

<script>
export default {
    data() {
      return {
        titleHome : "Home"
        
        }
    }
}
</script>
<style scoped>
img {
    margin-top: -45px;
    height: 100%;
    width: 100%;
  }

#features ul {
    margin: 80px 0;
}
#features ul li {
    width: 200px;
    padding-top: 140px;
    float: left;
    margin-left: 150px;
    text-align: center;
    
}
p {
    line-height: 20px;
    margin-top: 10px;
}
h4 {
    font-size: 24px;
    color: #444;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 70px;
}
#features ul li.feature-1 {
    background: url('../assets/features-icon-1.png') no-repeat top center;
    margin-top: -90px;
    
}
#features ul li.feature-2 {
    background: url('../assets/features-icon-2.png') no-repeat top center;
        margin-top: -90px;

}
#features ul li.feature-3 {
    background: url('../assets/features-icon-3.png') no-repeat top center;
        margin-top: -90px;

}
</style>