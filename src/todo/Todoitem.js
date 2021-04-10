import React from 'react'
import Proptypes from 'prop-types'

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '5rem'
    }
}


function Todoitem({todo, index}) {
    return (<li style={styles.li}>
        <span>
            <input type="checkbox"/>
            <strong>{index + 1}</strong>
            {todo.title}
            <button>&times;</button>


        </span>

    </li>)
}

Todoitem.propTypes = {
    todo: Proptypes.object.isRequired,
    index: Proptypes.number
}
export default Todoitem
