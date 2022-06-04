import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/actions/todo/TodoAction'
import './Input.css'

const Input = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
 
  const addTodoItem = (event) => {
    if (event.charCode !== 13) {
      return;
    }

    dispatch(addTodo({
      id: new Date().getTime(),
      text,
      completed: false
    }));
    
    setText('');
  }

  return (
    <div className='input-wrapper'>
      <input
        type='text'
        autoFocus
        placeholder='Create new todo'
        value={text}
        onChange={(event) => {
          setText(event?.target?.value);
        }}
        onKeyPress={(addTodoItem)}
      />
    </div>
  )
}

export default Input