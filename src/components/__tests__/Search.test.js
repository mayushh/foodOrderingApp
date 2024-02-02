import { render, waitFor, screen, fireEvent,waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'
import store from '../../utils/store'
import { Body } from '../../Body'
import restaurantList from '../../constant'


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(restaurantList)
    });
});
test('loading page should load first on homepage of course if not offline', () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>)
    console.log(body)
    const loading = body.getByTestId("loading")
    expect(loading.innerHTML).toBe("Loading Restaurants For You")
    /////// you can do either 
    //    const loadingComp = body.getByTestId("loadingDiv")
    //    expect(loadingComp.children.length).toBe(2)
    // you can also do below
    // expect(loadingComp).toBeInTheDocument() 




}
)
// the problem is that 



// ... your mocking setup

// test('body should load after loading component if the data is fetched', async () => {
  
  
//     const body = render(
//       <StaticRouter>
//         <Provider store={store}>
//           <Body/>
//         </Provider>
//       </StaticRouter>
//     );
//     await waitFor(() => expect(screen.getByTestId("test")));  
//     const cardNum = screen.getAllByTestId("rest-list");
//     expect(cardNum.children.length).toBe(20);
//   });
  

// test('search functionality should work', async () => {
//     const body = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Body />
//             </Provider>
//         </StaticRouter>)
//     await waitFor(() => {
//         expect(body.getByTestId("searchBtn"));
//     });
//     const input = body.getByTestId("searchValue")
//     fireEvent.change(input, {
//         target: {
//             value: "food",
//         }
//     })
//     const searchbtn = body.getByTestId("searchBtn");
//     fireEvent.click(searchbtn)
//     const searchValues = body.getByTestId("rest-list");
//     expect(searchValues.length).toBe(3); //after searching 

// })
