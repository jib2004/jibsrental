import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PlacePage = () => {
    const {id} = useParams()
    const [place, setPlace] = useState(null)
    const [showAllPhotos, setShowAllPhotos] = useState(false)
    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get(`/places/${id}`)
        .then(res=>{
            setPlace(res.data)
        })
    }, [id])

    if (!place) return ''

    if(showAllPhotos){
        return(
            <div className='absolute inset-0 bg-black  min-h-screen overflow-hidden overflow-y-scroll'>
                <div className='p-8 grid gap-4'>
                <h2 className='text-3xl text-white'>Pictures of {place.title}</h2>
                    <div>
                      
                        <button className='w-fit p-3 rounded-full bg-white' onClick={()=> setShowAllPhotos(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                        </svg>

                        </button>
                    </div>
                 {place.photos.length > 0 && place.photos.map( 
                    photo=>(
                        <div className='' key={photo}>
                            <img className='w-full h-full object-fill' src={"http://localhost:4000/uploads/"+photo} alt="" />
                        </div>
                    )
                       
                        
                )}
                </div>

                </div>
        )
    }
  return (
    <div className='mt-4 bg-gray-100 -mx-8 px-8 pt-8'>
        <h1 className='text-3xl'>{place.title}</h1>
        <a className='underline my-3  font-semibold flex  gap-1 items-center' target='blank' href={`https://maps.google.com/?q=${place.address}`}>
            {place.address}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

            </a>

        <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
            <div>
                
                    {place.photos.length > 0 && (
                        <div className=' aspect-square object-cover'>
                            <img className='w-full h-full object-cover' src={"http://localhost:4000/uploads/"+place.photos[0]} alt="" />
                        </div>
                        
                    )}
                
            </div>
            <div className='grid '>
            {place.photos.length > 0 && (
                        <img className='aspect-square object-cover' src={"http://localhost:4000/uploads/"+place.photos[1]} alt="" />
        
                    )}

                    <div className=' overflow-hidden'>
                    {place.photos.length > 0 && (
                        <img className='aspect-square object-cover relative top-2' src={"http://localhost:4000/uploads/"+place.photos[2]} alt="" />
        
                    )}
                    </div>

                
                
            </div>
        </div> 
        <button onClick={()=> setShowAllPhotos(true)} className='w-fit absolute bottom-0 right-0 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-50'>Show More Pictures</button>
        </div>

        <div className='my-4'>
            <h2 className='font-semibold text-2xl'>Description</h2>
            {place.description}
        </div>

        <div className='grid grid-cols-2'>
            <div>
                Check in: {place.checkIn} <br />
                Check Out: {place.checkOut} <br />
                Max Guests: {place.maxGuests}
            </div>
            <div>
                <div className=' bg-white shadow p-4 rounded-2xl'>
                    <h2 className='text-2xl text-center'>
                    Price: ${place.price} /per night
                    </h2>

                    <div className="border rounded-2xl mt-4">
                        <div className="flex">
                        <div className='py-3 px-4'>
                    <label>Check in:</label>
                    <input type="date" />
                    </div>

                    <div className='py-3 px-4 border-l'>
                        <label>Check Out:</label>
                        <input type="date" />
                    </div>
                        </div>
                    
                    </div>
                    

                    
                    <button className="primary mt-4">Reserve</button>
                </div>
            </div>

        </div>


    </div>
  )
}

export default PlacePage