import React from 'react'
import Proptypes from 'prop-types'

const styles = {
    li:{

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
