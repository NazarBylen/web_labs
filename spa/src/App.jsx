import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

import Home from './modules/Home/Home';
import Catalog from './modules/Catalog/Catalog';
import { Layout } from './components';

const AppRoutes = () => {
    return (
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/item/:id" element={<div>item page</div>} />
                <Route path="/cart" element={<div>cart</div>} />
                <Route path="/cart/checkout" element={<div>checkout</div>} />
                <Route path="/cart/success" element={<div>success</div>} />
                <Route path="/auth/sign-up" element={<div>sign up</div>} />
                <Route path="/auth/sign-in" element={<div>sign in</div>} />
        </Routes>
    )
}

function App() {
  return (
      <BrowserRouter>
        <Layout>
           <AppRoutes />
        </Layout>
      </BrowserRouter>
  );
}

export default App;