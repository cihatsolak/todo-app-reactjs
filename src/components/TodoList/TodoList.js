import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'
import TodoFooter from '../TodoFooter/TodoFooter'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const { todoList } = useSelector(state => state.todo);
  
    return (
        <div className='item-content-wrapper'>
            <div className='content'>
                {
                    todoList?.map((todo, index) => {
                        return <TodoItem key={index} todo={todo} />
                    })
                }
            </div>
            <TodoFooter />
        </div>
    )
}

TodoList.propTypes = {}

export default TodoList