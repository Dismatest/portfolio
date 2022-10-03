import {React, useRef, useContext} from 'react'
import './Contact.css'
import { ThemeContext } from '../../context'

const Contact = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const formRef = useRef()
    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className="contact">
        <div className="contact-back"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <p className="c-title">Contact Me Though the Links Bellow</p>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src="https://pngimage.net/wp-content/uploads/2018/06/round-icons-png-8.png" alt="" className='c-icon'/>
                        +254 727750213
                    </div>
                    <div className="c-info-item">
                        <img src="https://th.bing.com/th/id/R.dafcc7b680b3868c4ccdf855145c5f8c?rik=o%2b12SC5EQNtguw&pid=ImgRaw&r=0" alt="" className='c-icon'/>
                        billclintonogot88@gmail.com
                    </div>
                    <div className="c-info-item">
                        <a href="https://github.com/Dismatest?tab=repositories/" target="_blank" rel="noreferrer">
                        <img src="https://th.bing.com/th/id/OIP.yWNibBRepmC6fO7mZnicCgHaHa?pid=ImgDet&rs=1" alt="" className='c-icon'/>
                        </a>
                        Github Account
                        </div>
                        <div className="c-info-item">
                        <a href="https://linkedin.com/in/ogot-clinton-31363618a/" target="_blank" rel="noreferrer">
                        <img src="https://th.bing.com/th/id/R.a2e4a0cdc1c663d505f3c277283b5764?rik=eaBnPzqbL%2bwNXg&riu=http%3a%2f%2fblogs.sussex.ac.uk%2ftel%2ffiles%2f2017%2f05%2fLinkedIn-Logo.png&ehk=ENy1jW89HVoLcVB0taPoMbWTyLAi7I%2bi1OY4AVPGhcQ%3d&risl=&pid=ImgRaw&r=0" alt="" className='c-icon'/>
                        </a>
                        LinkedIn Profile
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-dec">
                    Do you need a developer for collaboration or for your project? You can reach out to me through the
                    email or call. Contact me through the contact form bellow. Thank you. Happy coding!
                </p>
                <form ref={formRef} onSubmit={handleOnSubmit}>
                    <input style={{backgroundColor:darkMode && '#333'}} type="text" placeholder="Your Name" name="to_name"/>
                    <input style={{backgroundColor:darkMode && '#333'}} type="text" placeholder="Email Subject" name="from_name"/>
                    <input style={{backgroundColor:darkMode && '#333'}} type="text" placeholder="Your Email Address" name="from_name"/>
                    <textarea rows="5" placeholder="Type Your Message Here" name="message" style={{backgroundColor:darkMode && '#333'}}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact