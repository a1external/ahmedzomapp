// import React, { useState } from "react";

// import {useGetAllCityDataQuery } from "../Services/apiConfig";
// const HomeSubTitle1 = ({stateid}) => {
 
//     const { data, error, isLoading } = useGetAllCityDataQuery(stateid) 
//    console.log("i need city", data)

 
//   return (
//     <>
//     {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//       <div className="col-lg-12x " >
//         <h2 style={{ color: "white", fontSize: "" }}>Discover the best food & drinks in Bidar</h2>
//         <div className='col-lg-12 d-flex justify-content-center'>
//           <div class="input-group mb-3 barsize">
//             {/* <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button> */}
//              <select>
//                 {data.map((incity) => {
//                 return (
//                 <option>
//                    {incity.address}
//                 </option>)
//               })}      
//             </select> 
//           </div>
//         </div>
//       </div>):null}

//     </>
//   )
// }
// export default HomeSubTitle1;

import React from "react";
import { useGetAllCityDataQuery } from "../Services/apiConfig";

const HomeSubTitle1 = ({ stateid }) => {
  const { data, error, isLoading } = useGetAllCityDataQuery(stateid);

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return data ? (
    <div className="col-lg-12x ">
      <h2 style={{ color: "white", fontSize: "" }}>
        Discover the best food & drinks in Bidar
      </h2>
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="input-group mb-3 barsize">
          <select>
            {data.map((incity) => (
              <option key={incity.city_id}>{incity.address}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  ) : null;
};

export default HomeSubTitle1;
