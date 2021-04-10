import React from 'react'
import Todolist from "./todo/todolist";
import Context from "./context";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'By chicken'},
        {id: 2, completed: false, title: 'By gamburger'},
        {id: 3, completed: false, title: 'By pepsicola'},

    ])


    function toggleTodo(id) {
        setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id ))
    }


    return (<Context.Provider value={{removeTodo:removeTodo}}>
        value = {}
        <div className='wrapper'>
            <h1>React tutorial</h1>
            <Todolist todos={todos} onToggle={toggleTodo}/>
        </div>
        )
    </Context.Provider>
}

export default App;
