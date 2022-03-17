// Aquino, Neo F. 
// books.js
// Figure 16. The JS code embedded in the books.js file.  

const books = Vue.createApp ({
  data() {
    return {
      showBooks: true, 
      btitle: 'The Cleaner',
      bauthor: 'Kenny Omega',
      year: 2008
    }
  },
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    }
  }
});

books.mount('#books')