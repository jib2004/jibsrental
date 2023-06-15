
import {BsPlus} from 'react-icons/bs'
import { Link} from 'react-router-dom'
import AccountNav from '../AccountNav'
import { useEffect, useState } from 'react'
import axios from 'axios'


const PlacesPage = () => { 
  const [places, setPlaces] = useState([])
  useEffect(()=>{
      axios.get('/user-places').then(({data})=>{
          setPlaces(data)
      })
  },[])
  return (
    <div>
    <AccountNav />
    
     <div className='text-center'>

        <Link className='inline-flex gap-1 items-center bg-[#ff5a60] text-white py-2 px-6 rounded-full' to={'/account/places/new'}>
        <BsPlus />  Add New Places 
        </Link>

    </div>

    <div>
      {places.length > 0 && places.map((place)=>(
      <Link to={'/account/places/' + place._id} key={place.title} className='flex cursor-pointer mt-4 gap-4 bg-gray-100 p-4 rounded-2xl'>
      <div className="flex w-32 h-32 bg-gray-300 grow shrink-0">
        {place.photos.length > 0 && (
            <img className='object-cover' src={"http://localhost:4000/uploads/"+place.photos[0]} alt="" />
        )}
      </div>
      <div className='grow-0 shrink'>
      <h2 className='text-xl'>{place.title}</h2> 
        <p className='text-sm mt-2'>{place.description}</p>
      </div>
      
      </Link>
      ))}
    </div>

  

</div>
  )
}

export default PlacesPage