import { todoState } from '../state/todoState'
import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    SET_TODO_FILTER
} from '../../actionTypes/todoActionTypes'

function todoReducer(state = todoState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case DELETE_TODO:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case COMPLETE_TODO:
            const currentTodoItems = [...state.items];
            const findedIndex = currentTodoItems.findIndex(item => item.id === action.payload.id);
            currentTodoItems[findedIndex].complete = action.payload.complete;

            return {
                ...state,
                items: currentTodoItems
            }
        case SET_TODO_FILTER:
            return {
                ...state,
                items: [
                    action.payload
                ]
            }
    }
} 