// JavaScript source code
import { createSlice } from "@reduxjs/toolkit"
import { booklist } from "./booklist.js"

const Bookaddredux = createSlice({
    name: "book",
    initialState: booklist,
    reducers: {
        addItem: (state, action) => {
            state.unshift(action.payload)

        }
    }
}
)


export const { addItem } = Bookaddredux.actions 

export default Bookaddredux.reducer