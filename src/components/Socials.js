import React from 'react'
import socials from '../data/socials'
import { Link } from 'react-router-dom'

export default function Socials() {

 const style = {
  container: {
   display: 'flex'
  },

  address: {
   padding: '1rem 0rem 2rem 0rem',
   marginLeft: '1rem',
   textDecoration: 'none',
   position: 'center',
   color: '#222',
   letterSpacing: '1px',
   display: 'inline-block'
  },

  li: {
   float: 'left',
   textDecoration: 'none',
   listStyleType: 'none'
  },

  ul: {
   padding: '4rem 0 0 0',
  }

 }

 return (
  <div>
   {
    socials.map((social, index) => {
     return (
      <ul key={index} style={style.ul}>
       <li style={style.li}>
        <a href={social.instagram.url} style={style.address}>
         <span>{social.instagram.icon}</span>
        </a>
       </li>

       <li style={style.li}>
        <a href={social.facebook.url} style={style.address}>
         <span>{social.facebook.icon}</span>
        </a>
       </li>

       <li style={style.li}>
        <a href={social.twitter.url} style={style.address}>
         <span>{social.twitter.icon}</span>
        </a>
       </li>

       <li style={style.li}>
        <Link to="/" style={style.address}>Home</Link>
       </li>
       <li style={style.li}>
        <Link to="/rooms" style={style.address}>Rooms</Link>
       </li>
       <li style={style.li}>
        <Link to="/about" style={style.address}>About</Link>
       </li>
       <li style={style.li}>
        <Link to="/contact" style={style.address}>Contact Us</Link>
       </li>

      </ul>
     )
    })
   }


  </div>
 )
}
