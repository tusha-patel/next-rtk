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
        }
    }
});



export const { addTodoList } = Slice.actions;
export default Slice.reducer;