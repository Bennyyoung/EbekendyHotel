import React from 'react'
import Banner from '../components/Banner'
import Hero from "../components/Hero"
import Title from "../components/Title";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useGoogleMaps } from "react-hook-google-maps";
import { Link } from "react-router-dom"



export default function Contact() {
 const { ref, map, google } = useGoogleMaps(
  'AIzaSyDMrO6PYB6Hi3Ke6vhE3KYLSYuhHegtp2Q',
  {
   center: { lat: 0, lng: 0 },
   zoom: 3,
  }
 )

 const style = {
  container: {
   display: 'flex',
   // backgroundColor: 'red',
   height: '500px',
  }
  ,
  map: {
   width: '50%',
   // backgroundColor: 'grey'
  },

  form: {
   width: '50%',
   // backgroundColor: 'green'
  }
 }

 return (
  <>
   <Hero hero="roomsHero">
    <Banner title="Contact">
     <p>We reply in 24 hrs</p>
     <Link to="/" className="btn-primary">
      Return home
     </Link>
    </Banner>
   </Hero>

   <Title title="Reach Us" />



   <div style={style.container} className="container">

    {/* {Google Map} */}
    <div style={style.map}>
     {/* <Map
															google={google}
															zoom={8}
															style={mapStyles}
															initialCenter={{ lat: 47.444, lng: -122.176 }}
													>
															{displayMarkers()}
													</Map> */}

     <div ref={ref} style={{ width: '100%', height: '100%', margin: '0 -45px 0 -15px' }} />


    </div>

    {/* {Form} */}
    <div style={style.form}>
     <form>
      <div className="row">

       <div className="col-md-12">
        <div className="form-group">
         <input type="text" placeholder="Name" className="form-control" />
        </div>


       </div>
       <div className="col-md-12">
        <div className="form-group">
         <input type="text" placeholder="Email" className="form-control" />
        </div>


       </div>
       <div className="col-md-12">
        <div className="form-group">
         <input type="number" placeholder="Phone number" className="form-control" />
        </div>


       </div>
       <div className="col-md-12">
        <div className="form-group">
         <textarea placeholder="Your message" rows="4" className="form-control"></textarea>
        </div>

        <div className="submit-button text-right">
         <button className="btn hover" id="submit" type="submit">
          Send Message
         </button>
         <div id='mgsSubmit' className="h3 text-center" hidden></div>
         <div className="clearfix"></div>
        </div>
       </div>

      </div>
     </form>
    </div>

   </div>

  </>
 )
}
