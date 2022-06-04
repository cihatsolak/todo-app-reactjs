import React from 'react'
import './Input.css'

const Input = () => {
  return (
    <div className='input-wrapper'>
        <input type='text' autoFocus placeholder='Create new todo'/>
    </div>
  )
}

export default Input