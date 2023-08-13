import React from "react";
import './Zapp.css'
const Zapp = () => {
    return (
        <>
            <div className='col-lg-12 ' >
                <div className="row d-flex justify-content-center" >
                    <div className='col-lg-10 d-flex justify-content-center' style={{marginTop:'160px'}}>

                        <div>
                            <img src="Appimage.avif" className="appimage" alt="..." />
                        </div>

                        <div className="appdescription">

                            <h1>Get the Zomato app</h1>
                            <p style={{ marginTop: "20px" }}>We will send you a link, open it on your phone to download <br/>the app</p>

                            <div className="phonemail">
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Email</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">phone</label>
                                </div>
                            </div>

                            <div>
                                <input type="text" className="textenter" />
                                <button className="sharelink">Share App Link</button>
                            </div>

                            <p className="app-p">Download app from</p>

                            <div className="download-img">
                               <a href="#"> <img src="GooglePay.webp" className="download-gp" alt="..." /></a>
                               <a href="#"> <img src="Appstore.webp" className="download-gp" alt="..." /></a>
                            </div>

                        </div>
                    </div>



                </div>


            </div>

        </>
    )
}
export default Zapp;