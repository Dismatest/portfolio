import React from 'react'
import './Introduction.css'
import me from '../../images/ogot.jpeg'

const Introduction = () => {
  return (
    <div className='intro'>
        <div className="intro-left">
            <div className="intro-left-wrapper">
            <h2 className="intro-in">Hello, my name is,</h2>
            <h1 className="intro-name">Ogot Clinton</h1>
            <div className="intro-title">
                <div className="intro-title-wrapper">
                    <div className="intro-title-item">Web Developer</div>
                    <div className="intro-title-item">UI/UX Designer</div>
                    <div className="intro-title-item">Data Analyst</div>
                    <div className="intro-title-item">Network Engineer</div>
                    <div className="intro-title-item">DevOps Engineer</div>
                </div>
            </div>
            <div className="intro-desc">
                    I design and develop web applications using React, MongoDB, Express
                    NodeJs and Python. Also I do data analysis with python. On the other hand,
                    am proficient with network troubleshooting and configuring of CISCO network devices.
                </div>
            </div>
        </div>
        <div className="intro-right">
            <div className="intro-bg">
            <img src={me} alt="" className="intro-img" />
            </div>
            
        </div>
        </div>
  )
}

export default Introduction