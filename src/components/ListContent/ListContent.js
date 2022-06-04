import React from 'react'
import PropTypes from 'prop-types'
import './ListContent.css'

const ListContent = (props) => {
    return (
        <div className='item-content-wrapper'>
            <div className='content'>
                Todo items
            </div>
            <div>Footer</div>
        </div>
    )
}

ListContent.propTypes = {}

export default ListContent