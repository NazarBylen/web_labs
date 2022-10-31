import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux'

import Home from './modules/Home/Home';
import Catalog from './modules/Catalog/Catalog';
import Item from './modules/Catalog/Item';
import Cart from './modules/Cart/Cart';
import {Layout} from './components';
import {store} from './store'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/catalog/item/:id" element={<Item />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/cart/checkout" element={<div>checkout</div>}/>
            <Route path="/cart/success" element={<div>success</div>}/>
            <Route path="/auth/sign-up" element={<div>sign up</div>}/>
            <Route path="/auth/sign-in" element={<div>sign in</div>}/>
        </Routes>
    )
}

function App() {
    return (
        <StoreProvider store={ store }>
            <BrowserRouter>
                    <Layout>
                        <AppRoutes/>
                    </Layout>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;