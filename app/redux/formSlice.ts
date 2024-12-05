import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface formState {
    email: string;
    nama_depan: string;
    nama_belakang: string;
    password: string;
    konfirmasi_password: string;
}

const initialState: formState = {
    email: '',
    nama_depan: '',
    nama_belakang: '',
    password: '',
    konfirmasi_password: '',
}

const formSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setForm(state, action: PayloadAction<formState>) {
        state.email = action.payload.email;
        state.nama_depan = action.payload.nama_depan;
        state.nama_belakang = action.payload.nama_belakang;
        state.password = action.payload.password;
        state.konfirmasi_password = action.payload.konfirmasi_password;
        },
    },
})

export const { setForm } = formSlice.actions;
export default formSlice.reducer;