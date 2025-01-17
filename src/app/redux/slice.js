const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");

let initialState = {
    fetchUser: [],
    users: JSON.parse(localStorage.getItem("users")) || [],
}

export let fetchApiUser = createAsyncThunk("/fetchApiUser", async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response = await response.json();
})


const Slice = createSlice({
    initialState,
    name: "addUserSlice",
    reducers: {
        addUser: (state, action) => {
            let data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            let userData = JSON.stringify(state.users);
            localStorage.setItem("users", userData);
            // localStorage.setItem(`users_${data.id}`, userData)
        },
        removeUser: (state, action) => {
            let data = state.users.filter((item) => {
                return item.id !== action.payload;
            });
            state.users = data;
            let users = state.users.filter((item) => {
                return item.id == action.payload
            })
            // localStorage.removeItem(`users_${action.payload}`)
            localStorage.setItem("users", JSON.stringify(data))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUser.fulfilled, (state, action) => {
            // console.log(action);
            state.fetchUser = action.payload;
        });
    }
});



export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;