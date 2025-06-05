// JavaScript source code

import Image from "./images/beloved.jpg" 
import { Link } from "react-router-dom"
import wallpaper from "./images/librarypic.jpg"
import billy from "./images/billy.jpg"

function Book(props) {

    const booklist = props.book

    console.log(booklist)

    const famous = booklist.filter(book => book.rating > 4.7)
    console.log(famous)

    return (
        <>
            <div className="wallpaper" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", backgroundImage: `url(${billy})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div>
                    <p>Welcome to Online Library System</p>
                    <a href="https://github.com/sreenivas2589/onlinelibrary" target="_blank" style={{ fontSize: "2rem", color: "#4674DF", textShadow: "5px 5px 2px black", textDecoration: "none", fontWeight: "bolder", fontFamily: "sans-serif" }}>Github</a>
                </div>
                <div>
                    <img src={wallpaper}></img>
                </div>
            </div>
            <br></br>
            <div className="bookscategories">
                <Link to={`books/Internet`}><button>Internet</button></Link>
                <Link to={`books/Java`} ><button>Java</button></Link>
                <Link to={`books/Software Engineering`} ><button>Software Engineering</button></Link>
                <Link to={`books/Microsoft .NET`} ><button>Microsoft .NET</button></Link>
                <Link to={`books/Web Development`} ><button>Web Development</button></Link>
            </div>

            <h2 style={{ fontFamily: "roboto", fontSize:"1.8rem" }}>Popular Books</h2>
            
           
            <div className="booklist">
                

                {famous.map((book, index) => {
                return (
                    <Books key={index} book={book}/>
                )
                }
                )}
            </div>
        </>
        
    )
}

function Books(props) {
    const { authors, thumbnailUrl,title, isbn, shortDescription,rating } = props.book

    return (
        <div className="book" >
            
            <p>{title}</p>
            <img src={thumbnailUrl} alt="image" style={{ width: "200px", height: "200px" }}></img>
            <p><span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>Author/s:</span>{authors[0]}{authors[1] ? `,${authors[1]}` : ""}</p>
            <p>{shortDescription.length > 50 ? shortDescription.substring(0, 30) + "..." : shortDescription}</p>
            <p><span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>Rating:</span>{rating}</p>
            <Link to={`/book/${isbn}`}><button>More Details</button></Link>
        </div>
        

    )
}

export default Book