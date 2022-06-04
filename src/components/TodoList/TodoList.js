import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'
import TodoFooter from '../TodoFooter/TodoFooter'

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
            <TodoFooter/>
        </div>
    )
}

TodoList.propTypes = {}

export default TodoList