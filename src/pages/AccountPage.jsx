import { useContext, useState } from 'react'
import { UserContext } from '../UsetContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlacesPage from './PlacesPage'
import AccountNav from '../AccountNav'

const Account = () => {
  const[redirect, setRedirect] = useState(null)
    const {ready,user,setUser} = useContext(UserContext)
    let {subpage} = useParams()
    if(subpage === undefined){
      subpage = 'profile'
    }


    async  function LogOut(){
       await axios.post('/logout')
       setRedirect('/')
       setUser(null)
    }

    if(!ready){
        return 'Loading...'
    }

    if(ready && !user && !redirect){
        return <Navigate to ={'/login'} />
    }

        if (redirect){
          return <Navigate to={redirect} />
        }

  return (
    <div>
        
      <AccountNav />
        {
          subpage === 'profile' &&(
            <div className='text-center max-w-lg mx-auto'>
              Logged in as {user}  ({user.email})

              <button onClick={LogOut} className='bg-[#ff5a60] text-white 
              font-bold p-3 rounded-full max-w-sm mt-2'>Logout</button>
            </div>

          )
        }

        {
          subpage === "places" && (
            <div>
              <PlacesPage />
            </div>
          )
        }
    </div>
  )
}

export default Account