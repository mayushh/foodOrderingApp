import { render, waitFor, screen, fireEvent,waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'
import store from '../../utils/store'
import RestaurantMenu from '../body/RestaurantMenu'
import Header from '../Header'
import restaurantMenuData from '../../constant'


global.fetch = jest.fn(() => {
    return Promise.resolve({json: () => Promise.resolve(restaurantMenuData)});
});
// test('adding from restaurant menu item to cart', async () => {
  
  
//     const body = render(
//       <StaticRouter>
//         <Provider store={store}>
//          <RestaurantMenu/> 
//         </Provider>
//       </StaticRouter>
//     );
//     await waitFor(() => expect(body.getAllByTestId("testMenu")));  
//     // const cardNum = body.getByTestId("rest-list");
//     // expect(cardNum.children.length).toBe(1);
//     const addbtn = body.getAllByTestId("addbtn")
//     fireEvent.click(addbtn[0])
//    const cartNum =  screen.getByTestId("cartItemNum")
//         expect(cartNum.innerHTML).toBe("cart 1")
//   });
  
