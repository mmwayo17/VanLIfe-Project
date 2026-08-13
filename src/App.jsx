import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Vans/Home'
import About from './pages/Vans/About'
import Vans,  { loader as vansLoader } from './pages/Vans/Vans'
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
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import NotFound from './pages/NotFound'
import getData from './api'

function App() {
    const [vansData, setVansData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function data() {
        setLoading(true)
        try{
            const data = await getData()
            setVansData(data)
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
        
        
        }

        data()
    }, [])

    const routes = createBrowserRouter(createRoutesFromElements(
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />

        <Route path='host' element={<HostLayout/>} >
            <Route index element={<Dashboard/>} />
            <Route path='income' element={<Income/>} />
            <Route path='vans' element={<HostVans/>} />

            <Route path='vans/:id' element={<HostVansDetails/>}>
            <Route index element={<HostVanInfo />}/>
            <Route path='pricing' element={<HostVanPricing/>} />
            <Route path='photos' element={<HostVanPhotos/>} />
            </Route>

            <Route path='reviews' element={<Reviews/>} />
        </Route>

        <Route path='Vans' element={<Vans />}  loader={vansLoader}/> 
        <Route path='Vans/:id' element={<VanDetail vansData={vansData}/>}/>
        <Route path="*" element={<NotFound />} />
        </Route>
    ))

    return (
        <RouterProvider router={routes} />
    )
}

export default App
