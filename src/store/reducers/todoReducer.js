import { todoState } from '../state/todoState'
import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    SET_TODO_FILTER
} from '../actionTypes/todoActionTypes'

function todoReducer(state = todoState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload)
            }
        case COMPLETE_TODO:
            const currentTodoItems = [...state.todoList];
            const findedIndex = currentTodoItems.findIndex(item => item.id === action.payload.id);
            currentTodoItems[findedIndex].completed = action.payload.completed;

            return {
                ...state,
                todoList: currentTodoItems
            }
        case SET_TODO_FILTER:
            return {
                ...state,
                todoFilter :action.payload
            }
        default:
            return state;
    }
} 

export default todoReducer