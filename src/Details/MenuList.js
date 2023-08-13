// import React, { useState } from 'react';
// import { useGetAllDetailsmenuDatabyidQuery } from '../Services/apiConfig';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setSelectedItems} from './MenuListSlice'
// export const MenuList = ({ restaurantId, details }) => {
//   // Fetch data using the API query
//   const { data, isLoading, isError } = useGetAllDetailsmenuDatabyidQuery(restaurantId);
//   const navigate = useNavigate()
//   console.log("i am fecting", details)
//   // State to keep track of selected menu items
//   const [selectItems, setSelectItems] = useState([]);
//   const dispatch = useDispatch();


//   const handleSelectItem = (item) => {
//     const itemIndex = selectItems.findIndex((selectItem) => selectItem.menu_id === item.menu_id);

//     if (itemIndex === -1) {
//       // If the item is not already selected, add it to the selectedItems
//       setSelectItems((prevSelected) => [...prevSelected, item]);
//     } else {
//       // If the item is already selected, remove it from the selectedItems
//       setSelectItems((prevSelected) => prevSelected.filter((_, index) => index !== itemIndex));
//     }


//   };


//   // Function to handle item removal
//   // const handleRemoveItem = (itemId) => {
//   //   setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== itemId));
//   // };

//   const handleRemoveItem = (itemId) => {
//     setSelectItems((prevSelected) => prevSelected.filter((selectedItem) => selectItem.menu_id !== itemId));
//   };


//   // Handle loading state
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (isError) {
//     return <div>Error occurred while fetching data.</div>;
//   }
//   const handleproceed = (restaurantName) => {
//     navigate(`/placeOrder/${restaurantName}`)
//     dispatch(setSelectedItems(selectedItems))
//   }
//   // Data is available and not loading or error
//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.menu_id}>
//           <p>{item.menu_id}</p>
//           <img src={item.menu_image} alt='' width="120px" />
//           <p>{item.menu_name}</p>
//           <p> Rs{item.menu_price}</p>
//           {/* Select Button */}
//           <button onClick={() => handleSelectItem(item)}>Select</button>
//           {/* Remove Button */}
//           <button onClick={() => handleRemoveItem(item.menu_id)}>Remove</button>
//         </div>
//       ))}

//       {details.map((object, index) => (
//         <div key={index}>
//           <button type="button" class="btn btn-danger">Back</button>
//           <button onClick={() => handleproceed(object.restaurant_name)} type="button" class="btn btn-success">Proceed</button>
//         </div>
//       ))}


//       {selectItems.length > 0 && (
//         <div>
//           <h2>Selected Items:</h2>
//           <ul>
//             {selectItems.map((item) => (
//               <li key={item.id}>
//                 ID: {item.menu_id}, Name: {item.menu_name}, Price: {item.menu_price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
     
//     </div>
     
//   );
// };

import React, { useState } from 'react';
import { useGetAllDetailsmenuDatabyidQuery } from '../Services/apiConfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSelectedItems } from './MenuListSlice';

export const MenuList = ({ restaurantId, details, setpro }) => {
  // Fetch data using the API query
  const { data, isLoading, isError } = useGetAllDetailsmenuDatabyidQuery(restaurantId);
  const navigate = useNavigate();
  console.log("i am fetching", details);

  // State to keep track of selected menu items
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();

  const handleSelectItem = (item) => {
    const itemIndex = selectedItems.findIndex((selectedItem) => selectedItem.menu_id === item.menu_id);

    if (itemIndex === -1) {
      // If the item is not already selected, add it to the selectedItems
      setSelectedItems((prevSelected) => [...prevSelected, item]);
    } //else {
    //   // If the item is already selected, remove it from the selectedItems
    //   setSelectedItems((prevSelected) => prevSelected.filter((_, index) => index !== itemIndex));
    // }
    setpro(selectedItems)
  };

  const handleRemoveItem = (itemId) => {
    setSelectedItems((prevSelected) => prevSelected.filter((selectedItem) => selectedItem.menu_id !== itemId));
  };

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const handleproceed = (restaurantName) => {
    navigate(`/placeOrder/${restaurantName}`);
    dispatch(updateSelectedItems(selectedItems));
  };

  // Data is available and not loading or error
  return (
    <div>
      {/* Rendering menu items */}
      {data.map((item) => (
        <div key={item.menu_id}>
          <p>{item.menu_id}</p>
          <img src={item.menu_image} alt='' width="120px" />
          <p>{item.menu_name}</p>
          <p> Rs{item.menu_price}</p>
          {/* Select Button */}
          <button onClick={() => handleSelectItem(item)}>Select</button>
          {/* Remove Button */}
          <button onClick={() => handleRemoveItem(item.menu_id)}>Remove</button>
        </div>
      ))}

      {/* Rendering details */}
      {details.map((object, index) => (
        <div key={index}>
          <button type="button" className="btn btn-danger">Back</button>
          <button onClick={() => handleproceed(object.restaurant_name)} type="button" className="btn btn-success">Proceed</button>
        </div>
      ))}

      {selectedItems.length > 0 && (
        <div>
          <h2>Selected Items:</h2>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.menu_id}>
                ID: {item.menu_id}, Name: {item.menu_name}, Price: {item.menu_price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

