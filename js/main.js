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
        addNewToDo: function(...newElement) {
            const obj = { text: newElement[0], done: false, };
            this.todos.push(obj);
            this.newTodo = "";
        },

    },
});