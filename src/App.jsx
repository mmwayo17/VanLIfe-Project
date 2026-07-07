import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Vans/Home'
import About from './pages/Vans/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/vanDetail'
import Layout from './components/Layout'
import Host from './pages/Host/Dashboard'
import "./server"
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVansDetails from './pages/Host/HostVansDetails'

function App() {
  const [vansData, setVansData] = useState([])

    useEffect(() => {
        async function data() {
            const response = await fetch("api/vans")
            const data = await response.json()

            setVansData(data.vans)
        }

        data()
    }, [])
  
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />

          <Route path='host' element={<HostLayout/>} >
            <Route index element={<Dashboard/>} />
            <Route path='income' element={<Income/>} />
            <Route path='vans' element={<HostVans/>} />
            <Route path='vans/:id' element={<HostVansDetails/>} />
            <Route path='reviews' element={<Reviews/>} />
          </Route>

          <Route path='Vans' element={<Vans vansData={vansData}/>} /> 
          <Route path='Vans/:id' element={<VanDetail vansData={vansData}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
