import React from 'react'
import './TodoFooter.css'
import { useDispatch, useSelector } from 'react-redux';
import { setTodoFilter } from '../../store/actions/todo/TodoAction'

const TodoFooter = () => {
  const { todoList, todoFilter } = useSelector(state => state.todo);
  const incompleteTodoCount = todoList.filter(todo => !todo.completed).length;
  const dispatch = useDispatch();

  return (
    <div className='content-footer'>
      {
        incompleteTodoCount > 0 ? <div className='left-item'>{incompleteTodoCount} Kaldı</div> : ''
      }
      <div className={`menu-item ${todoFilter === 'all' ? 'active' : ''}`} onClick={() => {
        dispatch(setTodoFilter('all'))
      }}>
        Tümü
      </div>
      <div className={`menu-item ${todoFilter === 'completed' ? 'active' : ''}`} onClick={() => {
        dispatch(setTodoFilter('completed'))
      }}>
        Tamamlandı
      </div>
    </div>
  )
}

export default TodoFooter