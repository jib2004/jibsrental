import {FaKey,FaBed,FaCity,FaSwimmingPool} from 'react-icons/fa'
import {GiTropicalFish,GiCastle,GiWoodCabin,GiFarmer} from 'react-icons/gi'
import {TbUfo,TbBeach} from 'react-icons/tb'
import {MdFoodBank} from 'react-icons/md'
import {BsFire,BsFillCupHotFill,BsHouseFill} from 'react-icons/bs'
import Filter from './Filter'


const Filters = () => {
    const sorting =[
        {title:"New", icon:<FaKey />},
        {title:"Beachfront", icon:<TbBeach />},
        {title:"OMG!", icon:<TbUfo />},
        {title:"Tropical", icon:<GiTropicalFish />},
        {title:"Mansion", icon:<BsHouseFill />},
        {title:"Castle", icon:<GiCastle />},
        {title:"Bed & Breakfast", icon:<BsFillCupHotFill />},
        {title:"Iconic cities", icon:<FaCity />},
        {title:"Cabins", icon:<GiWoodCabin />},
        {title:"Trending", icon:<BsFire />},
        {title:"Amazing pools", icon:<FaSwimmingPool />},
        {title:"Rooms", icon:<FaBed />},
        {title:"Luxe", icon:<MdFoodBank />},
        {title:"Farm", icon:<GiFarmer />}
]
  return (
    <div className="sm:mx-6 md:mx-10 lg:mx-12 px-4">
      <div className='flex justify-start gap-3 mt-4 sm:gap-4'>
            {sorting.map((val)=>(
                <Filter title = {val.title} icon = {val.icon} />
            ))}
      </div>
    </div>
  )
}

export default Filters
