// JavaScript source code

import { Link,useParams } from "react-router-dom"
import back from "./images/back.png"

function Bookdetails(props) {

    const booklist  = props.book
    console.log(booklist)

    const params = useParams()

    const filteredbooks = booklist.filter(book => book.isbn === params.id)
    console.log(filteredbooks)
    return (
        <div className="bookdetailspage">  
            <h2>Book Details</h2>
            <Link to="/books"><button style={{ backgroundImage: `url(${back})`, backgroundRepeat: "no-repeat", height: "64px", width: "64px", border: "none", cursor: "pointer", backgroundColor: "white", marginLeft:"10px" }}></button></Link>
            <br></br>
            <br></br>
            {filteredbooks.map((book,index) => {
                return (
                    <div key={index} className="bookdetails">
                        <div>
                            <img src={book.thumbnailUrl} alt="image"></img>
                        </div>
                        <div>
                            <h1>Title:{book.title}</h1>
                            <h2>Author/s:{book.authors[0]}{book.authors[1] ? `,${book.authors[1]}` : ""}</h2>
                            <p><span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>Category:</span>{book.categories}</p>
                            <p><span style={{ fontWeight: "bolder", fontSize:"1.2rem" }}>Short Description:</span>{book.shortDescription}</p>
                            <p><span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>Long Description:</span>{book.longDescription}</p>
                            <p><span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>Rating:</span>{book.rating}</p>
                        </div>
                    </div>
                )

            } )}
            
        </div>
    )
}

export default Bookdetails