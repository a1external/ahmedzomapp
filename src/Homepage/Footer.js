import React from 'react';
import "./Footer.css";
import FooterDrop from './FooterDrop';
const Footer = () => {
    console.log("hello")
    return (
        <>
       
       <div className="row d-flex justify-content-center" >
              <div className='col-lg-10 footer-content'>
                <div> <h1>zomato</h1></div>
           
            <section>
                <FooterDrop />
            </section>
            </div>
            </div>
            <div className='col-lg-12 collection-column'>
                <div className="row d-flex justify-content-center" >
                    <div className='col-lg-10 footadj'>
                        <footer >
                            <h5>Footer Heading</h5>
                            <ul className='footer-alid'>

                                <li>
                                    <a href='#' > Who We Are</a>
                                </li>
                                <li>
                                    <a href='#' >Blog</a>
                                </li>
                                <li>
                                    <a href='#' >Work With Us</a>
                                </li>
                                <li>
                                    <a href='#' >Work With Us</a>
                                </li>
                                <li>
                                    <a href='#' >Investor Relations</a>
                                </li>
                                <li>
                                    <a href='#' >Report Fraud</a>
                                </li>
                                <li>
                                    <a href='#' >Contact Us</a>
                                </li>
                            </ul>
                        </footer>
                        <footer >
                            <h5>Footer Heading</h5>
                            <ul className='footer-alid'>

                                <li>
                                    <a href='#' > Zomato</a>
                                </li>
                                <li>
                                    <a href='#' >Blinkit</a>
                                </li>
                                <li>
                                    <a href='#' >Feeding India</a>
                                </li>
                                <li>
                                    <a href='#' >Hyperpure</a>
                                </li>
                                <li>
                                    <a href='#' >Zomaland</a>
                                </li>
                            </ul>
                        </footer>
                        <footer >
                            <h5>Footer Heading</h5>
                            <ul className='footer-alid'>

                                <li>
                                    <a href='#' >  Partner With Us</a>
                                </li>
                                <li>
                                    <a href='#' >Apps For You</a>
                                </li>
                                <br />
                                <h5>FOR ENTERPRISES</h5>
                                <li>
                                    <a href='#' >Zomato For Enterprise</a>
                                </li>
                            </ul>
                        </footer>
                        <footer >
                            <h5>LEARN MORE</h5>
                            <ul className='footer-alid'>

                                <li>
                                    <a href='#' >Privacy</a>
                                </li>
                                <li>
                                    <a href='#' >Security</a>
                                </li>
                                <li>
                                    <a href='#' >Terms</a>
                                </li>
                                <li>
                                    <a href='#' >Sitemap</a>
                                </li>
                            </ul>
                        </footer>
                        <footer >
                            <h5>Social</h5>
                            <ul className='footer-alid'>

                                <li>
                                    <a href='#' >Privacy</a>
                                </li>
                                <li>
                                    <a href='#' >Security</a>
                                </li>
                                <li>
                                <div className="download-img">
                               <a href="#"> <img src="GooglePay.webp" className="download-gp" alt="..." /></a>
                               </div>
                                </li><br/>
                                <li>
                                <div className="download-img">
                               <a href="#"> <img src="Appstore.webp" className="download-gp" alt="..." /></a>
                            </div>
                                </li>
                            </ul>
                        </footer>
                    </div></div></div>
        </>
    )
}

export default Footer