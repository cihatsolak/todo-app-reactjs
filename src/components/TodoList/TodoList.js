import React, { useEffect, useState } from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'
import TodoFooter from '../TodoFooter/TodoFooter'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const { todoList, todoFilter } = useSelector(state => state.todo);
    const [list, setList] = useState([])

    useEffect(() => {
        if (todoFilter === 'all') {
            setList(todoList);
            return;
        }
        setList(todoList.filter(todo => todo.complete));
    }, [todoList, todoFilter])

    return (
        <div className='item-content-wrapper'>
            <div className='content'>
                {
                    list.length < 1 && <div className='text-xs text-gray-700 font-bold text-center'>Henüz görev değil</div>
                }
                {
                    list && list.map((todo, index) => {
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