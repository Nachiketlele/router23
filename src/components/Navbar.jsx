import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Style from "./Style.module.css"




const Navbar = () => {
    const {isAuth,logout} = useContext(AuthContext)
    const navigate = useNavigate()





    const HandleChange = () =>{
        if(isAuth){
            logout()
        }else{
            navigate("/login")
        }
        
    }




    
  return (
    <div className={Style.div}>Navbar:
        <Link to=''>Home</Link>
        <Link to='/feed'>Feeds</Link>
        <button onClick={HandleChange}>
            {isAuth?"logout":"login"}
        </button>
    </div>
  )
}

export default Navbar