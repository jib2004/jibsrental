import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function registerUser(e){
        e.preventDefault();
        try{
          let response =  await axios.post('/register',{
                name,
                email,
                password
            }) 

            if(response){
              alert('Registration Successful') 
            }else{
              alert("Try again later")
            }
             
        }
        catch(e){
            alert('Registration Failed')
        }
        
    } 
  return (
    <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">    
    <h1 className="text-4xl text-center mb-4">Register</h1>
        <form action="" className="max-w-md mx-auto " onSubmit={registerUser}>
        <div className="flex flex-col mb-4">
        <input 
        type="text" 
        placeholder="John Doe"
        value={name} 
        onChange={e=>setName(e.target.value)}/></div>

        <input type="email" 
         placeholder="Enter Your Email"
          value={email} 
          onChange={e=>setEmail(e.target.value)}/>

        <input type="password" 
          placeholder="Password"
        value={password} 
        onChange={e=>setPassword(e.target.value)}/>

        <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">
            Already a member? <Link to={'/login'} className="underline text-black">Login</Link>
            </div>
        </form>
        </div>

    </div>
  )
}

export default Register