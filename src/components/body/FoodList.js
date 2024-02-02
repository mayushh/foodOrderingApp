import React from 'react'

export const FoodList = ({ restaurantList  }) => {

  const { name, cuisines, cloudinaryImageId, avgRatingString } = restaurantList.info
  // sending resturantList as props here we just destructured this array
  // now we don't need to write props before resturantList
  // similar but it looks cool
  // console.log(restaurantList.info.name) will be equal to writing console.log(name);
  return (
    <>

      <div className='bg-pink-300 m-3 shadow-red-700 relative  border-solid  overflow-hidden h-full border-black-100 rounded-lg'>
        <img className='img p-2' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img" />
        <div className='cardInfo'>
          <strong style={{ fontSize: "20px", padding: "none", margin: "2px", paddingLeft: "10px", height: "10%" }}>{restaurantList.info.name}</strong>
          
        </div>
      </div>
    </>
    // 
  )
}