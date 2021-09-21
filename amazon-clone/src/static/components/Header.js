import React from 'react';
import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png">
                </img>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option_line_one">Hello Guest</span>
                    <span className="header_option_line_two">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_option_line_one">Returns</span>
                    <span className="header_option_line_two">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_option_line_one">Your</span>
                    <span className="header_option_line_two">Prime</span>
                </div>
                <div>
                    <Link to="/checkout">
                        <div className="header_option_basket">
                            <ShoppingBasketIcon />
                            <span className="header_option_line_two header_basket_count">0</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )

}


export default Header;
