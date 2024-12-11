import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './Actions';
import "./CartPage.css";
import { Link } from 'react-router-dom';

const CartPage = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="cart-page">
                        <h3>{item.name}</h3>
                        <p>Duration: {item.duration} min</p>
                        <p>Reviews: {item.reviews}</p>
                        {/* <p>Price: ${item.price}</p> */}
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}

            <div className="continue-button">
                <Link to="/checkout">
                    <button>Continue</button>
                </Link>
            </div>
        </div>
    );
};

export default CartPage;
