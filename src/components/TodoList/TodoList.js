import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = () => {
    return (
        <div className='item-content-wrapper'>
            <div className='content'>
                {
                    new Array(20).fill('Todo').map((item, index) => {
                        return <TodoItem key={index} text={item} />
                    })
                }
            </div>
            <div>Footer</div>
        </div>
    )
}

TodoList.propTypes = {}

export default TodoList