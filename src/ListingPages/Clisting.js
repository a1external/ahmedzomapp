import React, { useState, useEffect, memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetAllMealDataQuery } from '../Services/apiConfig';
import './Clisting.css';

const Clisting = () => {
  const { mealid } = useParams();
  const { data, isLoading, error } = useGetAllMealDataQuery(mealid);
 
  const [selectedCategory, setSelectedCategory] = useState([]);
  console.log(data)
  useEffect(() => {
    setSelectedCategory(data || []);
  }, [data]);

  const handleFilter = (selectedValue) => {
    if (selectedValue === 'All') {
      setSelectedCategory(data || []);
    }
    else if (selectedValue === '400') {

      const filteredData = data.filter(

        item => item.cost <= 400)

      setSelectedCategory(filteredData);
    }
    else if (selectedValue === '600') {

      const filteredData = data.filter(
        item => item.cost >= 400 && item.cost <= 600)
      console.log("Filtered Data:", filteredData);
      setSelectedCategory(filteredData);
    }
    else {
      const filteredData = data.filter(
        item => item.cuisines[0].cuisine_name === selectedValue || item.cuisines[1].cuisine_name === selectedValue
      );
      setSelectedCategory(filteredData);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (

    <>
          <div className='row custom-list ' >
        <div className='col-lg-4 filtermeal'>
          <div  >
         <ul className="list-unstyle " >
           <li class="list-group-item filtermeal">
            <input type="radio" id="All" name="fav_language" value="All" onChange={(e) => handleFilter(e.target.value)} />
            <label htmlFor="All">All</label>
          </li>
           <li class="list-group-item"> <input type="radio" id="North Indian" name="fav_language" value="North Indian" onChange={(e) => handleFilter(e.target.value)} />
            <label htmlFor="North Indian">North Indian</label></li>
          <li class="list-group-item"><input type="radio" id="South Indian" name="fav_language" value="South Indian" onChange={(e) => handleFilter(e.target.value)} />
            <label htmlFor="South Indian">South Indian</label></li>
         </ul>                  
          </div>

          <div>
          <ul class="list-unstyle">
  <li class="list-group-item"><input type="radio" id="cost400" name="fav_language" value="400" onChange={(e) => handleFilter(e.target.value)} />
            <label htmlFor="cost400">cost 0-400</label><br /></li>
  <li class="list-group-item"><input type="radio" id="cost600" name="fav_language" value="600" onChange={(e) => handleFilter(e.target.value)} />
            <label htmlFor="cost600">cost 400-600</label><br /></li>
 </ul>         
       </div>
       </div>

        <div className='col-lg-6'> 
          {selectedCategory.length > 0 ? (
            selectedCategory.map((item) => (
             

              <div key={item.restaurant_name}>
               <img src={item.restaurant_thumb} width = "200px" height="200px" alt="abcd" />

                <div >
                <div>
                <Link key={item.restaurant_name} to={`/Details/rest_id/${item.restaurant_id}`}>
                  {item.restaurant_name}
                  </Link>
                  <p >{item.rating_text}</p>
                  <p >{item.cost}</p>
                </div> 
                  <div className='btn-group'>
                    <p className='btn btn-warning'>{item.mealTypes[0].mealtype_name}</p>
                    <p className='btn btn-danger'>{item.mealTypes[1].mealtype_name}</p>
                  </div>
                  <div className='btn-group'>
                    <p className='btn btn-primary'>{item.cuisines[0].cuisine_name}</p>
                    <p className='btn btn-secondary'>{item.cuisines[1].cuisine_name}</p>
                  </div>

                </div>

              </div>
            ))
          ) : (
            <p>No data to display</p>
          )}

        


</div>

      </div>

    </>

  );
};

export default React.memo(Clisting);
