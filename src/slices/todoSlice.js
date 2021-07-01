import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [
            {
                id: 1,
                data: "go to shopping",
                color: "red",
                isCompleted: false
            },
            {
                id: 2,
                data: "do somethig one",
                color: "red",
                isCompleted: true
            },
            {
                id: 3,
                data: "do something two",
                color: "purple",
                isCompleted: true
            }
        ],
        filters: {
            activeOnly: false,
            colors: []
        }
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            state.filteredTodos = state.todos.slice();
        },

        removeTodo: (state, action) => {
            state.todos.map((todo, index) => {
                if (todo.id === action.payload) {
                    state.todos.splice(index, 1);
                }
            })
            state.filteredTodos = state.todos.slice();
        },

        updateTodoState: (state, action) => {
            const id = action.payload;
            console.log("id " + id)
            const ind = state.todos.findIndex((todo) => todo.id === id)
            console.log("index " + ind)
            state.todos[ind].isCompleted = !state.todos[ind].isCompleted
        },

        updateTodoColor: (state, action) => {
            console.log(action.payload);
            const id = action.payload.id;
            const ind = state.todos.findIndex((todo) => todo.id === id);
            state.todos[ind].color = action.payload.color;
        },

        filterActiveOnly: (state) => {
            state.filters.activeOnly = !state.filters.activeOnly;
        },

        changeFilterColors: (state, action) => {
            const newColor = action.payload.color;
            const ind = state.filters.colors.findIndex((colorOne) => colorOne === newColor);

            if (ind < 0) {
                state.filters.colors.push(newColor);
            } else {
                state.filters.colors.splice(ind, 1);
            }

        },

        selectAllTodos: (state, action) => {
            state.todos.map((todo, ind) => {
                state.todos[ind].isCompleted = true;
            })
        },

        deleteSelectedTodos: (state, action) => {
            state.todos.map((todo, ind) => {
                if (todo.isCompleted) {
                    state.todos.splice(ind, 1);
                }
            });
            state.todos.map((todo, ind) => {
                if (todo.isCompleted) {
                    state.todos.splice(ind, 1);
                }
            });
        }

    }
});

export const { addTodo, removeTodo, updateTodoState, updateTodoColor, filterActiveOnly, changeFilterColors, selectAllTodos, deleteSelectedTodos } = todoSlice.actions;

export default todoSlice.reducer;