// JavaScript source code
import Error from "./images/404notfound.jpg"; // Ensure you have a 404 image in the images folder
import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <div className="error-page">
            <Link to="/"><p>Go Back to Homepage</p></Link>
            <img src={Error}></img>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}

export default ErrorPage