const { createSlice, nanoid } = require("@reduxjs/toolkit")

let initialState = {
    todoList: JSON.parse(localStorage.getItem("todos")) || [],
}


let Slice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTodoList: (state, action) => {
            // console.log(action);
            let data = {
                id: nanoid(),
                title: action.payload,
            }
            state.todoList.push(data);
            localStorage.setItem("todos", JSON.stringify(state.todoList));
        },
        removeTodo: (state, action) => {
            let data = state.todoList.filter((item) => item.id !== action.payload);
            state.todoList = data;
            localStorage.setItem("todos", JSON.stringify(data))
        }
    }
});



export const { addTodoList, removeTodo } = Slice.actions;
export default Slice.reducer;