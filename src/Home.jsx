import React from 'react';
import About from './About';
import Ask from './Ask';
import Contact from './Contact';
import Deliver from './Deliver';
import Hero from "./Hero"
import Ourmission from "./OurMission"
import Service from './Service';
import Team from './Team';
import Footer from "./Footer"
import  Grow  from './Grow';
import Earn from './Earn';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Ourmission></Ourmission>
            <About></About>
            <Team></Team>
            <Deliver></Deliver>
            <Ask></Ask>
            <Service></Service>
            <Grow></Grow>
            <Earn></Earn>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default Home;