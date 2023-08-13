import React from "react";
import Header from "./Header";
import HomeTitle from "./HomeTitle";
import HomeSubTitle from "./HomeSubTitle";
import './Homepage.css'
import Category from "./Category";
import Collection from "./Collection";
import PopularLocalities from "./PopularLocalities";
import Zapp from "./Zapp";
import Explore from "./Explore";
import Footer from "./Footer";
// import Details from "../Details/Details";
const Homepage = () => {
    return (
        <div className="container-fluid">
            <div className="row zomatoheader" >
                <Header />  
                <HomeTitle />
                <HomeSubTitle />
            </div>
            <div className="row homepage-body">
                <Category />
            </div>
            <div className="row Collection-body">
                <Collection />
            </div>
            <div className="row popular-body">
                <PopularLocalities />
            </div>
            <div className="row explore-body">
                <Zapp />
            </div>
            <div className="row  accord-123" style={{border:"1px solid black"}}>
                <Explore /><br/>
                <Footer />
               
            </div>
            <div className="row foo-body bg-light">
                <Footer />
            </div>


        </div>
    )
}
export default Homepage;