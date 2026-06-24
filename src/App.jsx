import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/' className='site-logo'>#Van Life</Link>
        <nav className='NavBar'>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
