import React from 'react'
import Todolist from "./todo/todolist";

function App() {
    const q = React.useState
    let todos = [
        {id:1, completed: false, title: 'By chicken'},
        {id:2, completed: false, title: 'By gamburger'},
        {id:3, completed: false, title: 'By pepsicola'},


    ]

    function toggleTodo(id){
        todos = todos.map(todo =>{
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
    }

    return (<div className='wrapper'>
        <h1>React tutorial</h1>
        <Todolist  todos={todos} onToggle={toggleTodo}/>
    </div>)

}

export default App;
