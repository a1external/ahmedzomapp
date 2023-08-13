// import "./category.css";
// import { useGetAllDataQuery } from "../Services/apiConfig";
// import { Link } from "react-router-dom";

// const Category = () => {
//    const { data, error, isLoading } = useGetAllDataQuery()
//    // console.log("i am quick search data", data)
//    if (isLoading) {
//       return <div>Loading...</div>;
//    }
//    if (error) {
//       return <div>Error: {error.message}</div>;
//    }
//    const resturant = data.map((item) => {
//       return (
//          <>
//             <Link to={`/listing/${item.mealtype_id}`}>
//                <div className="cardbx">
//                   <div className="cardinsidebox">
//                      <img src={item.meal_image} alt={item.mealtype}></img>
//                      <h3>{item.mealtype}</h3>
//                      <p className="cardtext">{item.content}</p>
//                   </div>
//                </div>
//             </Link>
//          </>
//       )
//    })

//    return (
//       <>

//          <h1>{resturant}</h1>

//       </>
//    )
// }
// export default Category;

// import "./category.css";
// import { useGetAllDataQuery } from "../Services/apiConfig";
// import { Link } from "react-router-dom";

// const Category = () => {
//    const { data, error, isLoading } = useGetAllDataQuery();

//    if (isLoading) {
//       return <div>Loading...</div>;
//    }

//    if (error) {
//       return <div>Error: {error.message}</div>;
//    }

//    return (
//       <>
//          {data.map((item) => (
//             <Link key={item.mealtype_id} to={`/listing/${item.mealtype_id}`}>
//                <div className="cardbx">
//                   <div className="cardinsidebox">
//                      <img src={item.meal_image} alt="meal image" />
//                      <h3>{item.mealtype}</h3>
//                      <p className="cardtext">{item.content}</p>
//                   </div>
//                </div>
//             </Link>
//          ))}
//       </>
//    );
// };

// export default Category;


import React from "react";
import "./category.css";
import { useGetAllDataQuery } from "../Services/apiConfig";
import { Link } from "react-router-dom";

const Category = () => {
  const { data, error, isLoading } = useGetAllDataQuery();
console.log("i am catagory",data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="horizontal-container">
      {data.map((item) => (
        <Link key={item.mealtype_id} to={`/listing/${item.mealtype_id}`}>
          <div className="cardbx">
            <div className="cardinsidebox">
              <img src={item.meal_image} alt="meal" />
              <h3>{item.mealtype}</h3>
              <p className="cardtext">{item.content}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;

