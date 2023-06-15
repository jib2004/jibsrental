import {Routes , Route} from 'react-router-dom'
import Indexpage from '../../pages/Indexpage'
import Login from '../../pages/Login'
import Layout from '../../Layout'
import Register from '../../pages/Register'
import axios from 'axios'
import Account from '../../pages/AccountPage'
import PlacesPage from '../../pages/PlacesPage'
import PlacesFormPage from '../../pages/PlacesFormPage'
import PlacespageFormUpdate from '../../pages/PlacespageFormUpdate'
import PlacePage from '../../pages/PlacePage'


axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true
const Navbar = () => {

  return (
   
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Indexpage/>}/>
      <Route path='/login' element={<Login />}/> 
      <Route path='/register' element={<Register />}/>
      <Route path='/account' element={<Account />}/>
      <Route path='/account/places' element={<PlacesPage />}/>
      <Route path='/account/places/new' element={<PlacesFormPage />}/>
      <Route path='/account/places/:id' element={<PlacespageFormUpdate />}/> 
      <Route path='/place/:id' element={<PlacePage /> }/>
      {/*So we can have sub subpages and still be on the account page*/}
      {/* <Route path='/account/bookings' element={<Account />}/>
      <Route path='/account/places' element={<Account />}/> */}
      </Route>
    </Routes>
    
  )
}

export default Navbar
