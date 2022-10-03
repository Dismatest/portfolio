import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src="https://images.unsplash.com/photo-1664230388413-5e90d32b8d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" className='about-image' />
            </div>
        </div>
        <div className="about-right">
            <div className="about-title">About Me</div>
            <p className="about-sub">
                I have developed various web applications using javascript and python. Also I am aspiring to become a data scientist.
            </p>
            <p className="about-desc">
                Learning web application development was not easy for me when I first started. But now I count myself lucky because I have put dedication in learning
                new technologies such as ReactJs, MongoDB, NodeJS, MySQL, Python, Django and Python Data Analysis libraries.
            </p>
            <div className="resume">
                <a href="https://drive.google.com/file/d/1zm82RteU0lC_AtlvdQxEwT3Z6h9Sfqx_/view?usp=sharing" target="_blank" rel="noreferrer">
                <img src="https://cdn0.iconfinder.com/data/icons/teamwork-8/64/x-23-512.png" alt="" className="about-resume" />
                </a>
                <div className="resume-text">
                    <h4 className="resume-title">
                        View my Infographic Resume Online
                    </h4>
                    <p className="resume-desc">
                        You can view my online resume which highlights my work experience and both soft and technical skills and
                        which are vital for the first-changing job market.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About