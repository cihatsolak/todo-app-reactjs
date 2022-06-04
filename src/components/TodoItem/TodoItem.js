import React from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'

const TodoItem = ({ todo }) => {
  return (
    <div className='list-item hover:bg-gray-200'>
      <div>
        <input type='checkbox' className='mr-3' />
        <span>{todo.text}</span>
      </div>
      <div className='remove-list-item'>
        Sil
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem