import React from 'react'
import  Proptypes from 'prop-types'
/*
import Todolist from "./todolist";
*/

function Todoitem({todo,index}) {
    return (<li>
        <strong>{index+1}</strong>
        {todo.title}
    </li>)
}

Todoitem.propTypes={
    todo: Proptypes.object.isRequired,
    index: Proptypes.number
}
export default Todoitem
