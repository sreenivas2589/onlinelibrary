// JavaScript source code

import { Link, useParams } from "react-router-dom"
import back from "./images/back.png"

function BrowseBooks(props) {
    const booklist = props.book


    const params = useParams()

    const filteredbooks = booklist.filter(book => book.categories[0].toLowerCase().replaceAll(" ", "") == params.category.trim().toLowerCase().replaceAll(" ", ""))

    return (
        <>
            <Link to="/books"><button style={{ backgroundImage: `url(${back})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "40px", width: "40px", border: "none", cursor: "pointer", backgroundColor: "white", marginLeft: "10px" }}></button></Link>
            <h1 style={{ textTransform: "capitalize" }}>{params.category}</h1>
            <div className="categorybookdiv">
                {filteredbooks.length === 0 && <h2>No books found in this category</h2>}
                {filteredbooks.map((book, index) => {
                    return (
                        <div key={index} className="categorybook">
                            <h1>{book.title}</h1>
                            <h2>Author/s:{book.authors[0]}{book.authors[1] ? `,${book.authors[1]}` : ""}</h2>
                            <img src={book.thumbnailUrl} alt="image" style={{ width: "200px", height: "200px" }}></img>
                            <p>{book.categories}</p>
                            <Link to={`/book/${book.isbn}`}><button>More Details</button></Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BrowseBooks