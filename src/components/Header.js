import { Search, ShoppingCart } from '@material-ui/icons';
import React from 'react';
import '../Header.css';

const logo_url = "http://www.pngimg.com/uploads/amazon/amazon_PNG11.png";
const cart_icon_url = "https://www.pngitem.com/pimgs/m/177-1771646_amazon-shopping-cart-icon-hd-png-download.png";

const Header = () => {
    return (
        <div className='header'>
            <img className="header_logo" src={logo_url} alt="logo" />

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <Search className="header_searchIcon" />
            </div>

            <div className="header_options">

                <div className="header_username">
                    <p className="header_firstLine">Hi Guest</p>
                    <span className="header_secondLine">Sign in</span>
                </div>

                <div className="header_orders">
                    <p className="header_firstLine">Returns &amp;</p>
                    <span className="header_secondLine">Orders</span>
                </div>

                <div className="header_orders">
                    <p className="header_firstLine">Your</p>
                    <span className="header_secondLine">Prime</span>
                </div>

                <div className="header_cart">
                    <ShoppingCart className="header_cartIcon"/>
                    <span className="header_secondLine">0</span>
                </div>

            </div>
        </div>
    );
}

export default Header;
