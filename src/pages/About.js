import React from 'react'
import Banner from '../components/Banner'
import Hero from "../components/Hero"
import { Link } from "react-router-dom"
import Title from '../components/Title'
import { FaBeer } from "react-icons/fa"



export default function About() {

 const style = {
  container: {
   padding: '5rem 0',
   width: '80vw',
   margin: '0 auto',
  },

  columns: {
   backgroundColor: '#cfcfcf',
   textAlign: 'center'
  },

  center: {
   width: '90vw',
   margin: '0 auto',
   display: 'grid',
   gridTemplateColumns: 'repeat(auto- fit, minmax(255px, 1fr))',
   gridRowGap: '2rem',
   gridColumnGap: '50px',
  },

  span: {
   display: 'inline-block',
   color: '#af9a7d',
   fontSize: '2.5rem',
   marginBottom: '1.5rem',
  },
  h6: {
   letterSpacing: '3px',
  },
  p: {
   width: '80%',
   margin: '0 auto',
  },
 }

 const abouts = {
  aboutInfo: [
   {
    icon: <FaBeer />,
    title: "History",
    info: 'I am history ',

   },

   {
    icon: <FaBeer />,
    title: "Mission",
    info: 'I am mission',
   },

   {
    icon: <FaBeer />,
    title: "Purpose",
    info: 'I am purpose',
   }

  ]
 }

 return (
  <div>
   <Hero hero="roomsHero">
    <Banner title="About">
     <Link to="/" className="btn-primary">
      Return home
     </Link>
    </Banner>
   </Hero>

   <section className="services">
    <Title title="Our values" />
    <div className="services-center">

     {
      abouts.aboutInfo.map((element, index) => {
       return (
        <article key={index} className="service">
         <span>{element.icon}</span>
         <h6>{element.title}</h6>
         <p>{element.info}</p>
        </article>)
      })
     }
    </div>
   </section>
   {/* History */}

   {/* Mission */}

   {/* Purpose */}

   <div style={style.container}>
    <Title title="description" />

    <p>Ebekendy is a grand hotel located at plot 70, Graceland ,
     tambia extension Phase 2 GRA, Portharcourt, Rivers state.
     This modern hotel has rooms classified as standard, standard superior,
     cityview, mini suites and main suites, they all provide access to the free WiFi.
    </p>

    <p>All rooms are tiled and furnished with an air conditioners,
     refrigerators, kingsized , bedside drawers, a dressing table
     with mirrors attached, chairs, and an intercom for easy
     between guests and staff. The en-suite have water heating
     and cooling installed, all necessary toiletries are provided.
     A sofa is provided for the mini and main suites.
     There's for convenient movement in and out of .</p>

    <p>The classic at Ebekendy hotel offers of local and
     intercontinental prepared by the very efficient staff
     who offer outdoor catering services on request.
     There is a standby noiseless generator which ensures
     that supply is constant. At the on-site bar and the VIP,
     varieties of drinks and cocktails are available.</p>

    <p>With a very large compound area, such as parties and
     traditional can be conducted within the outdoor space of
     Ebekendy hotel while still maintaining its adequate
     parking space. hall with projectors and a good sound
     can be booked for corporate .</p>
   </div>
  </div>
 )
}
