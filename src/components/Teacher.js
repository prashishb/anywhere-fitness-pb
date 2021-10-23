import React from "react";
import { Link } from "react-router-dom";
import { RiCalendarFill } from "react-icons/ri"
import { GiArchiveRegister } from "react-icons/gi";
import './teacher.css';
import './landing.css';


const Teacher = () =>{
    return(
        <body className="w3-black">
            <nav className="w3-sidebar w3-bar-block w3-large w3-hide-small w3-center">
              <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155"       style={{width:'100%'}} />
              <Link to='/' className="w3-bar-item w3-button w3-padding-large w3-black">
                <i className="fa fa-home w3-xxlarge"></i>
                <p>HOME</p>
              </Link>
              <Link  to='/makeaclass'className="w3-bar-item w3-button w3-padding-large        w3-black">
              <RiCalendarFill size={45} />
                <p>MAKE A CLASS</p>
              </Link>

              <a href="#contact" className="w3-bar-item w3-button w3-padding-large      w3-black">
                <i className="fa fa-envelope w3-xxlarge"></i>
                <p>CONTACT</p>
              </a>
              
            </nav>
    
            <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
              <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center         w3-small">
                <Link to='/' className="w3-bar-item w3-button" style={{width:'25%        !important'}}>HOME</Link>
                <a href="#about" className="w3-bar-item w3-button" style={{width:'25%       !important'}}>MAKE CLASS</a>
                <a href="#contact" className="w3-bar-item w3-button" style={{width:'25%         !impohrrtant'}}>CONTACT</a>
                
              </div>
            </div>
    
            <div className="w3-padding-large" id="main">
              <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
                <h1 className="w3-jumbo"><span className="w3-hide-small">Anywhere  Fitness</span> </h1>

                <img src="https://images.unsplash.com/photo-1554470166-20d3f466089b"         alt="trainer" className="w3-image" width="992" height="1108"/>
              </header>
            </div>

            <div className="w3-content w3-justify w3-text-grey w3-padding-64  w3-center" id="about" >
            <h2 className="w3-text-light-grey">Your fitness </h2>
            <hr style={{width:'100%'}} className="w3-opacity " />
            <p> Take attendance, request and process payments, alert clients of cancellations or location changes and so much more. This is your schedule! This is your fitness! Let's make the experience better! </p>
            </div>

            <div className="w3-content w3-justify w3-text-grey w3-padding-64  w3-center" id="about" >
            <h2 className="w3-text-light-grey">Your Classes </h2>
            <hr style={{width:'100%'}} className="w3-opacity " />
            <p> </p>
            </div>

            


            <div className="w3-padding-64 w3-content w3-text-grey w3-center" id="contact">
            <h2 className="w3-text-light-grey">Contact Us</h2>
            <hr style={{width:'100%'}} className="w3-opacity" />
        
            <div className="w3-section">
              <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Tennessee, US</p>
              <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: (000)-000-0000</p>
              <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: email@mail.com</p>
            </div><br />
            <p>Let's get in touch. Send us a message:</p>
        
            <form className='w3-padding-64 w3-content' action="/action_page.php" target="_blank" style={{width:'50%'}}>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject" /></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" /></p>
              <p>
                <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                  <i className="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
              </p>
            </form>
          
          </div>







      
            <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge w3-center">
                <i className="fa fa-facebook-official w3-hover-opacity"></i>
                <i className="fa fa-instagram w3-hover-opacity"></i>
                <i className="fa fa-snapchat w3-hover-opacity"></i>
                <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                <i className="fa fa-twitter w3-hover-opacity"></i>
                <i className="fa fa-linkedin w3-hover-opacity"></i>
                
        
            </footer>
    
    
    
    
    </body>)
}

export default Teacher