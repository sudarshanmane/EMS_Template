import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: { email: "", password: "" } },
    reducers: {
        login: (state, { payload }) => {
            state.loginvalue = payload
        },
        logout: (state) => {
            state.value = { email: "", password: "" }
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;