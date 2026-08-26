import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello world"
        }
    ]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState, // basically telling redux store , start with this state

    reducers: { // this contains fns that tells redux how can my state change 

        addTodo: (state, action) => { // state -> current state  & action -> info about what was dispatched
            const todo = {
                id: nanoid(),
                text: action.payload
            };

            state.todos.push(todo);
        }, // this todo will be for how we send data in store

        removeTodo: (state, action) => { // same meaning of state and action
            const id = action.payload;

            state.todos = state.todos.filter(
                (todo) => todo.id !== id
            );
        }, // this todo fn we get data from store
        updateTodo : (state,action) => {
            const id = action.payload;
            state.todos = state.todos.map((todo) => todo.id === id ? {...todo , text : text} : todo)
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;