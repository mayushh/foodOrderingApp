import { render } from '@testing-library/react'
import { Header } from '../Header'
import { Provider } from 'react-redux'
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'

test('header loading', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>)
    // console.log(header)
    const logo = (header.getAllByTestId("logo"))
    expect(logo[0].src).toBe("http://localhost/download.png");
})
test('cart should have 0 items initially', () => { 
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>) 
        const cart = header.getByTestId("cartItemNum")
        expect(cart.innerHTML).toBe("cart ")
})