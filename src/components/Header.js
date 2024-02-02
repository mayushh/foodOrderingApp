import React, { useState, useContext } from 'react'
import userContext from '../utils/UserContext'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'


export const Header = () => {
  const [isloggedin, setlogin]= useState(true)
  const us = useContext(userContext); 
  const cartItems = useSelector((store)=>store.cart.items)
  const authenticateUser=()=>{
    // to authenticate user
    return true
  }
  return (
    <div className="navbar flex  justify-between  bg-pink-50 mb-2 ">
  {/* <a href="/"><div className="logo"><img src={logo} alt="" /></div></a> */}
 
    
    <ul className='nav-items flex py-2 pl-2'>
    
      <Link to="/"  > <img data-testid = "logo" src="./download.png"/></Link>
    <strong> <li className='menus px-1.5'><Link to="/" className='menus' >home</Link></li></strong>
       <strong> <li className='menus px-1.5'><Link to="/About" className='menus'>about</Link></li></strong>
       <strong> <li className='menus px-1.5'><Link to="/Support" className='menus'>support</Link></li></strong>
       <strong> <li className='menus px-1.5'><Link to="/Shoppee" className='menus'>Shoppee</Link></li></strong>
       <strong> <li className='menus px-1.5'><Link to="/Cart" className='menus' data-testid = "cartItemNum">cart {(cartItems.length!=0) && cartItems.length }</Link></li></strong>
      
    </ul>
    {us.userDetails.name} 
    {us.userDetails.email}
    {
  isloggedin ? (
    <button className='button mr-10 px-px' onClick={() => setlogin(false)}>logout</button>
  ) : (
    <button className='button mr-10 px-px' onClick={() => setlogin(true)}>login</button>
  )
}
  {/* // or by this way */}
    {/* {
  (authenticateUser)? <button className='button' onClick={setlogin(true)}>logout</button>:  <button className='button' onClick={setlogin(false)}>login</button>
  } */}
  </div>
  )
}
