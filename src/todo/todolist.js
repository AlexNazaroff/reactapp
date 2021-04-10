import React from 'react'
import Todoitem from './Todoitem'
import  Proptypes from 'prop-types'


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}
function Todolist(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo,index )=>{
                return <Todoitem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    )
}
Todolist.propTypes={
    todos: Proptypes.arrayOf(Proptypes.object).isRequired
    onToggle: Proptypes.func.isRequired
}

export default Todolist