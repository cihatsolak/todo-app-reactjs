import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    SET_TODO_FILTER
} from '../../actionTypes/todoActionTypes'

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const updateTodo = (id, complete) => {
    return {
        type: COMPLETE_TODO,
        payload: { id, complete }
    }
}

export const setTodoFilter = (filter) => {
    return {
        type: SET_TODO_FILTER,
        payload: filter
    }
}