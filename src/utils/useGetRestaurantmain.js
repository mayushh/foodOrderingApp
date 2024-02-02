import { useState, useEffect } from 'react';

const useGetRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        
        const restaurants = json?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants;
        
        setRestaurantList(restaurants);
        setFilteredRestaurantList(restaurants);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on mount

  return { restaurantList, filteredRestaurantList };
};

export default useGetRestaurant;
