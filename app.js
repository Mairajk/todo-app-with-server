let todoInput = document.querySelector(`#todoInput`);


// const axios = require('axios');/


const todoPost = (e) => {
    e.preventDefault()

    let todoInput = document.querySelector(`#todoInput`).value;

    axios.post('https://adventurous-fly-fatigues.cyclic.app/todo', {
        text: todoInput
    })
        .then(function (response) {
            let data = response.data.data;
            console.log("data : ", data);

            document.querySelector(`#todosDiv`).innerHTML = ""

            data.map(eachTodo => {
                console.log("eachTodo : ", eachTodo);
                document.querySelector(`#todosDiv`).innerHTML += `<div> ${eachTodo} </div>`
            })

        })
        .catch(function (error) {
            console.log(error);
        })
}


const getAllTodos = () => {


    axios.get('https://adventurous-fly-fatigues.cyclic.app/todos')
        .then(function (response) {
            let data = response.data.data;


            document.querySelector(`#todosDiv`).innerHTML = ""

            data.map(eachTodo => {
                document.querySelector(`#todosDiv`).innerHTML += `<div> ${eachTodo} </div>`
            })

        })
        .catch(function (error) {
            console.log(error);
        })

};


setInterval(getAllTodos, 3000);