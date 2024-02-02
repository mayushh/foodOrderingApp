import { useParams } from "react-router-dom";
import React from 'react'
import Loading from "./Loading";
import useRestaurant from "../../utils/useRestaurant";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
import { Card } from "./Card";



const RestaurantMenu = ({user}) => {
  const params = useParams()
  const { resId } = params; // instead of using const params directly resId can be written
  const restaurant = useRestaurant()
  console.log(restaurant);
  const dispatch = useDispatch();
  const handleClick = (itemInfo) => {
    dispatch(addItem(itemInfo));
    console.log(itemInfo);
  }
  // we made useRestaurant a hook in utils before this we had wrote that code here instead of using or making it as hook
  if (!restaurant) {
    <Loading></Loading>
  }
  else {
    return (
      <>
        <h1 data-testid = "testMenu">restaurant id = {resId}</h1>
        <div data-testid = "rest-list"  className="cards flex flex-wrap -m-4 border-s-orange-50" id='cards ' >
            { restaurant.map((items) => ( // we just used useState variable to alter array of restaurantList
              <div className='w-1/4 p-4 ' key={items.info.id} > 
                <Card restaurantList={items}  />
                <button data-testid = "addbtn" className="p-2 m-4 bg-red-600 text-sm" onClick={() => handleClick(items)}>add this item</button>
              </div>
             
              //the restaurantList is the props which is destructured
              
            ))}
            <div data-testid = "testMenu">hello</div>
        </div>
        
      </>
    )
  }
}
export default RestaurantMenu
// {/* <div className="menu">

// {
//   Object.values(restaurant).map((items) => (
//     <div key={items.info.id}>
//      {/* <Card restaurantList={items} user={user} /> */}
//       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + items.info.cloudinaryImageId} alt="imgMenu" />

//       <li>{items.info.name}</li>
//      
//     </div>
//   ))
// }

// </div> */}