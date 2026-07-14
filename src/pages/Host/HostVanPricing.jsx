import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const [vanDetails] = useOutletContext()

    return(
        <h4 className="host-van-price">${vanDetails.price}/day</h4>
    )
}