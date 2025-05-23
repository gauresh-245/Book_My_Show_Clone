import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component'

const Default_layout = 
(Component) => 
({...props}) =>{
  return (
    <div>
         <Navbar />
         <Component {...props} />
         <div>Footer</div>
    </div>
  )
}

export default Default_layout
