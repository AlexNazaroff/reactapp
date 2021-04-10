import React from 'react'
import Proptypes from 'prop-types'

const styles = {
    li:{
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


function Todoitem({todo, index}) {
    return (<li style={styles.li}>
        <span>
            <input type="checkbox" style={styles.input}/>
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
            <button className='rm'>&times;</button>


        </span>

    </li>)
}

Todoitem.propTypes = {
    todo: Proptypes.object.isRequired,
    index: Proptypes.number
}
export default Todoitem
