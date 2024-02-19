const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon',
            age: 45
        }
    },

    methods: {
        toogleShowBooks() {
            this.showBooks = !this.showBooks
        }
        
    }
})


app.mount('#app')