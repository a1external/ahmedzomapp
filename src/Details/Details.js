import { MenuList } from './MenuList';
import { useParams } from 'react-router-dom';
import { useGetAllDetailsDatabyidQuery } from "../Services/apiConfig";
import { useState, useEffect } from 'react';
import Header from '../Homepage/Header';
const Details = () => {
  const { restaurantId } = useParams();
  const { data, isLoading } = useGetAllDetailsDatabyidQuery(restaurantId);
  const [details, setDetails] = useState([]);
   const [pro, setpro] = useState()
  // Update the 'details' state when 'data' changes
  useEffect(() => {
    if (data) {
      setDetails(data);
    }
  }, [data]);

  console.log("bhai i am here waitinh",pro)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("happy ending", details)
  return (
    <>
          <div>
            <Header/>
        {details.map((object, index) => (
          <div key={index}>
            <div>
              <img src={object.restaurant_thumb} alt="kjlj" width="300px" height="400px" />
            </div>
            <p>{object.restaurant_name}</p>
            <span>231 Customers Say Average</span>
            <del>Old Price: Rs.1000</del>
            <h3>New Price: {object.cost}</h3>
            {/* <button type="button" class="btn btn-danger">Back</button> */}
            {/* <button onClick={() => handleproceed(object.restaurant_name)} type="button" class="btn btn-success">Proceed</button> */}
          </div>
        ))}
      </div>




      <div style={{ display: 'flex' }}>
        <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="https:i.ibb.co/wJvrhYg/veg.png" alt="just" width="130px" height="130px" />
          <img src="https:i.ibb.co/mD3jpgc/sentizied.png" alt='just img2' width="130px" height="130px" />
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>


      </div>

      <div>
        {/* <MenuList restaurantId={restaurantId} setext = {setext} /> */}
        <MenuList restaurantId={restaurantId} details={details} setpro={setpro} />
      </div>
    </>
  );
};

export default Details;