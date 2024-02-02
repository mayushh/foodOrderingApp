export function filterRestaurant(searchTxt, filterCurrentRestaurantList) {
    const filteredData =  filterCurrentRestaurantList.filter((arr) => {
      return arr.info.name.toLowerCase().includes(searchTxt)
    }
   
    )
    return filteredData
  }