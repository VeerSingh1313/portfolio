import React, { useState } from 'react';
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoSkype } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import vishal from './image/vishal.jpg'
import { ReactTyped } from 'react-typed';
import ComposeEmail from './open-mail';
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
                            strings={[" I,m Vishal <span className='fh1'>Saini</span>", "  <span className='fh1 fp1'>I am Frontend Developer </span> "]}
                            typeSpeed={40}
                            backSpeed={10}
                            loop
                        />
                        {/* I,m Vishal <span className='fh1'>Saini</span> */}
                    </h1>

                    <div className='icons'><i>< IoMail /></i><i><FaLinkedin /></i>
                        <i><AiFillInstagram /></i> <i><IoLogoSkype /></i><i><FaSquareGithub /></i> </div>
                </div>
                <div className="right">
                    <img src={vishal} />
                </div>

            </div>
        </>
    );
}

export default Home;
