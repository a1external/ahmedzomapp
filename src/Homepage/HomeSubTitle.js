// import React, { useState } from "react";
// import './HomeSubTitle.css'
// import HomeSubTitle1 from "./HomeSubTitle1";
// import { useGetAllLocationDataQuery } from "../Services/apiConfig";
// const HomeSubTitle = () => {
//   const { data, error, isLoading } = useGetAllLocationDataQuery()
//   console.log("location data", data)
//   const [stateid, setstateid] = useState()

//   // console.log("i need state id", stateid)
//   // console.log("i need city", city)
//   const handlechange = (abc) => {
//     setstateid(abc)
//   }
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
//             <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
//             <ul class="dropdown-menu">
//               {data.map((location) => {
//                 return (<li onClick={() => { handlechange(location.state_id) }}><a class="dropdown-item" href="#">{location.state}</a></li>)
//               })}
//             </ul>
//             <HomeSubTitle1 stateid={stateid} />
//           </div>
//         </div>
//       </div>):null}

//     </>
//   )
// }
// export default HomeSubTitle;


import React, { useState } from "react";
import "./HomeSubTitle.css";
import HomeSubTitle1 from "./HomeSubTitle1";
import { useGetAllLocationDataQuery } from "../Services/apiConfig";

const HomeSubTitle = () => {
  const { data, error, isLoading } = useGetAllLocationDataQuery();
  console.log("location data", data);
  const [stateid, setstateid] = useState();

  const handlechange = (abc) => {
    setstateid(abc);
  };

  return (
    <>
      {error && <>Oh no, there was an error</>}
      {!error && isLoading && <>Loading...</>}
      {!error && !isLoading && data && (
        <div className="col-lg-12x ">
          <h2 style={{ color: "white", fontSize: "" }}>
            Discover the best food & drinks in Bidar
          </h2>
          <div className="col-lg-12 d-flex justify-content-center">
            <div class="input-group mb-3 barsize">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu">
                {data.map((location) => (
                  <li
                    key={location.state_id}
                    onClick={() => {
                      handlechange(location.state_id);
                    }}
                  >
                    <a class="dropdown-item" href="#">
                      {location.state}
                    </a>
                  </li>
                ))}
              </ul>
              {stateid && <HomeSubTitle1 stateid={stateid} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeSubTitle;
