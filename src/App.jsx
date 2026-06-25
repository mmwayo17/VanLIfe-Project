import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import "./server"

function App() {
  
  return (
    <BrowserRouter>
      <header>
        <Link to='/' className='site-logo'>#Van Life</Link>
        <nav className='NavBar'>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Vans' element={<Vans/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
