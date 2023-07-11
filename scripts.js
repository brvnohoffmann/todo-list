
// var todos = [
//     {
//         text: 'lorem dwfew',
//         done: true
//     },
//     {
//         text: 'lorem dwfew 21',
//         done: false
//     }
// ]

const toList = {

    data() {
        return {
            todos: [],
            newTarefa: {
                done: false
            },
        }
    },
    methods: {
        addTarefa: function() {
            if(this.newTarefa.text) {
                this.todos.push(this.newTarefa)
                this.newTarefa = {
                done: false
                }
                localStorage.setItem('todos', JSON.stringify(this.todos))
            } else {
                alert('insira um texto')
            }
            
        },
        // removeAll: function(item){
        //     this.todos.splice(item, 1)
        // },

    },
    created() {
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos
    },
    updated(){
        localStorage.setItem('todos', JSON.stringify(this.todos))
        console.log('update')
    }

}


Vue.createApp(toList).mount('#app');


