import { Link } from "react-router-dom"

export default function Header(){
    return(
    <header>
        <Link to='/' className='site-logo'>#Van Life</Link>
        <nav className='NavBar'>
            <Link to='/about'>About</Link>
            <Link to='/host'>Host</Link>
            <Link to='/vans'>Vans</Link>
        </nav>
    </header>
    )
}