import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface formLoginState {
    email: string;
    password: string;
}

const initialState: formLoginState = {
    email: '',
    password: '',
}

const fromLoginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
        setFormLogin(state, action: PayloadAction<formLoginState>) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})

export const {setFormLogin} = fromLoginSlice.actions;
export default fromLoginSlice.reducer;