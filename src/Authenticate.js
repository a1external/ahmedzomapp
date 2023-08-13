import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import ListingDisplay from './ListingPages/ListingDisplay';
import Details from './Details/Details';
import PlaceOrder from './orders/PlaceOrder';
import Login from './login/Login';
import Register from './login/Register';

const Authenticate = () => {
  return (
    <div className="App">
      
          <Route path="/" element={<Homepage />} />
          <Route path="/listing/:mealid" element={<ListingDisplay />} />
          <Route exact path="/Details/rest_id/:restaurantId" element={<Details />} />
          <Route exact path='/placeOrder/:restName' element={<PlaceOrder />} />
          <Route exact path="/login" Component={Login } />
          <Route exact path='/register' element={<Register />} />
            
    </div>
  );
}

export default Authenticate;
