import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.Component'

const Movie_layout = 
(Component) => 
({...props}) => {
  return (
    <div>
      <MovieNavbar />
      <Component {...props}/>
       
       <div>Footer</div>
    </div>


  )
}

export default Movie_layout
