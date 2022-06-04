import React from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../store/actions/todo/TodoAction'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className='list-item hover:bg-gray-200'>
      <div className={todo.complete ? 'completed' : ''}>
        <input
          type='checkbox'
          className='mr-3'
          checked={todo.completed}
          disabled={todo.completed}
          onChange={(event) => {
            dispatch(updateTodo(todo.id, event.target.checked))
          }} />
        <span>{todo.text}</span>
      </div>
      {
        todo.completed &&
        <div className='remove-list-item' onClick={() => {
          dispatch(deleteTodo(todo.id))
        }}>
          Sil
        </div>
      }
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem