import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './SuccessPage.css';

const SuccessPage = () => {
    const navigate = useNavigate(); 

    return (
        <div className="success-page">
            <h2>Order Successful</h2>
            <p>Your order has been successfully placed!</p>
            <button onClick={() => navigate('/Catalog')}>Go to Catalog</button> 
        </div>
    );
};

export default SuccessPage;
