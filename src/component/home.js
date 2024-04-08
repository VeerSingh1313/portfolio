import React, { useState } from 'react';
// import { IoMail } from "react-icons/io5";
// import { FaLinkedin } from "react-icons/fa6";
// import { AiFillInstagram } from "react-icons/ai";
// import { IoLogoSkype } from "react-icons/io5";
// import { FaSquareGithub } from "react-icons/fa6";
import vishal from './image/vishal.jpg'
import { ReactTyped } from 'react-typed';
function Home() {


    return (
        <>
            <div className='mainHome'>
                <div className='left'>
                    <h1 className='fh1'>
                        Hi There,
                    </h1>
                    <h1 className='fh2'>
                        <ReactTyped
                            strings={[" I,m Vishal <span className='fh1'>Saini</span>", "  <span className='fh1 fp1'>I,m Frontend Developer </span> "]}
                            typeSpeed={40}
                            backSpeed={10}
                            loop
                        />
                        {/* I,m Vishal <span className='fh1'>Saini</span> */}
                    </h1>
                    <p className='fp1'>I'm a passionate React web developer with over a year of experience in crafting intuitive and dynamic web applications. I thrive on turning innovative ideas into robust, user-friendly digital experiences. My journey in the field of web development began with a spark of curiosity, and since then, I've been on a constant quest to explore new technologies and methodologies that empower me to build cutting-edge solutions."</p>
                    {/* <div className='icons'><i>< IoMail /></i><i><FaLinkedin /></i>
                        <i><AiFillInstagram /></i> <i><IoLogoSkype /></i><i><FaSquareGithub /></i> </div> */}
                </div>
                <div className="right">
                    <img src={vishal} />
                </div>
                <div class='air air1'></div>
                <div class='air air2'></div>
                <div class='air air3'></div>
                <div class='air air4'></div>
            </div>
        </>
    );
}

export default Home;
