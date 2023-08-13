import React from "react";
import "./PopularLocalities.css"; 
const PopularLocalities = () => {
    return (
        <>
         <div className="popular-description">
                <p>Popular localities in and around Pune</p>
        </div>
            <div className='col-lg-12 category-column'>
                <div className="row d-flex justify-content-center" >
                    <div className='col-lg-10 d-flex justify-content-around'>
                        <div className="card popular-box">
                            <h4 className="popular-content">Banner</h4>
                        </div>
                        <div className="card popular-box">
                            <h4 className="popular-content">Banner</h4>
                        </div>
                        <div className="card popular-box">
                            <h4 className="popular-content">Banner</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PopularLocalities;