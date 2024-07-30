import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Card } from './components/body/Card'
import { img_broadcast } from './constant'
import { restaurantList } from './constant'
import Loading from './components/body/Loading'
import { Link } from 'react-router-dom'
import { filterRestaurant } from './utils/Helper'
import useGetRestaurantmain from './utils/useGetRestaurantmain'
import useOffline from './utils/useOffline'
import userContext from './utils/UserContext'


export const Body = ({ user }) => {


  const { userDetails, setUserDetails } = useContext(userContext);
  // here we are destructuring userContext // remember in usercontext provider we added setUserDetails that is what we are taking here
  const [search, setSearch] = useState("")
  const [search2, setSearch2] = useState(userDetails.name)
  const [search3, setSearch3] = useState(userDetails.email)
  const [hello, setHello] = useState("")
  let [currentRestaurantList, setRestaurantList] = useState([])
  // i am making this filter restaurant list because this will save one copy of array of all Restaurant 
  // and search feature will search from that restaurant
  let [filterCurrentRestaurantList, filterSetRestaurantList] = useState([])
  const onChange = (e) => {
    setSearch(e.target.value)
  }
  const onSearch = (e) => {
    e.preventDefault()
    search.toLowerCase()
    // setSearch("")
    let data = filterRestaurant(search.toLowerCase(), filterCurrentRestaurantList)
    setRestaurantList(data)
    // setRestaurantList(restaurantList)
  }
  // this is the function to fetch restaurants data
  let data
  async function getRestaurants() {
    try {
      data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json()
      setRestaurantList(json?.data?.cards[1]?.card?.card.gridElements.infoWithStyle.restaurants);
      filterSetRestaurantList(json?.data?.cards[1]?.card?.card.gridElements.infoWithStyle.restaurants);
      console.log(json?.data?.cards[1]?.card?.card.gridElements.infoWithStyle.restaurants)

    } catch (error) {
      console.log("some error has occured " + error)
    }

  }
  // useGetRestaurantmain()//todo make getRestaurant as hook
  

  // useEffect to render the function only once or only when dependency variable is changed 
  // dependency variable is written inside this box []

  // useEffect will be only render once if the dependency array is empty 
  // if there is no dependency array than it will be called everytime something happens like state changes
  let offline = useOffline();
  const onChange2 = (e) => {
    setSearch2(e.target.value)

  }
  const onChange3 = (e) => {
    setSearch3(e.target.value)

  }
  const onSearch2 = (e) => {
    // setSearch2("")
    setUserDetails({
      name: search2,
      email: search3
    })
  }
  useEffect(() => {

    getRestaurants();

  }, [])
  // if (offline) { return <h1>check your interenet connection</h1> }

  if (!currentRestaurantList) {
    return null
  }

  else {
    return (filterCurrentRestaurantList.length === 0) ? <Loading></Loading> : (
      <>
        <div className='broad flex justify-between'>
          <div className="heading align-middle pl-20 ">
            <h1 className='text-5xl mt-20 py-5' >Order Food Online </h1>
            <h2 className='text-5xl'>in Delhi</h2>
          </div>
          <img src={img_broadcast} alt="img" />
        </div>
        <div>
          <input className='m-2' type="text" value={search2} onChange={onChange2} />
          <input className='m-2' placeholder='you can enter you email here' type="text" value={search3} onChange={onChange3} />
          <button type='submit' onClick={onSearch2}>set to header</button>
          {/* this input box is helping to learn context */}
        </div>
        <div className='body '>
          <div className="search flex pl-950 bg-pink-300 p-2 mb-2">
            <input data-testid = "searchValue"  className='border-black mx-3 content-end m-auto h-10 mr-5  pl-2' type="text" placeholder='Search Restaurants' value={search} onChange={onChange} />
            <button  data-testid = "searchBtn" className='p-2 px-5 rounded-md m-auto border-2  bg-green-600 text-white hover:text-lg ' type='submit' onClick={onSearch}>search</button>
          </div>

          <div className="cards flex flex-wrap -m-4 border-s-orange-50" id='cards ' data-testid = "rest-list">
            {(currentRestaurantList.length === 0) ? <h1>no restaurant found {search} </h1> : currentRestaurantList.map((restaurantKiList) => ( // we just used useState variable to alter array of restaurantList
              <Link className='w-1/4 p-4 ' key={restaurantKiList.info.id} to={"/restaurantMenu/" + restaurantKiList.info.id} > <Card restaurantList={restaurantKiList} user={user} /></Link>
              //the restaurantList is the props which is destructured
            ))}
          </div>
          <div data-testid="test"></div>
        </div>
        {/* for key myself have given restaurant ki info ki id */}
        {/* 
    before we were doing like this
    <Card resturantList={resturantList[0]}/>
     */}


      </>

    )
  }
}
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING