import React from 'react'
import Socials from './Socials'


function Footer() {
 const style = {
  footer: {
   backgroundColor: '#cfcfcf',
   height: '15rem',
   display: 'flex',
   justifyContent: 'space-between',
   flexDirection: 'column',
   alignItems: 'center',
  },

  copyright: {
   fontSize: '15px',
   fontSize: '2vh',
   fontWeight: 'bold',
   letterSpacing: '1px',
  },
 }

 return (
  <div style={style.footer}>
   <Socials />

   <div style={style.copyright}>
    ©{' '}{new Date().getFullYear()}{' '}Ebekendy Hotel Ltd. All Rights Reserved
   </div>
  </div>
 )
}

export default Footer
