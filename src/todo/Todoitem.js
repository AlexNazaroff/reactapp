import React from 'react'

export default function Todoitem({todo,index}) {
    return <li>
        <strong>{index}</strong>
        {todo.title}
    </li>
}