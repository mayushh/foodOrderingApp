import { useState, useEffect } from 'react'
const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState([])
  async function getRestaurantInfo() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=Gramin&trackingId=23f9c9e0-97da-b4e2-b4f7-de74c5dec3d3&submitAction=ENTER&queryUniqueId=14bb3934-26f1-2d6b-9972-16b9f8391774")
    const json = await data.json()// if you do any console log here it won't be visible in console log cause this function is returning restaurant array fetched by the api above not returning the full function
    setRestaurant(json.data.cards[1]?.groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card.restaurants);
  }
  useEffect(() => {
    getRestaurantInfo();


  }, [])
  return restaurant
}


export default useRestaurant
