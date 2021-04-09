import React from 'react'
import Todolist from "./todo/todolist";

function App() {

    const todos = [
        {id:1, completed: false, title: 'By chicken},
        {id:1, completed: false, title: 'By chicken},
        {id:1, completed: false, title: 'By chicken},


    ]
    return (<div className='wrapper'>
        <h1>React tutorial</h1>
        <Todolist />
    </div>)

}

export default App;
