// import {useState} from 'react'
import logo from './assets/airbnb.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import {TbWorld} from 'react-icons/tb'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './UsetContext'


const Header = () => {
  const {user} = useContext(UserContext)
  return (
    <div className="border-b p-5">
    <div className='flex items-center justify-between   sm:mx-6 md:mx-10 lg:mx-12'>
      <div className="logo flex items-center  basis-1/4 ">
      <Link to={'/'}> 
      <img src={logo} alt="Company logo" className='w-10'/>
        <span className='ml-1 text-xl font-bold text-[#ff5a60]'>airbnb</span>
        </Link>

      </div>

      <div className="hidden  lg:flex border justify-center items-center relative  shadow-sm shadow-gray-400 rounded-full">
        <input type="search" name="" className='border w-[25rem] py-4 rounded-full outline-0 '  id=""  placeholder='' />
        <div className='flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600'>
            <button className=' w-full'>Anywhere</button> 
            <button className='border-x w-full'>Any work</button>
            <button className=' w-full text-gray-600/60 pl-4'>Add groups</button>
        </div>
        <div className='bg-[#ff5a60] p-2 rounded-full mr-2'>
        <AiOutlineSearch  className='text-white'/>
        </div>
      </div>

      <div className="right flex items-center justify-end lg: pr-3 font-semibold text-gray-600 ">
        <p className='text-[17px]'>Airbnb your home</p>
        <div className=' lg:mx-6 flex items-center gap-1 sm:mx-2'>
        <button><TbWorld className=''/></button>
        <span>EN</span>
        </div>
        
        <Link  to={user?'/account': '/login'} className='flex items-center gap-2 border px-3 py-2 rounded-full font-bold shadow-lg shadow-gray-300 '>
            <GiHamburgerMenu className='text-[22px] cursor-pointer hover:text-red-600 duration-100 ease-out' />
            <FaUserCircle className= 'text-[22px] text-black cursor-pointer hover:text-red-600 duration-100 ease-out'/>

            {!!user && (
              <div>
                {user}
              </div>
            )}
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Header