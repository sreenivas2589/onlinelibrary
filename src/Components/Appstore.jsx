// JavaScript source code
import { configureStore } from "@reduxjs/toolkit"
import Bookaddredux from "./Booksadd.jsx"

const Appstore = configureStore({
    reducer: {
        book: Bookaddredux
    }
})


export default Appstore