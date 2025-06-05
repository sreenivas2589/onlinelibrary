// JavaScript source code

import { useState } from "react"
import { Link } from "react-router-dom"

function Browse(props) {


    const booklist = props.book

    const [search, setsearch] = useState("")


    const [books, setbooks] = useState(booklist)

    function handleSearch() {

        setbooks(booklist.filter(book => (
            (book.title.toLowerCase().includes(search.toLowerCase().trim())) ||
            (book.authors[0].toLowerCase().includes(search.toLowerCase().trim())) || (book.authors[1] && book.authors[1].toLowerCase().includes(search.toLowerCase().trim()))
        )))
        setsearch("")
    }

    return (
        <div>
            <br></br>
            <br></br>
            <div className="booksearch">
                <input type="text" placeholder="Enter title or author name" onChange={(e) => setsearch(e.target.value)} value={search} required></input>
                <button onClick={handleSearch}>Search</button>
            </div>
            <br></br>
            <br></br>
            <div className="bookscategories">
                <Link to="Internet"><button>Internet</button></Link>
                <Link to="Java"><button>Java</button></Link>
                <Link to="Software Engineering"><button>Software Engineering</button></Link>
                <Link to="Microsoft .NET"><button>Microsoft .NET</button></Link>
                <Link to="Web Development"><button>Web Development</button></Link>
            </div>
            
            <h1>Browse Books</h1>
            <div className="browsebooks">
            {books.length === 0 && <h2>No books found</h2>}
            {books.map((book,index) => {
                return (
                    <div key={index} className="eachbook">
                        <img src={book.thumbnailUrl} alt="image"></img>
                        <h1>{book.title}</h1>
                        <h2><span style={{ border: "2px solid #EFF6FF", backgroundColor: "#EFF6FF", padding: "10px" }}>Author/s</span>:{book.authors[0]}{book.authors[1] ? `,${book.authors[1]}` : ""}</h2>
                        <p>{book.shortDescription.length > 50 ? book.shortDescription.substring(0, 30) + "..." : book.shortDescription}</p>
                        <p>{book.categories[0]}{book.categories[1] ? `,${book.categories[1]}` : ""}</p>
                        <Link to={`/book/${book.isbn}`}><button>View Details</button></Link>

                    </div>

                )

            })}
            </div>
        </div>
    );

}

export default Browse