import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    const [ready, setReady] = useState(false)
    useEffect(() => {//useEffect doesnt work with async/await
        if (!user) {
          axios.get('/profile')
            .then(({ data }) => {
              setUser(data);
              setReady(true)
              // Remove the routing code from here
            });
        }
      }, []);
      
    return(
        <UserContext.Provider value={{user, setUser,ready}}>
            {children}
        </UserContext.Provider>
        
    )
}