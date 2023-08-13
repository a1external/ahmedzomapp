// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Homepage from './Homepage/Homepage';
// import ListingDisplay from './ListingPages/ListingDisplay';
// import Details from './Details/Details';
// import PlaceOrder from './orders/PlaceOrder';
// import Login from './login/Login';
// import Register from './login/Register';

// function App() {

//   return (
//     <div className="App">

//         <Routes>
//           <Route path="/" element={<Homepage />}/>
//           <Route path="/listing/:mealid" element={<ListingDisplay />} />
//           <Route exact path="/Details/rest_id/:restaurantId" element={<Details />} />
//           <Route exact path='/placeOrder/:restName' element={<PlaceOrder />} />
//           <Route exact path="/login" Component={Login } />
//           <Route exact path='/register' element={<Register />} />
//         </Routes>

//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Homepage from './Homepage/Homepage';
import ListingDisplay from './ListingPages/ListingDisplay';
import Details from './Details/Details';
import PlaceOrder from './orders/PlaceOrder';
import Login from './login/Login';
import Register from './login/Register';
import { useNavigate } from 'react-router-dom';

function App() {
  const loginStatus = sessionStorage.getItem('loginStatus');
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus === 'loggedIn') {
      navigate('/home');
    }
  }, [loginStatus]);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/listing/:mealid" element={<ListingDisplay />} />
        <Route exact path="/Details/rest_id/:restaurantId" element={<Details />} />
        <Route exact path='/placeOrder/:restName' element={<PlaceOrder />} />
        <Route exact path="/login" Component={Login} />
        <Route exact path='/register' element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
