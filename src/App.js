import React, {lazy, Suspense, useState} from 'react'
import userContext from './utils/UserContext';
import Error from './components/Error';
import { Header } from './components/Header'
import { Body } from './Body'
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from './components/About';
import Cart from './components/Cart';
import Support from './components/Support';
import RestaurantMenu from './components/body/RestaurantMenu';
import Profile from './components/body/Profile';
import ProfileClass from './PofileAsClassComponent';
import Loading from './components/body/Loading';
import { Provider } from 'react-redux';
import meraStore from './utils/store';
const Shoppee = lazy(()=> import("./Shoppee"))

{
  /**
   * if you want to figure out how import work like how to navigate to that file 
   * to do this just remember this
   *  single dot means we are going outside the folder 
   * and ./ means nothing this is just a seperator
   * like see if you want to import constant file from cardItems :-
   * first we do single dot then we are outside body now we wat to go outside component we again another dot 
   * but two dot will be seperate with a seperator ./ like this ../../constant
   * first dot then one dot and / and another dot and then seperator which is dot and / and name of file
   * fuck i am future self and could not get this in single shot so
  */
}
const user = {
  // here i am using props drilling
  name : "naam",
  email : "Email- ayushmalviya@gmail.com"
}
// we are creating user object outside the app component because user is being used in props in body component as props drilling
const App = () => {
  const [userKaData, setUserKaData] = useState({
      name:"yaha naam aur aap context ki help se change kr sakte hai ",
      email: "email",
    
  })

  // with this userKaData we are using learn context api 
  return (
    <Provider store={meraStore}> 
     {/* meraStore is a store that i made and just named it as meraStore so that i won't get confused */}
    <userContext.Provider value={{
      userDetails: userKaData,
      setUserDetails : setUserKaData
    }}>

      <Header />
      <Outlet />

    </userContext.Provider>
    </Provider>
  )

}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [

      {
        path: "/",
        element: <Body user = {user}/>,
        // with this {user} we are props drilling
      },
      {
        path: "/About",
        element: <About />,
        children: [
          {
            path: "Profile",// /About/Profile this will work same 
            element : <Profile/>,
            element:<ProfileClass/>
          }
        ]
      },
      {
        path: "/Cart",
        element: <Cart  user = {user} />,
      },
      {
        path: "/Support",
        element: <Support />,
      },
      {
        path: "/RestaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Shoppee",
        element: <Suspense fallback={<Loading/>}> <Shoppee/></Suspense>,
      }
    ]
  }
])
export default App;
// in the end these whole component data and code will be bundled in one jsx file 
// for big apps like swiggy amazon and many more they don't bundle whole component into one jsx file
// they split the bundles on usecases
// when the particular section loads then the it's component which are bundled together will load 
// because big apps have hundreds of component if not thousands, if we bundle everything together then app will become very slow
// this method is called as 
// code splitting
//laxy loading 
// chunking
//dynamic bundling
// on demang loading