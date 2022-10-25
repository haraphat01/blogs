import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        id: "0", name: 'arafat akata'
    },
    {
        id: "1", name: 'arafat fatimoh'
    },
    {
        id: "2", name: 'gold fatimoh'
    },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducer: {

    }
})

export default usersSlice.reducer