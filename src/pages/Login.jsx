import axios from "axios"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../UsetContext"


const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const {setUser} =  useContext(UserContext)
  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const {data} = await axios.post('/login', { email, password });
      
      setUser({data})
        alert('Login Successful');
       setRedirect(true);
      
    } catch (e) {
      alert('Login Failed: ' + e.message);
    }
  }
  

  if(redirect){
    return <Navigate to='/' />

  }


  return (
    <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">    
    <h1 className="text-4xl text-center mb-4">Login</h1>
        <form  className="max-w-md mx-auto " onSubmit={handleLoginSubmit}>
            <input type="email" 
            placeholder="Enter Your Email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>

            <input type="password"
             placeholder="Password"
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}/>

            <button className="primary">Login</button>
            <div className="text-center py-2 text-gray-500">
            Do not have an account yet? <Link to={'/register'} className="underline text-black">Register now</Link>
            </div>
        </form>
        </div>

    </div>
  )
}

export default Login