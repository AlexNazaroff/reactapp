import React from 'react'
import Todolist from "./todo/todolist";

function App() {

    const todos = []
    return (<div className='wrapper'>
        <h1>React tutorial</h1>
        <Todolist />
    </div>)

}

export default App;
