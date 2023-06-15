import {useEffect, useState} from 'react'
import Perks from '../Perks'
import axios from 'axios'
import AccountNav from '../AccountNav';
import { Navigate, useParams } from 'react-router-dom';

   
const PlacespageFormUpdate = () => {
    const {id} = useParams() 
   
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [photoLink,setPhotoLink] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);
    const [redirect , setRedirect] = useState(false)
    const [price,setPrice] = useState(0);




    if (!id){
        return <h1>Problem</h1>;
    }else{
    axios.get('/places/'+ id)
    .then(res=>{
        const {data} = res;
        setTitle(data.title)
        setAddress(data.address)
        setAddedPhotos(data.addedPhotos)
        setDescription(data.description)
        setPerks(data.perks)
        setExtraInfo(data.extraInfo)
        setCheckIn(data.checkIn)
        setCheckOut(data.checkOut)
        setMaxGuests(data.maxGuests)
        setPrice(data.price)
    })}

    
    async  function addPhotoByLink(e){
        e.preventDefault()
        const {data:filename} = await axios.post('/upload-by-link',{link: photoLink})
        setAddedPhotos(prev =>{
            return [...prev, filename]
        })
    
        setPhotoLink(' ')
    }
     
     function uploadPhoto(e){
        const files = e.target.files
        const data = new FormData
        for(let i = 0; i < files.length; i++){
            data.append('photos' , files[i])
      }
         axios.post('/upload', data, {
            headers: {"Content-type": 'multipart/form-data'}
        }).then(res =>{
            const  {data:filenames} = res
            setAddedPhotos(prev =>{
                return [...prev, ...filenames]
            })
            
        })
    }


    async function addNewPlace(e){
        e.preventDefault()
        const placeData = {
            title,address,addedPhotos,
            description,perks,extraInfo,
            checkIn,checkOut,maxGuests,price
        }
        if(id){
            //update
            await axios.put('/places',{
                id,
                ...placeData
               })
               setRedirect(true)
        }else{
            //new place
            await axios.post('/places',placeData)
               setRedirect(true)
        }
       
    }

    if(redirect){
        return <Navigate to='/account/places'/>
    }

  return (
    <div>
        <AccountNav />
    <form onSubmit={addNewPlace}>
        <h2 className='text-2xl mt-4'>Title</h2>
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder='title, For example: My Lovely APt' />

        <h2 className='text-2xl mt-4'>Address</h2>
        <input type="text" value={address} onChange={e=>setAddress(e.target.value)} placeholder='Address' />

        {/* <h2 className='text-2xl mt-4'>Photos</h2>
        <div className='flex gap-2'>
            <input 
            value={photoLink} 
            onChange={e=>{setPhotoLink(e.target.value)}} 
            type="text" placeholder='Add pic link' />

            <button onClick={addPhotoByLink} className='bg-gray-200 w-auto px-4 rounded-2xl'>Add&nbsp;Photo</button>
        </div> */}
        {/* <div className='mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        
        {/* { addedPhotos.map((link)=>(
            <div key={link} className='h-32 flex'>
            
                <img className='rounded-2xl w-full object-cover ' src={'http://localhost:4000/uploads/' + link} alt="" />
            </div>
        ))} 
        <label className='h-32 cursor-pointer inline-flex items-center justify-center gap-1 border bg-transparent rounded-2xl  p-2 text-2xl text-gray-600'>
        <input type="file" multiple  className='hidden' onChange={uploadPhoto}/>
            Upload <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>

        </label>
        </div> */}

        <h2 className='text-2xl mt-4'>Description</h2>
        <textarea value={description} onChange={e=> setDescription(e.target.value)} placeholder='Write a brief description about your place' />       
        
        <Perks selected={perks} onChange={setPerks}/>


        <h2 className='text-2xl mt-4'>Extra Info</h2>
        <p className='text-gray-500 text-sm'>House Rules etc</p>
        <textarea value={extraInfo} onChange={e=>{setExtraInfo(e.target.value)}}/>

        

        <h2 className='text-2xl mt-4'>Check In&Out , Max Guests</h2>
        <p className='text-gray-500 text-sm'>Add Check in and out times, and ensure you clean the house within this period </p>
        <div className='grid gap-2 grid-cols-4'>
            <div className=''>
            <h3 className='mt-2 -mb-1'>Check in Time</h3>
            <input 
            type="text" 
            value={checkIn} 
            onChange={e=>setCheckIn(e.target.value)} 
            placeholder='14:00'/>
            </div>

            <div>
            <h3 className='mt-2 -mb-1'>Check in Time</h3>
            <input 
            value={checkOut}
             onChange={e=>setCheckOut(e.target.value)} 
             type="text" 
             placeholder='11:00'/>
            </div>

            <div>
            <h3 className='mt-2 -mb-1'>Max number of Guests</h3>
            <input 
            value={maxGuests} 
            onChange={e=>setMaxGuests(e.target.value)} 
            type="number" />
            </div>

            <div>
            <h3 className='mt-2 -mb-1'>Price</h3>
            <input 
            value={price} 
            onChange={e=>setPrice(e.target.value)} 
            type="tel" />
            </div>
        </div>
        

            <div className=''>
                <button className='primary my-4'>Save</button>
            </div>

        </form>
    </div>
  )
}

export default PlacespageFormUpdate