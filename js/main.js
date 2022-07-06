var app = new Vue({
    el: '#app',



    data: {
        todos: [{
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ],
        newTodo: "",
    },

    methods: {

        removeToDo: function(...elementToRemove) {

            console.log(elementToRemove[0]);
            const newArray = this.todos.filter((todo, index) => {
                if (index != elementToRemove) {
                    return todo;
                }
            })
            this.todos = newArray;
        },
    }
});