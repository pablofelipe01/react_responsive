import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css'
function Footer(props) {
    return (
        <div className='footer-container'>
           <section className="footer-subscription">
               <p className="footer-subscription-heading">
                   Join the Horses newsletter
               </p>

               <p className="footer-subscription-text">
                   You can unsubscribe at any time
               </p>
               <div className="input-areas">
                   <form>
                       <input type="email" name="email" placeholder="Your email" className="footer-input" />
                   </form>
                       <Button buttonStyle='btn--outline'>Subscribe</Button>
               </div>
               </section> 
               <div className="footer-links">
                   <div className="footer-links-wrapper">
                       <div className="footer-links-items">
                           <h2>About Us</h2>
                           <Link to='/sign-up'>How it works</Link>
                           <Link to='/'>Testimonials</Link>
                       </div>
                   </div>
               </div>
               <section className='social-media'>
                   <div className="social-media-wrap">
                       <div className="footer-logo">
                           <Link to='/' className='social-logo'>
                               HORSES <i className="fas fa-chess-knight"/>
                           </Link>
                       </div>
                       <small className="website-rights"></small>
                       <div className="social-icons">
                           <Link className='social-icon-link facebook'
                           to='/'
                           target='_blank'
                           aria-label='Facebook'
                           >
                               <i className="fab fa-facebook-f"></i>
                           </Link>
                           <Link className='social-icon-link instagram'
                           to='/'
                           target='_blank'
                           aria-label='Instagram'
                           >
                               <i className="fab fa-instagram"></i>
                           </Link>
                       </div>
                   </div>


               </section>
        </div>
    );
}

export default Footer;