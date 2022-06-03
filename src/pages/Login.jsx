import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'



const Login = () => {
    const {login,isAuth} = useContext(AuthContext)
    const [data,setData] = [{}]
    const handleChange = (e) =>{
     const {name,value} = e.target
     setData({
         ...data,
         [name]:value
     })

    }







    const handleSubmit = (e) =>{
        e.preventDefault()
        login()
    }







  return (
    <form onSubmit={handleSubmit}>
        <input name='email' type="email" placeholder='Enter Email...' onChange={handleChange} />
        <input name='password' type="password" placeholder='Enter Password...' onChange={handleChange} />
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login