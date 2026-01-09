import React , {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([])
  useEffect(()=>{
     let getData = async () => {
         let res = await fetch('https://gist.githubusercontent.com/deliveroo-interviews/fc29b2ae38280bf30f4d022a68f96a86/raw/497f74503512fc1a873c9d9eb7d3a655ebadf138/web_restaurant_list.json')
         let data = await res.json();
         //console.log(data)
         setRestaurants(data.body.restaurants)
        }
     getData();
  }, [])
  return(
  <div className="restaurants">
    <div className="container">
      <p className="restaurants__count">{restaurants.length} Restaurants</p>
      <div className="restaurants__list">
        {restaurants.map((restaurant) => {
          return(
            <div key={restaurant.id}>
               <RestaurantCard name={restaurant.name} imageUrl={restaurant.image} price={restaurant.price} tags={restaurant.tags} />
            </div>
          )
        })}
        
      </div>
    </div>
  </div>)}
export default RestaurantList;