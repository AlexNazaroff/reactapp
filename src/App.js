import React from 'react'
import Todolist from "./todo/todolist";

function App() {

    const todos = [
        {id:1, completed: false, title: 'By chicken},
        {id:2, completed: false, title: 'By gamburger},
        {id:3, completed: false, title: 'By pepsicola},


    ]
    return (<div className='wrapper'>
        <h1>React tutorial</h1>
        <Todolist  todos={todos} />
    </div>)

}

export default App;
