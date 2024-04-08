import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
    return (
        <div className='d-flex justify-content-around align-items-center w-100'>
            <div><h1>Contact Me</h1>
            </div>
            <div className='contactright'>
                <h3> <FiPhoneCall /> <span style={{ color: '#73E5F7' }}>+91  8708552842</span></h3>


                <MdEmail /><span className='emailtext' style={{ color: '#73E5F7' }}> vishalsaini27362@gmail.com</span>
                <FaLinkedin /> <span className='emailtext' style={{ color: '#73E5F7' }}>linkedin.com/in/vishal-saini-70aa9627a</span>
            </div>

        </div>

    )
}

export default Contact