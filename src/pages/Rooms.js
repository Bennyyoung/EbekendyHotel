import React from 'react'
import Banner from '../components/Banner'
import Hero from "../components/Hero"
import { Link } from "react-router-dom" 
import RoomContainer from "../components/RoomContainer";

export default function Rooms() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    Return home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>
    )
}

