import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../Checkout.css';
import Subtotal from './Subtotal';
import { StateContext } from '../context/StateContext';
import CheckoutProduct from './CheckoutProduct';

const url_imageAd = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg";

const Checkout = () => {
    
    return (
        <div className="checkout">

            <div className="checkout__left">
                <img src={url_imageAd} alt="amazon_ad" className="checkout__ad" />
                <h2 className="checkout__title"> Your shopping basket </h2>

                <CheckoutProduct/>
                
                {/* <Shopping product/> */}
                {/* <Shopping product/> */}
                {/* <Shopping product/> */}
                {/* <Shopping product/> */}

            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

           
        </div>
    );
};


Checkout.propTypes = {

};


export default Checkout;
