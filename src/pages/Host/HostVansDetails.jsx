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

    const navStyle = {
        textDecoration : "underline",
        fontWeight : "Bold",
        color: "#161616"
    }

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
                <NavLink to={`/host/vans/${params.id}`} 
                    style={({isActive}) => isActive? navStyle: null} end>
                Details
                </NavLink>

                <NavLink to={`/host/vans/${params.id}/pricing`} 
                    style={({isActive}) => isActive? navStyle: null}>
                Pricing
                </NavLink>

                <NavLink to={`/host/vans/${params.id}/photos`} 
                    style={({isActive}) => isActive? navStyle: null}>
                Photos
                </NavLink>
            </div>
            <Outlet context={[vanDetails]}/>
            
        </section>
        </>
    )
}