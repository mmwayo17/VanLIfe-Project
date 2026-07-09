import { useEffect, useState } from "react"
import { NavLink, useParams, Link, Outlet } from "react-router-dom"

export default function HostVansDetails(){
    const params = useParams()
    const [vanDetails, setVanDetails] = useState([])

    useEffect(()=>{
        async function detailData() {
            const response = await fetch(`/api/host/vans/${params.id}`)
            const data = await response.json()
            console.log(data)

            setVanDetails(data.vans[0])
        }

        detailData()
    }, [])



    return(
        <>
        <Link to=".." relative="path" className="host-details-back-button">&larr; <span>Back to all vans</span></Link>
        <section className="host-vans-details-section">
            <div className="van-overview">
                <img src={vanDetails.imageUrl}/>
                <div className="van-basic-info">
                    <p className="type">{vanDetails.type}</p>
                    <p className="name">{vanDetails.name}</p>
                    <p className="price">${vanDetails.price}/day</p>
                </div>
            </div>

            <div className="host-van-details-nav">
                <NavLink to="/host/vans/:id">Details</NavLink>
                <NavLink to="/host/vans/:id/pricing">Pricing</NavLink>
                <NavLink to="/host/vans/:id/photos">Photos</NavLink>
            </div>
            <Outlet />
            
        </section>
        </>
    )
}