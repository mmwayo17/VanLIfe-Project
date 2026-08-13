import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import getData from "../../api";

export function loader(){
    return getData()
}

export default function Vans(props){
    const [searchParams, setSearchParams] = useSearchParams()
    const vansData = useLoaderData()

    //console.log(data)

    const typeFilter = searchParams.get("type")
    
    const filteredVans = typeFilter ? vansData.filter(van => typeFilter == van.type.toLowerCase()) : vansData

    const vanElements = filteredVans.map(van =>
        <Link key={van.id} to={van.id} className="van-details-link" state={{search: searchParams.toString(), type: typeFilter}}>
        <div key={van.id} className="van-tile">
            <img alt={van.name} src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
        </Link>
    )
    

    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                className={`van-type simple ${typeFilter === "simple" && "selected"}`} 
                onClick={() => setSearchParams({type: "simple"})}>
                    Simple
                </button>

                <button 
                className={`van-type rugged ${typeFilter === "rugged" && "selected"}`} 
                onClick={() => setSearchParams({type: "rugged"})}>
                    Rugged
                </button>

                <button 
                className={`van-type luxury ${typeFilter === "luxury" && "selected"}`} 
                onClick={() => setSearchParams({type: "luxury"})}>
                    Luxury
                </button>

                {typeFilter &&
                <button 
                className="van-type clear-filters" 
                onClick={() => setSearchParams({})}>
                    Clear Filters
                </button>}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>      
    )
}
/*<Link to="?type=simple" className="van-type simple">Simple</Link>
                <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
                <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
                <Link to="." className="van-type clear-filters">Clear filters</Link>*/