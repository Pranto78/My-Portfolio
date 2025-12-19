import React from 'react';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import AboutMe from '../../components/AboutMe/AboutMe';
import Education from '../../components/Education/Education';
import MyProjects from '../../components/MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <Education></Education>
        </div>
    );
};

export default Home;