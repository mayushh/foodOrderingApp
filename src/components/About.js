import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileClass from '../PofileAsClassComponent' 
import Profile from './body/Profile'

const About = () => {
  return (
    <div>
    {/* <Outlet/> */}
    <h1>this is class based component </h1>
    <ProfileClass></ProfileClass> 
    <br /><br /><br />
    <h1>this is functional based component</h1>
    <Profile></Profile>
    </div>
  )
}

export default About