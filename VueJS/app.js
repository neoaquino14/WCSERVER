// Aquino, Neo F. 
// app.js
// Figure 9. Adding the div tag with the "#app" name.

const app = Vue.createApp(
  {
    //Create functions, data 
    // template: "<h2>This is my template...</h2>"
    data() {
      return {
        title: 'The Phenomenal',
        author: 'Neo Aquino',
        age: 20
      }
    }
});

app.mount('#app')

//-----------------------------------------------------

// Aquino, Neo F. 
// app.js
// Figure 7. The JS File      

// const app = Vue.createApp(
//   {
//     //Create functions, data
//     template: "<h2>This is my template...</h2>"
// });

// app.mount('#app')