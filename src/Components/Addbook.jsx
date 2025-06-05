// JavaScript source code
import { useDispatch } from "react-redux"
import { useState } from "react"
import {addItem}  from "./Booksadd.jsx"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Addbook() {

    const bookitems = useSelector((state) => state.book)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [title, settitle] = useState("")
    const [isbn, setisbn] = useState("")
    const [longdesc, setlongdesc] = useState("")
    const [shortdesc, setshortdesc] = useState("")
    const [author, setauthor] = useState("")
    const [categories, setcategories] = useState("")
    const [rating, setrating] = useState(0)
    const [image, setimage] = useState("")
    
    function handleAddBook(event) {
        event.preventDefault()

        if (!title || !author || !isbn || !longdesc || !shortdesc || !categories || !rating || !image) {
            alert('Plese enter all the fields ');
            return
        }

        const newbook = { "title": title, "isbn": isbn, "shortDescription": shortdesc, "longDescription": longdesc, "categories": categories, "authors": author, "rating": rating, "thumbnailUrl": image }

        dispatch(addItem(newbook));
        navigate('/books')
    }


    console.log(bookitems)

    return (
        <div className="addbook">
            <h1>Add A New Book</h1>

                <form onSubmit={handleAddBook} className="addbookdiv">
                    <div className="inputfield">
                        <label htmlFor="title">title</label>
                        <input name="title" id="title" onChange={(e) => settitle(e.target.value)} value={title}  placeholder="Enter title of new book"></input>
                    </div>
                    
                    <div className="inputfield">
                        <label htmlFor="isbn">ISBN</label>
                        <input name="isbn" id="isbn" onChange={(e) => setisbn(e.target.value)} value={isbn} placeholder="Enter ISBN"></input>
                    </div>

                    <div className="inputfield">
                        <label htmlFor="shortdesc">short description</label>
                        <input name="shortdesc" id="shortdesc" onChange={(e) => setshortdesc(e.target.value)} value={shortdesc} placeholder="Enter short description of new book"></input>
                    </div>

                    <div className="inputfield">
                        <label htmlFor="longdesc">long description</label>
                        <input name="longdesc" id="longdesc" onChange={(e) => setlongdesc(e.target.value)} value={longdesc} placeholder="Enter long description new book"></input>
                    </div>

                    <div className="inputfield">
                        <label htmlFor="authors">authors</label>
                        <input name="authors" id="authors" onChange={(e) => setauthor((e.target.value).split(","))} value={author} placeholder="Enter name of the author, if there are more than one, seperate by comma"></input>
                    </div>

                    
                    <div className="inputfield">
                        <label htmlFor="categories">categories</label>
                        <input name="categories" id="categories" onChange={(e) => setcategories((e.target.value).split(","))} value={categories} placeholder="Enter category of new book"></input>
                    </div>

                    <div className="inputfield">
                        <label htmlFor="rating">rating</label>
                        <input name="rating" id="rating" onChange={(e) => setrating((e.target.value))} value={rating} type="number"></input>
                    </div>

                    <div className="inputfield">
                        <label htmlFor="image">Image</label>
                        <input name="image" id="image" onChange={(e) => setimage(URL.createObjectURL((e.target.files[0])))} type="file" ></input>
                    </div>
                   
                    <button type="submit">Submit</button>
                </form>
            
        </div>

    )

    
}

export default Addbook
