// JavaScript source code
import { Outlet,Link } from "react-router-dom"

function Header() {

    return (
        <>
            <header>
                <div className="nav">
                    <div>
                        <h1>Online Library</h1>
                    </div>
                    

                    <div className="menus">
                        <Link to="/"><button>Home</button></Link>
                        <Link to="/books"><button>Browsebooks</button></Link>
                        <Link to="/addbook"><button>AddBook</button></Link>
                    </div>
                   
                </div>
                
            </header>
            
            <Outlet />
        </>
        
    )
}

export default Header