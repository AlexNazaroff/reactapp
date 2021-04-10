import React, {useContext} from 'react'
import Proptypes from 'prop-types'
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.51rem 1rem',
        border: '2px solid #ccc',
        borderRadius: '4px',
        marginBottom: '2rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function Todoitem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (<li style={styles.li}>
        <span className={classes.join( ' ')}>
            <input type="checkbox" checked={todo.completed} style={styles.input} onChange={() => onChange(todo.id)}/>
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
            <button className='rm' onClick={removeTodo.bind(null,todo.id)}>&times;</button>


        </span>

    </li>)
}

Todoitem.propTypes = {
    todo: Proptypes.object.isRequired,
    index: Proptypes.number,
    onChange: Proptypes.func.isRequired
}
export default Todoitem
