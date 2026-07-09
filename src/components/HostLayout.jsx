import { Outlet, Link, NavLink } from "react-router-dom";

export default function HostLayout(){
    const activeStyle = {
        fontWeight : "bold",
        textDecoration : "underline",
        color: "#161616"
    }
    return(
    <>
    <nav className="host-layout-nav">
        <NavLink style={({isActive}) => isActive? activeStyle: null} end to=".">DashBoard</NavLink>
        <NavLink style={({isActive}) => isActive? activeStyle: null} to="income">Income</NavLink>
        <NavLink style={({isActive}) => isActive? activeStyle: null} to="vans">Vans</NavLink>
        <NavLink style={({isActive}) => isActive? activeStyle: null} to="reviews">Reviews</NavLink>
    </nav>
    <Outlet />
    </>
    )    
}