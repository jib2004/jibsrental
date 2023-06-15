// import Rentals from "./component/Rentals/Rentals"
// import Filters from "./component/filters/Filters"
import { useEffect } from "react"
import Navbar from "./component/nav/Navbar"
import { UserContextProvider } from './UsetContext'
function App() {
  

  return (
     <UserContextProvider>
     <div className="w-screen h-screen bg-white-300">
      <Navbar />
      
      {/* <div className="p-4">
      <Filters />
      <Rentals/>
      </div> */}
     </div>
    </UserContextProvider>
  )
}

export default App
