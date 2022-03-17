// Aquino, Neo F. 
// twoway.js
// Figure 12. The code of the JS file, twoway.js

const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
} 

Vue.createApp(TwoWayBinding).mount('#two-way-binding')
