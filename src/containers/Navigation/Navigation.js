import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';
import FilmsList from "../Catalog/Catalog";
import { SmileOutlined } from "@ant-design/icons";  
import FilmPage from "../FilmPage/Film.Page";
import CartPage from "../Redux/CartPage";
import CheckoutPage from "../Checkout/CheckoutPage";  
import SuccessPage from "../Success/SuccessPage";    
import SignUpPage from "../PreeProtectedPages/SignUpPage";
import ProtectedRoute from "../PreeProtectedPages/ProtectedStyle";
import LoginPage from "../PreeProtectedPages/LoginPage";
import SignOutButton from "../PreeProtectedPages/SignOut";

const Navigation = () => (
    <Router>
        <LinkingWrapper>
            <div className="navigation-icons">
                <SmileOutlined style={{ fontSize: '50px', color: '#000', marginTop: '30px', marginLeft: '50px' }} />
            </div>
            <ul>
                <li>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? 'selected' : '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Catalog" className={({ isActive }) => (isActive ? 'selected' : '')}>Catalog</NavLink>
                </li>
                <li>
                    <NavLink to="/Cart" className={({ isActive }) => (isActive ? 'selected' : '')}>Cart</NavLink>
                </li>
                <li>
                    <SignOutButton />
                </li>
                {/* <li>
                    <button onClick={SignOutButton}>Sign Out</button>
                </li> */}
            </ul>
            <Routes>

                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<SignUpPage />} /> 
                <Route path="/" element={<LoginPage />} />

                <Route path="/Catalog" element={<ProtectedRoute element={<FilmsList />} />} />

                <Route path="/Cart" element={<ProtectedRoute element={<CartPage />} />} />

                <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
                

                <Route path="/film/:id" element={<ProtectedRoute element={<FilmPage />} />} />

                <Route path="/checkout" element={<ProtectedRoute element={<CheckoutPage />} />} />
                <Route path="/success" element={<ProtectedRoute element={<SuccessPage />} />} />

            </Routes>
        </LinkingWrapper>
    </Router>
);

export default Navigation;


// App.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './Store';
// import CartPage from './CartPage';
// import FilmPage from "../FilmPage/Film.Page";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <FilmPage />
//       <CartPage />
//     </Provider>
//   );
// };

// export default App;
