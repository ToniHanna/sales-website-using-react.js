import {Link} from "react-router-dom"
export function Navbar(){
    return(
        <div class='nav-container'>
            <img src='images/logo.png' alt='logo'></img>
            <nav class='App-nav'>
                <ul>
                    <li>
                        <Link className='nav-links' to="/home">Home</Link>    {/* I can change pages using link (better than manually which require changing url*/}
                    </li>
                    <li>
                        <Link className='nav-links' to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className='nav-links' to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}