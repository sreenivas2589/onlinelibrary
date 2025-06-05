import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Book from "./Components/Books.jsx"
import BrowseBooks from './Components/browsebooks.jsx'
import Addbook from "./Components/Addbook.jsx"
import Header from "./Components/Header.jsx"
import ErrorPage from './Components/Errorpage.jsx'
import Bookdetails from './Components/Bookdetails.jsx'
import Browse from './Components/Browse.jsx'
import { useSelector } from 'react-redux'
import { createContext } from "react";


function App() {

    const updatebooks = useSelector((state) => state.book)

    const UserContext = createContext(updatebooks)

    console.log("updatebooks", updatebooks)

    return (
        <UserContext.Provider value={updatebooks}>
        <BrowserRouter>
            <Routes>
              
                <Route path="/" element={<Header />}>
                  <Route index element={<Book book={updatebooks}/>} />
                  <Route path="books" element={<Browse book={updatebooks}/>} />
                  <Route path="books/:category" element={<BrowseBooks book={updatebooks}/>} />
                  <Route path="addbook" element={<Addbook />} />
                  <Route path="book/:id" element={<Bookdetails book={updatebooks}/>} />
                  {/*<Route path="/books/:category" element={<BrowseBooks />} />*/}
                  <Route path="*" element={<ErrorPage />} />
                </Route>
              
              
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
  )
}

export default App
