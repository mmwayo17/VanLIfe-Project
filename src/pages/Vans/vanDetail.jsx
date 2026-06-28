import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function VanDetail(props){
    const params = useParams()
    const [van, setVan] = useState(null)
    console.log(props.vansData[params.id - 1])

    useEffect(() => {
        setVan(props.vansData[params.id - 1])
    },[params])
    

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img alt={van.name} src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
