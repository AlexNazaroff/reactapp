import React from 'react'
import Todoitem from './Todoitem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}
export default function Todolist(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map(todo=>{
                return <Todoitem todo={todo} key={todo.id}/>
            })}
        </ul>
    )
}