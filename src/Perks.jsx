import React from 'react'
import {BsFillDoorOpenFill,BsThermometerHigh,BsWater} from 'react-icons/bs'
import {AiFillCar} from 'react-icons/ai'
import {FaFireExtinguisher,FaDog,FaBed, FaSmoking} from 'react-icons/fa'
import {MdPool,MdKitchen} from 'react-icons/md'
import {BiFirstAid} from 'react-icons/bi'
import {GiWashingMachine} from 'react-icons/gi'

const Perks = ({selected, onChange}) =>{
    function handleCbClick(e){
        const  {checked,name} = e.target;
        if(checked){
            onChange([...selected, name])
        }else{
            onChange([...selected.filter(selectedName => selectedName !== name)])
        }
        
        // console.log(e.target.checked)
        // console.log(e.target.name)
    }
  return (
    <div>
    <h2 className='text-2xl mt-4'>Perks</h2>
                <p className='text-gray-500 text-sm'>Select a perk</p>
                <div className='grid grid-cols-2 mt-2 md:grid-col-3 lg:grid-cols-4 gap-2'>
                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                    
                        <input type="checkbox" checked={selected.includes('wifi')} name='wifi' onChange={handleCbClick}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                        </svg>

                        <span>Wifi</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Free Parking')} name='Free Parking' onChange={handleCbClick}/>
                        <AiFillCar />
                        <span>Free Parking</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Fire Extinguisher')} name='Fire Extinguisher' onChange={handleCbClick}/>
                        <FaFireExtinguisher />
                        <span>Fire Extinguisher</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Private Entrance')} name='Private Entrance' onChange={handleCbClick}/>
                        <BsFillDoorOpenFill />
                        <span>Private Entrance</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Pet Allowed')} name='Pet Allowed' onChange={handleCbClick}/>
                        <FaDog />
                        <span>Pet Allowed</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Room Service')} name='Room Service' onChange={handleCbClick}/>
                        <FaBed />
                        <span>Room Service</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('First Aid Kit')} name='First Aid Kit' onChange={handleCbClick}/>
                        <BiFirstAid />
                        <span>First Aid Kit</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Smoke Alarm')} name='Smoke Alarm' onChange={handleCbClick}/>
                        <FaSmoking />
                        <span>Smoke Alarm</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Heating')} name='Heating' onChange={handleCbClick}/>
                        <BsThermometerHigh />
                        <span>Heating</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Free Water Heater')} name='Free Water Heater' onChange={handleCbClick}/>
                        <BsWater />
                        <span>Free Water Heater</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Pool or Jacuzzi')} name='Pool or Jacuzzi' onChange={handleCbClick}/>
                        <MdPool />
                        <span>Pool or Jacuzzi</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Tv')} name='Tv' onChange={handleCbClick}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                        </svg>

                        <span>Tv</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Washer')} name='Washer' onChange={handleCbClick}/>
                        <GiWashingMachine />
                        <span>Washer</span>
                    </label>

                    <label className='border p-4 flex rounder-2xl gap-2 items-center cursor-pointer'>
                        <input type="checkbox" checked={selected.includes('Kitchen')} name='Kitchen' onChange={handleCbClick}/>
                        <MdKitchen />
                        <span>Kitchen</span>
                    </label>
                </div>

                </div>

  )
}

export default Perks