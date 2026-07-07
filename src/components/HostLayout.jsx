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
        <NavLink style={({isActive}) => isActive? activeStyle: null} end to="/host">DashBoard</NavLink>
        <NavLink style={({isActive}) => isActive? activeStyle: null} to="/host/income">Income</NavLink>
        <NavLink style={({isActive}) => isActive? activeStyle: null} to="/host/vans">Vans</NavLink>
        <NavLink style={({isActive}) => isActive? activeStyle: null} to="/host/reviews">Reviews</NavLink>
    </nav>
    <Outlet />
    </>
    )    
}