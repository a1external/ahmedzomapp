import React from 'react'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useUpdateDataMutation } from '../Services/apiConfig1';
import Header from '../Homepage/Header';
import { v4 as uuidv4 } from 'uuid';
const PlaceOrder = () => {
  const selectedItems = useSelector((state) => state.menuList);
  const [update123, { isloading, iserror }] = useUpdateDataMutation()
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderid, setorderid] = useState()
  const newUuid = uuidv4();
  const initialFormdata = {
    name: "",
    phone: "",
    email: "",
    address: "",

  };
  const [formdata, setFormdata] = useState(initialFormdata)
  
  useEffect(() => {
    const newTotalPrice = selectedItems.reduce((total, item) => total + parseFloat(item.menu_price), 0);
    setTotalPrice(newTotalPrice);
    console.log(selectedItems, "bhai i am here");
     }, [selectedItems]);


   useEffect(() => { 
    setorderid(newUuid);
  }, [selectedItems]);

  
  if (selectedItems.length === 0) {
    return <div>No items selected.</div>;
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormdata((prevstate) => ({
      ...prevstate, [name]: value
    }))}

       

   const submitorder = () => {
   
    update123({...formdata,totalPrice,orderid});
  };
  return (
    <div>
<Header/>
      <div>
        <h2>Selected Items:</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.menu_id}>
              ID: {item.menu_id}, Name: {item.menu_name}, Price: {item.menu_price}
            </li>
          ))}
        </ul>
        Add code here to handle the order placement
      </div>
      <h1>Total price is {totalPrice}</h1>

      {/* <h1>Order for Ama cafe</h1> */}
      {/* action="http://localhost:4100/paynow" method="POST" */}
      {/* onSubmit={submitorder} */}

      <form action="http://localhost:4100/paynow" method="POST">
        <input type='hidden' name='cost' value= {totalPrice} />
        <input type='hidden' name='orderid' value= {orderid} />
        {/* <input type='hidden' name='hotel_name' value="bajaj finance" /> */}

        <label>Name</label>
        <input type="text" name="name" required value={formdata.name} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" required value={formdata.email} onChange={handleChange} />

        <label>Phone</label>
        <input type="text" name="phone" required value={formdata.phone} onChange={handleChange} />

        <label>Address</label>
        <input type="text" name="address" required value={formdata.address} onChange={handleChange} />

        <button type="submit" onClick={submitorder}>place Order</button>
      </form>

    </div>
  )
}

export default PlaceOrder;









