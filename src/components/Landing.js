import React from "react";
import { Link } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri"
import { GiArchiveRegister } from "react-icons/gi";
import './landing.css';





const Landing = () => {
    return (
        <body className="w3-black">
        <nav className="w3-sidebar w3-bar-block w3-large w3-hide-small w3-center">
          <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155" style={{width:'100%'}} />
          <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
            <i className="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
          </a>
          <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-black">
            <i className="fa fa-user w3-xxlarge"></i>
            <p>ABOUT</p>
          </a>
          
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-black">
            <i className="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
          </a>
          <Link to="/login" className="w3-bar-item w3-button w3-padding-large w3-black">
            <RiLoginBoxFill size={45} />
            <p>LOGIN</p>
          </Link>
          <Link to="/register" className="w3-bar-item w3-button w3-padding-large w3-black">
          <GiArchiveRegister size={45} />
            <p>REGISTER</p>
          </Link>
        </nav>
        
        <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <a href="#" className="w3-bar-item w3-button" style={{width:'25% !important'}}>HOME</a>
            <a href="#about" className="w3-bar-item w3-button" style={{width:'25% !important'}}>ABOUT</a>
            <a href="#contact" className="w3-bar-item w3-button" style={{width:'25% !impohrrtant'}}>CONTACT</a>
            <Link to="/login" className="w3-bar-item w3-button" style={{width:'25% !important'}}>LOGIN</Link>
            <Link to="/register" className="w3-bar-item w3-button" style={{width:'25% !important'}}>REGISTER</Link>
          </div>
        </div>
        
        <div className="w3-padding-large" id="main">
          <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
            <h1 className="w3-jumbo"><span className="w3-hide-small">Anywhere Fitness</span> </h1>
            
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f" alt="gym" className="w3-image" width="992" height="1108"/>
          </header>
        </div>
        
          
          <div className="w3-content w3-justify w3-text-grey w3-padding-64  w3-center" id="about" >
            <h2 className="w3-text-light-grey">Our Mission</h2>
            <hr style={{width:'100%'}} className="w3-opacity " />
            <p> These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors and clients need an easy way to take the awkwardness out of attendance taking and client payment processing. While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. </p>
            
            <Link to="/register" className="w3-button w3-white w3-padding-large w3-hover-black">REGISTER</Link>
                  
        
             
            
            
            <h3 className="w3-padding-24 w3-text-light-grey">Our Reputation</h3>  
            <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8" alt="Avatar" className="w3-circle w3-margin-right" style={{width:'80px'}} />
            <p><span className="w3-large w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
            <p>They helped me find the right trainor for me</p><br />
            
            <img src="https://images.unsplash.com/photo-1627393100177-b4297e79a5be" alt="Avatar" className="w3-circle w3-margin-right" style={{width:'80px'}} />
            <p><span className="w3-large w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
            <p>No one is better than anywhere fitness.</p>
          
        
          
          <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
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
          
            
          <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-snapchat w3-hover-opacity"></i>
            <i className="fa fa-pinterest-p w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
            <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
          
          </footer>
        
        
            </div>
        
        </body>
    )
}

export default Landing