import React from 'react'
import { useSelector,useDispatch   } from 'react-redux';
import { FoodList} from './body/FoodList';
import { clearItems } from '../utils/cartSlice';

const Cart = ({ user }) => {
  const cartItems = useSelector((store) => store.cart.items)
  const myArray = Object.keys(cartItems).map(key => cartItems[key]);
  const dispatch = useDispatch()
  const handleClearCart = ()=>{
    dispatch(clearItems());
    if(myArray.length===0){
      
    alert("nothing in cart")
    }
    else{
      setTimeout(() => {
        alert("cart has been cleared")
      }, 2000);
     
    }
  }


  return (
    <>
    <div>this is your cart and it has  {cartItems.length} items </div>
    <div>
          {(myArray.length != 0) ? <button className='border border-green-600 p-2 m-11  bg-green-200'>proceed to check out</button> : <p className='m-5 p-5'>cart is empty</p>}

        </div>

      <div className='cards flex  flex-wrap m-auto border-s-orange-50'>
        {cartItems.map((items) => (
            <div className='w-1/4 p-4  flex flex-wrap -m-4 border-s-orange-50' key={items.id} > <FoodList restaurantList={items} user={user} /></div>
          ))}
          </div>  
          <div>
          <button className= ' m-5 p-2 btn bg-gray-500' onClick={()=>handleClearCart()} > Remove all items  </button>
          </div>
        </>
      
    
  )
}

export default Cart
