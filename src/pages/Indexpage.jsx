import { useEffect, useState } from "react"
import Header from "../Header"
import axios from "axios"
import { Link } from "react-router-dom"


const Indexpage = () => {
  const [places, setPlaces] = useState([])
  useEffect(()=>{
    axios.get('/places')
    .then(res=>{
      setPlaces(res.data)
    })
  }, [])
  return (
  <div className="mt-8 gap-6 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "> 
    {places.length > 0 && places.map(place=>(
      <Link to={'/place/'+place._id} key={place.title} className=" ">
        <div className="bg-gray-500 rounded-2xl" >
        {place.photos.length > 0 && (
            <img className='rounded-2xl aspect-square object-cover' src={"http://localhost:4000/uploads/"+place.photos[0]} alt="" />
        )}
        </div>
        <h3 className="font-bold">{place.address}</h3>
        <h2 className="text-sm truncate text-gray-500">{place.title}</h2> 
        <div className="mt-1">
         <span className="font-bold">&#x24;{place.price}</span>  per night
          </div>
      </Link>
    ))}
  </div>
  )
}

export default Indexpage